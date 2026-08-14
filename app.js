require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");
const bcrypt = require("bcryptjs");

const Listing = require("./models/listing.js");
const User = require("./models/user.js");
const Review = require("./models/review.js");

const app = express();
const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/AirNet";

// Database Connection
main()
    .then(() => console.log("Connected to AirNet MongoDB Database ('AirNet')"))
    .catch((err) => console.error("AirNet Database connection error:", err));

async function main() {
    await mongoose.connect(MONGO_URL);
}

// App Configuration
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// Session & Flash Configuration
const sessionConfig = {
    secret: process.env.SESSION_SECRET || "airnet_super_secret_key_2026",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000
    }
};

app.use(session(sessionConfig));
app.use(flash());

// Global Local Variables Middleware
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currentUser = req.session.user || null;
    res.locals.isAdmin = req.session.user && req.session.user.role === "admin";
    // Detect if current path is an Admin path (/admin/*)
    res.locals.isAdminPath = req.path.startsWith("/admin");
    next();
});

// Middleware for Admin Protection
function requireAdmin(req, res, next) {
    if (req.session.user && req.session.user.role === "admin") {
        return next();
    }
    req.flash("error", "Admin access required. Please login with admin credentials.");
    res.redirect("/login");
}

// Root Route -> Redirect to listings
app.get("/", (req, res) => {
    res.redirect("/listings");
});

// ==========================================
// AUTHENTICATION ROUTES (User & Admin)
// ==========================================

// Register GET
app.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});

// Register POST
app.post("/signup", async (req, res, next) => {
    try {
        const { username, email, phone, password } = req.body;

        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            req.flash("error", "Username or email is already registered. Please login.");
            return res.redirect("/signup");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username: username.trim(),
            email: email.trim().toLowerCase(),
            phone: phone ? phone.trim() : "",
            password: hashedPassword,
            role: "user"
        });

        await newUser.save();
        req.session.user = {
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            role: newUser.role
        };

        req.flash("success", "Welcome to AirNet! Your account is created with 10% discount unlocked.");
        res.redirect("/verify");
    } catch (err) {
        next(err);
    }
});

// Login GET
app.get("/login", (req, res) => {
    res.render("users/login.ejs");
});

// Login POST (Handles both User and Admin Login)
app.post("/login", async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({
            $or: [{ username: username.trim() }, { email: username.trim().toLowerCase() }]
        });

        if (!user) {
            req.flash("error", "Invalid username/email or password.");
            return res.redirect("/login");
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            req.flash("error", "Invalid username/email or password.");
            return res.redirect("/login");
        }

        req.session.user = {
            _id: user._id,
            username: user.username,
            email: user.email,
            role: user.role
        };

        if (user.role === "admin") {
            req.flash("success", `Welcome Admin ${user.username}! Admin Control Center unlocked.`);
            return res.redirect("/admin/dashboard");
        } else {
            req.flash("success", `Welcome back ${user.username}! 10% discount ready for your next stay.`);
            return res.redirect("/listings");
        }
    } catch (err) {
        next(err);
    }
});

// Logout Route
app.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/listings");
    });
});

// Verification Routes (Email Verification & Phone OTP)
app.get("/verify", (req, res) => {
    res.render("users/verify.ejs");
});

app.post("/verify-email", async (req, res) => {
    if (req.session.user) {
        await User.findByIdAndUpdate(req.session.user._id, { isEmailVerified: true });
    }
    req.flash("success", "Email address verified successfully!");
    res.redirect("/listings");
});

app.post("/verify-phone", async (req, res) => {
    if (req.session.user) {
        await User.findByIdAndUpdate(req.session.user._id, { isPhoneVerified: true });
    }
    req.flash("success", "Mobile Phone verified via OTP!");
    res.redirect("/listings");
});

// Forgot Password Routes
app.get("/forgot-password", (req, res) => {
    res.render("users/forgot.ejs");
});

app.post("/forgot-password", (req, res) => {
    req.flash("success", "Password reset instructions sent to your registered email address.");
    res.redirect("/login");
});

// ==========================================
// DEDICATED ADMIN PORTAL ROUTES (/admin/*)
// ==========================================

