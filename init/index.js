require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");
const Review = require("../models/review.js");
const sampleListings = require("./data.js");

const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/AirNet";

async function initDB() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log(`Connected to MongoDB (${MONGO_URL}) for seeding...`);

        // Clear existing collection data
        await Listing.deleteMany({});
        await User.deleteMany({});
        await Review.deleteMany({});
        console.log("Cleared existing listings, users & reviews.");

        // Hash Admin Password
        const hashedAdminPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || "arpit@@2004", 10);

        // Seed Admin user (arpitxamrit77)
        const adminUser = new User({
            username: process.env.ADMIN_USERNAME || "arpitxamrit77",
            email: process.env.ADMIN_EMAIL || "comega1410@gmail.com",
            phone: process.env.ADMIN_PHONE || "+919876543210",
            password: hashedAdminPassword,
            role: "admin",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
            isSuperhost: true,
            isEmailVerified: true,
            isPhoneVerified: true
        });
        await adminUser.save();
        console.log("Created Admin User (username: arpitxamrit77):", adminUser._id);

        // Seed Demo Regular User
        const hashedUserPassword = await bcrypt.hash(process.env.DEMO_USER_PASSWORD || "user123", 10);
        const demoUser = new User({
            username: "airnet_traveler",
            email: "user@airnet.com",
            phone: "+919123456789",
            password: hashedUserPassword,
            role: "user",
            avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80",
            isEmailVerified: true,
            isPhoneVerified: true
        });
        await demoUser.save();

        // Seed initial reviews
        const review1 = new Review({
            comment: "Absolutely amazing stay! Warm hospitality, clean rooms, and convenient location.",
            rating: 5,
            author: demoUser._id
        });
        await review1.save();

        const review2 = new Review({
            comment: "Loved the complimentary breakfast and fast WiFi. Highly recommended!",
            rating: 5,
            author: adminUser._id
        });
        await review2.save();

        // Attach owner ID and initial reviews to sample listings
        const listingsWithOwner = sampleListings.map(listing => ({
            ...listing,
            owner: adminUser._id,
            reviews: [review1._id, review2._id]
        }));

        const result = await Listing.insertMany(listingsWithOwner);
        console.log(`Successfully seeded ${result.length} authentic Indian AirNet properties!`);

        await mongoose.connection.close();
        console.log("Database seeding completed cleanly.");
    } catch (error) {
        console.error("Database seeding error:", error);
    }
}

initDB();