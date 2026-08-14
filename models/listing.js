const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema(
    {
        // =========================
        // BASIC LISTING INFORMATION
        // =========================
        title: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 140
        },

        description: {
            type: String,
            required: true,
            trim: true
        },

        // =========================
        // IMAGES
        // =========================
        images: [
            {
                url: { type: String, required: true },
                filename: { type: String, default: "listing_img" }
            }
        ],

        // Backwards compatibility single image field
        image: {
            filename: String,
            url: {
                type: String,
                default: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?v=1"
            }
        },

        // =========================
        // PRICING & CURRENCY (INR Default)
        // =========================
        price: {
            type: Number,
            required: true,
            min: 0
        },

        currency: {
            type: String,
            default: "INR",
            uppercase: true
        },

        // =========================
        // LOCATION & GEO
        // =========================
        location: {
            type: String,
            required: true,
            trim: true
        },

        city: {
            type: String,
            trim: true,
            default: "Goa"
        },

        state: {
            type: String,
            trim: true,
            default: "Goa"
        },

        country: {
            type: String,
            default: "India",
            trim: true
        },

        geometry: {
            type: {
                type: String,
                enum: ["Point"],
                default: "Point"
            },
            coordinates: {
                type: [Number], // [longitude, latitude]
                default: [73.8278, 15.4909]
            }
        },

        // =========================
        // CATEGORY & PROPERTY TYPE
        // =========================
        category: {
            type: String,
            enum: [
                "OYO Hotels",
                "Trending",
                "Villas",
                "Hill Stations",
                "Beachfront",
                "Havelis",
                "Houseboats",
                "Luxury",
                "Camping",
                "Pilgrimage",
                "Rooms",
                "Cities"
            ],
            default: "Trending"
        },

        propertyType: {
            type: String,
            enum: [
                "OYO Hotel",
                "Hotel",
                "Villa",
                "Cabin",
                "Haveli",
                "Resort",
                "Homestay",
                "Houseboat",
                "Apartment",
                "Cottage",
                "House"
            ],
            default: "Villa"
        },

        // =========================
        // SPECIFICATIONS
        // =========================
        guests: { type: Number, min: 1, default: 2 },
        bedrooms: { type: Number, min: 0, default: 1 },
        beds: { type: Number, min: 0, default: 1 },
        bathrooms: { type: Number, min: 0, default: 1 },

        // =========================
        // INDIAN ESSENTIAL FLAGS
        // =========================
        coupleFriendly: { type: Boolean, default: true },
        payAtHotel: { type: Boolean, default: false },
        freeBreakfast: { type: Boolean, default: true },
        sanitizedSafe: { type: Boolean, default: true },
        isOYOVerified: { type: Boolean, default: false },

        // =========================
        // AMENITIES
        // =========================
        amenities: [
            {
                type: String,
                trim: true
            }
        ],

        // =========================
        // OWNER REFERENCE
        // =========================
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },

        // =========================
        // REVIEWS & RATING
        // =========================
        reviews: [
            {
                type: Schema.Types.ObjectId,
                ref: "Review"
            }
        ],
        rating: { type: Number, default: 4.8, min: 0, max: 5 },
        reviewCount: { type: Number, default: 12, min: 0 },

        // =========================
        // BOOKING & AVAILABILITY
        // =========================
        instantBooking: { type: Boolean, default: true },
        isAvailable: { type: Boolean, default: true },
        status: {
            type: String,
            enum: ["active", "inactive", "pending", "blocked"],
            default: "active"
        },
        favoritesCount: { type: Number, default: 0, min: 0 }
    },
    {
        timestamps: true
    }
);

// Pre-save middleware to keep `images` array and `image` single object in sync
listingSchema.pre("save", function (next) {
    if (this.images && this.images.length > 0) {
        if (!this.image || !this.image.url) {
            this.image = {
                url: this.images[0].url,
                filename: this.images[0].filename || "listing_img"
            };
        }
    } else if (this.image && this.image.url) {
        this.images = [{ url: this.image.url, filename: this.image.filename || "listing_img" }];
    }
    next();
});

// Post middleware for cascading deletion of reviews when a listing is deleted
listingSchema.post("findOneAndDelete", async function (listing) {
    if (listing && listing.reviews.length > 0) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
});

// Indexes for optimal querying
listingSchema.index({ category: 1 });
listingSchema.index({ propertyType: 1 });
listingSchema.index({ price: 1 });
listingSchema.index({ location: "text", city: "text", state: "text", title: "text" });

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;