// Admin Dashboard
app.get("/admin/dashboard", requireAdmin, async (req, res, next) => {
    try {
        const totalListings = await Listing.countDocuments();
        const oyoCount = await Listing.countDocuments({ $or: [{ propertyType: "OYO Hotel" }, { isOYOVerified: true }] });
        const totalUsers = await User.countDocuments();
        const recentListings = await Listing.find().sort({ createdAt: -1 }).limit(10);

        res.render("admin/dashboard.ejs", {
            totalListings,
            oyoCount,
            totalUsers,
            recentListings
        });
    } catch (err) {
        next(err);
    }
});

// Admin All Listings Management View
app.get("/admin/listings", requireAdmin, async (req, res, next) => {
    try {
        const allListings = await Listing.find().sort({ createdAt: -1 });
        res.render("admin/dashboard.ejs", {
            totalListings: allListings.length,
            oyoCount: allListings.filter(l => l.propertyType === "OYO Hotel" || l.isOYOVerified).length,
            totalUsers: await User.countDocuments(),
            recentListings: allListings
        });
    } catch (err) {
        next(err);
    }
});

// ==========================================
// LISTING CRUD ROUTES
// ==========================================

// Index Route (Listings with Category, PropertyType, State, City, Search & Guest Filters)
app.get("/listings", async (req, res, next) => {
    try {
        const { category, propertyType, search, state, city, guests, coupleFriendly, payAtHotel } = req.query;
        let query = {};   // No status filter — show all active listings

        if (category && category.trim() !== "") {
            query.category = category.trim();
        }

        if (propertyType && propertyType.trim() !== "") {
            query.propertyType = propertyType.trim();
        }

        if (state && state.trim() !== "") {
            const stateRegex = new RegExp(state.trim(), "i");
            query.state = stateRegex;
        }

        if (city && city.trim() !== "") {
            const cityRegex = new RegExp(city.trim(), "i");
            query.$or = [{ city: cityRegex }, { location: cityRegex }];
        }

        if (search && search.trim() !== "") {
            const searchRegex = new RegExp(search.trim(), "i");
            query.$or = [
                { title: searchRegex },
                { location: searchRegex },
                { city: searchRegex },
                { state: searchRegex },
                { country: searchRegex },
                { propertyType: searchRegex },
                { category: searchRegex }
            ];
        }

        if (guests && !isNaN(guests)) {
            query.guests = { $gte: parseInt(guests) };
        }

        if (coupleFriendly === "true") {
            query.coupleFriendly = true;
        }

        if (payAtHotel === "true") {
            query.payAtHotel = true;
        }

        const allListings = await Listing.find(query).sort({ createdAt: -1 });

        res.render("listings/index.ejs", {
            allListings,
            currentCategory: category || "",
            currentPropertyType: propertyType || "",
            currentState: state || "",
            currentCity: city || "",
            currentSearch: search || ""
        });
    } catch (err) {
        next(err);
    }
});

// New Listing Form Route
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});

// Show Route (Detailed Listing View)
app.get("/listings/:id", async (req, res, next) => {
    try {
        const { id } = req.params;

        // Guard against invalid ObjectId → prevents ugly CastError crash
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(404).render("404.ejs", { message: "Invalid listing ID format." });
        }

        const listing = await Listing.findById(id)
            .populate("owner")
            .populate({
                path: "reviews",
                populate: { path: "author" }
            });

        if (!listing) {
            return res.status(404).render("404.ejs", { message: "Listing not found on AirNet." });
        }

        res.render("listings/show.ejs", { listing });
    } catch (err) {
        next(err);
    }
});

// Create Listing Route
app.post("/listings", async (req, res, next) => {
    try {
        const listingData = req.body.listing || req.body;

        let owner = await User.findOne({ role: "admin" });
        if (!owner) {
            owner = await User.findOne({});
        }

        let images = [];
        if (listingData.images && Array.isArray(listingData.images)) {
            images = listingData.images.filter(img => img && img.url);
        } else if (listingData.image && listingData.image.url) {
            images = [{ url: listingData.image.url.trim(), filename: "user_upload" }];
        } else if (typeof listingData.image === "string" && listingData.image.trim() !== "") {
            images = [{ url: listingData.image.trim(), filename: "user_upload" }];
        }

        if (images.length === 0) {
            images = [{
                url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
                filename: "default_india"
            }];
        }

        let geometry = { type: "Point", coordinates: [73.8278, 15.4909] };
        if (listingData.geometry && listingData.geometry.coordinates) {
            const lng = parseFloat(listingData.geometry.coordinates[0]);
            const lat = parseFloat(listingData.geometry.coordinates[1]);
            if (!isNaN(lng) && !isNaN(lat)) {
                geometry.coordinates = [lng, lat];
            }
        }

        let amenities = [];
        if (Array.isArray(listingData.amenities)) {
            amenities = listingData.amenities;
        } else if (typeof listingData.amenities === "string" && listingData.amenities.trim() !== "") {
            amenities = listingData.amenities.split(",").map(a => a.trim());
        }

        const newListing = new Listing({
            title: listingData.title,
            description: listingData.description,
            price: Number(listingData.price) || 2499,
            currency: "INR",
            location: listingData.location,
            city: listingData.city || listingData.location,
            state: listingData.state || "Goa",
            country: listingData.country || "India",
            propertyType: listingData.propertyType || "Villa",
            category: listingData.category || "Trending",
            guests: Number(listingData.guests) || 2,
            bedrooms: Number(listingData.bedrooms) || 1,
            beds: Number(listingData.beds) || 1,
            bathrooms: Number(listingData.bathrooms) || 1,
            coupleFriendly: listingData.coupleFriendly === "true" || listingData.coupleFriendly === true,
            payAtHotel: listingData.payAtHotel === "true" || listingData.payAtHotel === true,
            freeBreakfast: listingData.freeBreakfast === "true" || listingData.freeBreakfast === true,
            sanitizedSafe: true,
            isOYOVerified: listingData.propertyType === "OYO Hotel" || listingData.isOYOVerified === "true",
            amenities: amenities,
            instantBooking: listingData.instantBooking === "true" || listingData.instantBooking === true,
            images: images,
            image: images[0],
            geometry: geometry,
            owner: owner._id
        });

        await newListing.save();
        req.flash("success", "Listing created successfully!");
        res.redirect(`/listings/${newListing._id}`);
    } catch (err) {
        next(err);
    }
});

// Edit Form Route
app.get("/listings/:id/edit", async (req, res, next) => {
    try {
        const { id } = req.params;
        const listing = await Listing.findById(id);
        if (!listing) {
            return res.status(404).send("Listing not found");
        }
        res.render("listings/edit.ejs", { listing });
    } catch (err) {
        next(err);
    }
});

// Update Route
app.put("/listings/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateData = req.body.listing || req.body;

        let imageObj;
        if (updateData.image && updateData.image.url) {
            imageObj = { url: updateData.image.url.trim(), filename: "updated_img" };
        } else if (typeof updateData.image === "string" && updateData.image.trim() !== "") {
            imageObj = { url: updateData.image.trim(), filename: "updated_img" };
        }

        let amenities = [];
        if (Array.isArray(updateData.amenities)) {
            amenities = updateData.amenities;
        } else if (typeof updateData.amenities === "string" && updateData.amenities.trim() !== "") {
            amenities = updateData.amenities.split(",").map(a => a.trim());
        }

        const fieldsToUpdate = {
            title: updateData.title,
            description: updateData.description,
            price: Number(updateData.price),
            currency: "INR",
            location: updateData.location,
            city: updateData.city,
            state: updateData.state,
            country: updateData.country || "India",
            propertyType: updateData.propertyType,
            category: updateData.category,
            guests: Number(updateData.guests) || 2,
            bedrooms: Number(updateData.bedrooms) || 1,
            beds: Number(updateData.beds) || 1,
            bathrooms: Number(updateData.bathrooms) || 1,
            coupleFriendly: updateData.coupleFriendly === "true" || updateData.coupleFriendly === true,
            payAtHotel: updateData.payAtHotel === "true" || updateData.payAtHotel === true,
            freeBreakfast: updateData.freeBreakfast === "true" || updateData.freeBreakfast === true,
            isOYOVerified: updateData.propertyType === "OYO Hotel" || updateData.isOYOVerified === "true",
            amenities: amenities
        };

        if (imageObj) {
            fieldsToUpdate.image = imageObj;
            fieldsToUpdate.images = [imageObj];
        }

        if (updateData.geometry && updateData.geometry.coordinates) {
            const lng = parseFloat(updateData.geometry.coordinates[0]);
            const lat = parseFloat(updateData.geometry.coordinates[1]);
            if (!isNaN(lng) && !isNaN(lat)) {
                fieldsToUpdate.geometry = { type: "Point", coordinates: [lng, lat] };
            }
        }

        await Listing.findByIdAndUpdate(id, fieldsToUpdate, { runValidators: true });
        req.flash("success", "Listing updated successfully!");
        res.redirect(`/listings/${id}`);
    } catch (err) {
        next(err);
    }
});

// Delete Route
app.delete("/listings/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        await Listing.findByIdAndDelete(id);
        req.flash("success", "Listing deleted successfully.");
        res.redirect(req.session.user && req.session.user.role === "admin" ? "/admin/dashboard" : "/listings");
    } catch (err) {
        next(err);
    }
});

// ==========================================
// REVIEWS & BOOKING API ROUTES
// ==========================================

// Create Review Route
app.post("/listings/:id/reviews", async (req, res, next) => {
    try {
        const { id } = req.params;
        const listing = await Listing.findById(id).populate("reviews");
        if (!listing) {
            return res.status(404).send("Listing not found");
        }

        let authorId = req.session.user ? req.session.user._id : null;
        if (!authorId) {
            let defaultUser = await User.findOne({});
            authorId = defaultUser._id;
        }

        const newReview = new Review({
            comment: req.body.review.comment,
            rating: Number(req.body.review.rating) || 5,
            author: authorId
        });

        await newReview.save();
        listing.reviews.push(newReview._id);

        const allRatings = listing.reviews.map(r => r.rating || 5);
        allRatings.push(newReview.rating);
        const sum = allRatings.reduce((acc, curr) => acc + curr, 0);
        listing.rating = Number((sum / allRatings.length).toFixed(2));
        listing.reviewCount = allRatings.length;

        await listing.save();
        req.flash("success", "Review added successfully!");
        res.redirect(`/listings/${id}`);
    } catch (err) {
        next(err);
    }
});

// Delete Review Route
app.delete("/listings/:id/reviews/:reviewId", async (req, res, next) => {
    try {
        const { id, reviewId } = req.params;
        await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
        await Review.findByIdAndDelete(reviewId);

        const listing = await Listing.findById(id).populate("reviews");
        if (listing) {
            if (listing.reviews.length > 0) {
                const sum = listing.reviews.reduce((acc, r) => acc + (r.rating || 5), 0);
                listing.rating = Number((sum / listing.reviews.length).toFixed(2));
                listing.reviewCount = listing.reviews.length;
            } else {
                listing.rating = 4.8;
                listing.reviewCount = 0;
            }
            await listing.save();
        }

        req.flash("success", "Review deleted.");
        res.redirect(`/listings/${id}`);
    } catch (err) {
        next(err);
    }
});

// Interactive Booking Simulation Route
app.post("/listings/:id/book", async (req, res, next) => {
    try {
        const { id } = req.params;
        const { checkIn, checkOut, guests } = req.body;

        const listing = await Listing.findById(id);
        if (!listing) {
            return res.status(404).json({ success: false, message: "Listing not found" });
        }

        const startDate = new Date(checkIn);
        const endDate = new Date(checkOut);
        const diffTime = Math.abs(endDate - startDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;

        const baseTotal = listing.price * diffDays;
        const gstAmount = Math.round(baseTotal * 0.18);
        const serviceFee = 250;
        const grandTotal = baseTotal + gstAmount + serviceFee;

        return res.json({
            success: true,
            bookingId: "AN-" + Math.floor(100000 + Math.random() * 900000),
            listingTitle: listing.title,
            location: `${listing.location}, ${listing.state}`,
            checkIn: checkIn,
            checkOut: checkOut,
            nights: diffDays,
            guests: guests || 2,
            pricePerNight: listing.price,
            baseTotal: baseTotal,
            gstAmount: gstAmount,
            serviceFee: serviceFee,
            grandTotal: grandTotal,
            payAtHotel: listing.payAtHotel,
            message: listing.payAtHotel ? "Booking Confirmed! Pay ₹" + grandTotal.toLocaleString("en-IN") + " directly at property check-in." : "Booking Confirmed! Thank you for booking with AirNet."
        });
    } catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
});

// 404 Route Handler
app.use((req, res) => {
    res.status(404).render("404.ejs", { message: "The requested AirNet page was not found." });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error("AirNet Server Error:", err);
    res.status(500).render("error.ejs", { error: err });
});

app.listen(PORT, () => {
    console.log(`AirNet Server is live and running at http://localhost:${PORT}`);
});