const sampleListings = [
    // ==========================================
    // GUJARAT CITIES (SURAT, AHMEDABAD, VADODARA, GANDHINAGAR, JAMNAGAR, ANAND, RAJKOT, SOMNATH)
    // ==========================================
    {
        title: "OYO Townhouse 112 Diamond Hub Surat",
        description: "Modern OYO Townhouse in Varachha Diamond Hub, Surat. Premium air-conditioned rooms, free high-speed WiFi, complimentary Gujarati breakfast, 24/7 power backup, and couple-friendly policy.",
        images: [
            { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80", filename: "surat-1" },
            { url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80", filename: "surat-2" }
        ],
        price: 1899,
        currency: "INR",
        location: "Varachha Road, Surat",
        city: "Surat",
        state: "Gujarat",
        country: "India",
        geometry: { type: "Point", coordinates: [72.8311, 21.1702] },
        propertyType: "OYO Hotel",
        category: "OYO Hotels",
        guests: 2, bedrooms: 1, beds: 1, bathrooms: 1,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: true,
        amenities: ["Complimentary Breakfast", "High-speed WiFi", "Air Conditioning", "Power Backup", "Elevator", "Sanitized Rooms"],
        rating: 4.86, reviewCount: 112, instantBooking: true, status: "active"
    },
    {
        title: "Dumas Beachfront Luxury Resort Surat",
        description: "Exclusive sea-facing luxury resort near Dumas Beach, Surat. Features lush lawns, swimming pool, authentic Surti Locho breakfast, and peaceful ambiance.",
        images: [
            { url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80", filename: "surat-resort-1" }
        ],
        price: 4499,
        currency: "INR",
        location: "Dumas Beach Road, Surat",
        city: "Surat",
        state: "Gujarat",
        country: "India",
        geometry: { type: "Point", coordinates: [72.7147, 21.0877] },
        propertyType: "Resort",
        category: "Beachfront",
        guests: 4, bedrooms: 2, beds: 2, bathrooms: 2,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: false,
        amenities: ["Sea View Lawn", "Swimming Pool", "Surti Breakfast", "Free Parking", "Air Conditioning"],
        rating: 4.91, reviewCount: 78, instantBooking: true, status: "active"
    },
    {
        title: "OYO Premium SG Highway Ahmedabad",
        description: "Located on prime SG Highway, Ahmedabad. Close to shopping malls, ISKCON Temple, and tech hubs. Smart TV, sanitized linens, and round-the-clock room service.",
        images: [
            { url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80", filename: "ahmedabad-1" }
        ],
        price: 2199,
        currency: "INR",
        location: "SG Highway, Bodakdev, Ahmedabad",
        city: "Ahmedabad",
        state: "Gujarat",
        country: "India",
        geometry: { type: "Point", coordinates: [72.5086, 23.0373] },
        propertyType: "OYO Hotel",
        category: "OYO Hotels",
        guests: 2, bedrooms: 1, beds: 1, bathrooms: 1,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: true,
        amenities: ["Pay at Hotel", "Free WiFi", "Air Conditioning", "In-room Dining", "Parking"],
        rating: 4.82, reviewCount: 145, instantBooking: true, status: "active"
    },
    {
        title: "Heritage Haveli Stay Riverfront Ahmedabad",
        description: "Restored traditional 150-year-old Gujarati Pol house near Sabarmati Riverfront. Wooden carvings, courtyard seating, and traditional Gujarati Farsan breakfast.",
        images: [
            { url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80", filename: "ahmedabad-heritage" }
        ],
        price: 3899,
        currency: "INR",
        location: "Old City Pol, Sabarmati Riverfront, Ahmedabad",
        city: "Ahmedabad",
        state: "Gujarat",
        country: "India",
        geometry: { type: "Point", coordinates: [72.5714, 23.0225] },
        propertyType: "Haveli",
        category: "Havelis",
        guests: 3, bedrooms: 1, beds: 2, bathrooms: 1,
        coupleFriendly: true, payAtHotel: false, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: false,
        amenities: ["Pol Heritage Tour", "Courtyard Garden", "Gujarati Thali Breakfast", "Air Conditioning", "Free WiFi"],
        rating: 4.95, reviewCount: 92, instantBooking: true, status: "active"
    },
    {
        title: "OYO Select Capital Residency Vadodara",
        description: "Situated near Vadodara Railway Station and Laxmi Vilas Palace. Cozy rooms, high-speed WiFi, elevator access, and sanitized couple-friendly stay.",
        images: [
            { url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80", filename: "vadodara-1" }
        ],
        price: 1750,
        currency: "INR",
        location: "Alkapuri, Vadodara",
        city: "Vadodara",
        state: "Gujarat",
        country: "India",
        geometry: { type: "Point", coordinates: [73.1812, 22.3072] },
        propertyType: "OYO Hotel",
        category: "OYO Hotels",
        guests: 2, bedrooms: 1, beds: 1, bathrooms: 1,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: true,
        amenities: ["Pay at Check-In", "Free Breakfast", "Air Conditioning", "WiFi", "24/7 Power Backup"],
        rating: 4.78, reviewCount: 89, instantBooking: true, status: "active"
    },
    {
        title: "Royal Orchid Villa Laxmi Vilas View Vadodara",
        description: "Spacious private villa with views of historic Laxmi Vilas Palace grounds. Landscaped lawn, private terrace, and chef service.",
        images: [
            { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80", filename: "vadodara-villa" }
        ],
        price: 6500,
        currency: "INR",
        location: "Rajmahal Road, Vadodara",
        city: "Vadodara",
        state: "Gujarat",
        country: "India",
        geometry: { type: "Point", coordinates: [73.1926, 22.2937] },
        propertyType: "Villa",
        category: "Villas",
        guests: 6, bedrooms: 3, beds: 3, bathrooms: 3,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: false,
        amenities: ["Private Lawn", "Chef on Call", "Palace Ground View", "Air Conditioning", "Free Parking"],
        rating: 4.93, reviewCount: 64, instantBooking: true, status: "active"
    },
    {
        title: "Capital Executive Stay Gandhinagar",
        description: "Clean, modern business stay near GIFT City and Akshardham Temple in Gandhinagar. Includes high-speed Wi-Fi, work desks, and morning breakfast.",
        images: [
            { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80", filename: "gandhinagar-1" }
        ],
        price: 1999,
        currency: "INR",
        location: "Kudasan, GIFT City Highway, Gandhinagar",
        city: "Gandhinagar",
        state: "Gujarat",
        country: "India",
        geometry: { type: "Point", coordinates: [72.6369, 23.2156] },
        propertyType: "OYO Hotel",
        category: "Cities",
        guests: 2, bedrooms: 1, beds: 1, bathrooms: 1,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: true,
        amenities: ["Near GIFT City", "Free Breakfast", "Air Conditioning", "Ergonomic Desk", "Free WiFi"],
        rating: 4.84, reviewCount: 73, instantBooking: true, status: "active"
    },
    {
        title: "OYO Flagship Marine View Jamnagar",
        description: "Situated close to Lakhota Lake and Khijadiya Bird Sanctuary. Offers sanitized rooms, lake view terrace, and friendly hospitality.",
        images: [
            { url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80", filename: "jamnagar-1" }
        ],
        price: 1650,
        currency: "INR",
        location: "Lakhota Lake Road, Jamnagar",
        city: "Jamnagar",
        state: "Gujarat",
        country: "India",
        geometry: { type: "Point", coordinates: [70.0667, 22.4707] },
        propertyType: "OYO Hotel",
        category: "OYO Hotels",
        guests: 2, bedrooms: 1, beds: 1, bathrooms: 1,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: true,
        amenities: ["Lakhota Lake View", "Pay at Check-In", "Free Breakfast", "Air Conditioning", "Parking"],
        rating: 4.79, reviewCount: 65, instantBooking: true, status: "active"
    },
    {
        title: "Milk City Executive Homestay Anand",
        description: "Comfortable homestay in the Milk Capital Anand, home to Amul Dairy. Quiet green residential area, modern kitchen, and homemade breakfast.",
        images: [
            { url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80", filename: "anand-1" }
        ],
        price: 1599,
        currency: "INR",
        location: "Vidyanagar Road, Anand",
        city: "Anand",
        state: "Gujarat",
        country: "India",
        geometry: { type: "Point", coordinates: [72.9289, 22.5645] },
        propertyType: "Homestay",
        category: "Rooms",
        guests: 3, bedrooms: 1, beds: 2, bathrooms: 1,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: false,
        amenities: ["Amul Dairy Tour Access", "Homemade Breakfast", "Air Conditioning", "Free WiFi", "Garden"],
        rating: 4.88, reviewCount: 51, instantBooking: true, status: "active"
    },
    {
        title: "Gir Forest Lion Safari Resort Junagadh",
        description: "Eco resort situated at the edge of Gir National Park. Offers jungle safari booking assistance, Kathiyawadi Thali dinner, bonfire, and swimming pool.",
        images: [
            { url: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80", filename: "gir-resort" }
        ],
        price: 5200,
        currency: "INR",
        location: "Sasan Gir, Junagadh",
        city: "Junagadh",
        state: "Gujarat",
        country: "India",
        geometry: { type: "Point", coordinates: [70.5986, 21.1325] },
        propertyType: "Resort",
        category: "Camping",
        guests: 4, bedrooms: 2, beds: 2, bathrooms: 2,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: false,
        amenities: ["Lion Safari Assistance", "Kathiyawadi Thali", "Swimming Pool", "Bonfire", "Jungle View"],
        rating: 4.96, reviewCount: 88, instantBooking: true, status: "active"
    },

    // ==========================================
    // DELHI NCR (DELHI, GURUGRAM, NOIDA)
    // ==========================================
    {
        title: "OYO Townhouse 044 Connaught Place Delhi",
        description: "Premier OYO Townhouse in the heart of Connaught Place, New Delhi. Walking distance to Metro, India Gate, and Janpath market. High-speed WiFi and continental breakfast.",
        images: [
            { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80", filename: "delhi-cp-1" }
        ],
        price: 2499,
        currency: "INR",
        location: "Connaught Place, New Delhi",
        city: "Delhi",
        state: "Delhi NCR",
        country: "India",
        geometry: { type: "Point", coordinates: [77.2167, 28.6315] },
        propertyType: "OYO Hotel",
        category: "OYO Hotels",
        guests: 2, bedrooms: 1, beds: 1, bathrooms: 1,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: true,
        amenities: ["Near CP Metro", "Free Breakfast", "Air Conditioning", "24/7 Power Backup", "Sanitized Rooms"],
        rating: 4.89, reviewCount: 168, instantBooking: true, status: "active"
    },
    {
        title: "Hauz Khas Village Bohemian Rooftop Studio",
        description: "Trendy rooftop apartment in Hauz Khas Village overlooking historical monument and lake. Private balcony, boho interior, and vibrant nightlife access.",
        images: [
            { url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80", filename: "delhi-hkv-1" }
        ],
        price: 3800,
        currency: "INR",
        location: "Hauz Khas Village, New Delhi",
        city: "Delhi",
        state: "Delhi NCR",
        country: "India",
        geometry: { type: "Point", coordinates: [77.1952, 28.5529] },
        propertyType: "Apartment",
        category: "Trending",
        guests: 2, bedrooms: 1, beds: 1, bathrooms: 1,
        coupleFriendly: true, payAtHotel: false, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: false,
        amenities: ["Lake View Terrace", "High-speed WiFi", "Modular Kitchen", "Air Conditioning", "Cafe Access"],
        rating: 4.94, reviewCount: 114, instantBooking: true, status: "active"
    },
    {
        title: "OYO Flagship Luxury Residency - Cyber City",
        description: "Flagship OYO stay located minutes away from DLF Cyber City Gurugram. Ideal for business travelers and vacationers seeking luxury on a budget.",
        images: [
            { url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80", filename: "gurugram-1" }
        ],
        price: 1899,
        currency: "INR",
        location: "Cyber City, Gurugram",
        city: "Gurugram",
        state: "Delhi NCR",
        country: "India",
        geometry: { type: "Point", coordinates: [77.0888, 28.495] },
        propertyType: "OYO Hotel",
        category: "OYO Hotels",
        guests: 2, bedrooms: 1, beds: 1, bathrooms: 1,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: true,
        amenities: ["Pay at Hotel", "Free WiFi", "Air Conditioning", "Power Backup", "In-room Dining"],
        rating: 4.79, reviewCount: 98, instantBooking: true, status: "active"
    },
    {
        title: "Noida Sector 62 Executive Suite",
        description: "Modern serviced apartment in Noida Sector 62 close to IT parks and Metro line. Smart TV, kitchenette, and 24/7 security.",
        images: [
            { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", filename: "noida-1" }
        ],
        price: 2100,
        currency: "INR",
        location: "Sector 62, Noida",
        city: "Noida",
        state: "Delhi NCR",
        country: "India",
        geometry: { type: "Point", coordinates: [77.3639, 28.628] },
        propertyType: "Apartment",
        category: "Cities",
        guests: 3, bedrooms: 1, beds: 1, bathrooms: 1,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: true,
        amenities: ["Kitchenette", "Free WiFi", "Air Conditioning", "Elevator", "Power Backup"],
        rating: 4.81, reviewCount: 57, instantBooking: true, status: "active"
    },

    // ==========================================
    // MAHARASHTRA (MUMBAI, PUNE, LONAVALA, NASHIK)
    // ==========================================
    {
        title: "Marine Drive Ocean Skyline Luxury Apartment",
        description: "High-rise luxury penthouse overlooking Queen's Necklace on Marine Drive, Mumbai. Modern minimalist design, marble flooring, smart automation, and panoramic sunset views.",
        images: [
            { url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80", filename: "mumbai-skyline-1" }
        ],
        price: 12999,
        currency: "INR",
        location: "Marine Drive, South Mumbai",
        city: "Mumbai",
        state: "Maharashtra",
        country: "India",
        geometry: { type: "Point", coordinates: [72.8238, 18.9438] },
        propertyType: "Apartment",
        category: "Cities",
        guests: 4, bedrooms: 2, beds: 2, bathrooms: 2,
        coupleFriendly: true, payAtHotel: false, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: false,
        amenities: ["Queen's Necklace Sea View", "Elevator", "High-speed WiFi", "Modular Kitchen", "Gym Access"],
        rating: 4.95, reviewCount: 71, instantBooking: true, status: "active"
    },
    {
        title: "OYO Silver Key Bandra West Studio",
        description: "Chic studio near Bandra Linking Road & Bandstand. Surrounded by cafes, boutiques, and Bollywood celebrity homes.",
        images: [
            { url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80", filename: "mumbai-bandra" }
        ],
        price: 2999,
        currency: "INR",
        location: "Bandra West, Mumbai",
        city: "Mumbai",
        state: "Maharashtra",
        country: "India",
        geometry: { type: "Point", coordinates: [72.8336, 19.0596] },
        propertyType: "OYO Hotel",
        category: "OYO Hotels",
        guests: 2, bedrooms: 1, beds: 1, bathrooms: 1,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: true,
        amenities: ["Bandra Location", "Pay at Check-In", "Free Breakfast", "Air Conditioning", "WiFi"],
        rating: 4.87, reviewCount: 134, instantBooking: true, status: "active"
    },
    {
        title: "Lonavala Valley View Villa with Private Pool",
        description: "Spacious 3-BHK luxury getaway villa in Lonavala surrounded by lush Western Ghat mountains. Features private outdoor pool, waterfall shower, and BBQ hearth.",
        images: [
            { url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80", filename: "lonavala-1" }
        ],
        price: 9999,
        currency: "INR",
        location: "Tungarli, Lonavala",
        city: "Lonavala",
        state: "Maharashtra",
        country: "India",
        geometry: { type: "Point", coordinates: [73.4072, 18.7557] },
        propertyType: "Villa",
        category: "Villas",
        guests: 10, bedrooms: 3, beds: 4, bathrooms: 3,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: false,
        amenities: ["Private Pool", "Mountain Valley View", "Lawn Garden", "BBQ Grill", "Power Backup"],
        rating: 4.92, reviewCount: 88, instantBooking: true, status: "active"
    },
    {
        title: "Koregaon Park Luxury Studio Pune",
        description: "Stylish studio in Koregaon Park Pune. Green peaceful surroundings, Osho Ashram proximity, high-speed fiber internet, and balcony seating.",
        images: [
            { url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80", filename: "pune-1" }
        ],
        price: 2499,
        currency: "INR",
        location: "Koregaon Park, Pune",
        city: "Pune",
        state: "Maharashtra",
        country: "India",
        geometry: { type: "Point", coordinates: [73.8906, 18.5362] },
        propertyType: "Apartment",
        category: "Cities",
        guests: 2, bedrooms: 1, beds: 1, bathrooms: 1,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: true,
        amenities: ["Koregaon Park Hub", "Free Breakfast", "Air Conditioning", "WiFi", "Balcony"],
        rating: 4.89, reviewCount: 76, instantBooking: true, status: "active"
    },
    {
        title: "Sula Vineyard Luxury Villa Nashik",
        description: "Exclusive villa surrounded by rolling Sula vineyards in Nashik. Includes private wine tasting tour access, swimming pool, and Italian dining setup.",
        images: [
            { url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80", filename: "nashik-1" }
        ],
        price: 7999,
        currency: "INR",
        location: "Gangapur Dam Road, Nashik",
        city: "Nashik",
        state: "Maharashtra",
        country: "India",
        geometry: { type: "Point", coordinates: [73.684, 20.0063] },
        propertyType: "Villa",
        category: "Luxury",
        guests: 6, bedrooms: 3, beds: 3, bathrooms: 3,
        coupleFriendly: true, payAtHotel: false, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: false,
        amenities: ["Vineyard View", "Private Pool", "Wine Tasting", "Air Conditioning", "Chef Service"],
        rating: 4.96, reviewCount: 62, instantBooking: true, status: "active"
    },

    // ==========================================
    // BIHAR (PATNA, GAYA, NALANDA)
    // ==========================================
    {
        title: "OYO Premium Maurya Residency Patna",
        description: "Located near Patna Junction Railway Station and Gandhi Maidan. Fully air-conditioned rooms, LED TV, free continental breakfast, and sanitized couple-friendly rooms.",
        images: [
            { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80", filename: "patna-1" }
        ],
        price: 1699,
        currency: "INR",
        location: "Exhibition Road, Patna",
        city: "Patna",
        state: "Bihar",
        country: "India",
        geometry: { type: "Point", coordinates: [85.1376, 25.6093] },
        propertyType: "OYO Hotel",
        category: "OYO Hotels",
        guests: 2, bedrooms: 1, beds: 1, bathrooms: 1,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: true,
        amenities: ["Near Patna Jn", "Pay at Check-In", "Free Breakfast", "Air Conditioning", "Elevator"],
        rating: 4.81, reviewCount: 124, instantBooking: true, status: "active"
    },
    {
        title: "Bodhgaya Sacred Temple Retreat Gaya",
        description: "Peaceful spiritual resort walking distance to UNESCO World Heritage Mahabodhi Temple in Bodhgaya. Meditation gardens, vegetarian organic food, and quiet ambiance.",
        images: [
            { url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80", filename: "bodhgaya-1" }
        ],
        price: 2800,
        currency: "INR",
        location: "Temple Road, Bodhgaya, Gaya",
        city: "Gaya",
        state: "Bihar",
        country: "India",
        geometry: { type: "Point", coordinates: [84.9913, 24.696] },
        propertyType: "Homestay",
        category: "Pilgrimage",
        guests: 3, bedrooms: 1, beds: 2, bathrooms: 1,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: false,
        amenities: ["Mahabodhi Temple View", "Meditation Garden", "Organic Breakfast", "Free WiFi", "Air Conditioning"],
        rating: 4.93, reviewCount: 84, instantBooking: true, status: "active"
    },
    {
        title: "Nalanda Heritage Resort Rajgir",
        description: "Situated near ancient Nalanda University ruins and Vishwa Shanti Stupa in Rajgir. Features hot spring bath access, garden lawns, and Bihar thali dining.",
        images: [
            { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80", filename: "rajgir-1" }
        ],
        price: 3200,
        currency: "INR",
        location: "Kund Road, Rajgir, Nalanda",
        city: "Patna",
        state: "Bihar",
        country: "India",
        geometry: { type: "Point", coordinates: [85.4201, 25.03] },
        propertyType: "Resort",
        category: "Pilgrimage",
        guests: 4, bedrooms: 2, beds: 2, bathrooms: 2,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: false,
        amenities: ["Hot Spring Bath", "Ancient Ruins Tour", "Litti Chokha Breakfast", "Air Conditioning", "Parking"],
        rating: 4.88, reviewCount: 49, instantBooking: true, status: "active"
    },

    // ==========================================
    // RAJASTHAN (JAIPUR, UDAIPUR, JODHPUR, JAISALMER)
    // ==========================================
    {
        title: "Royal Heritage Haveli & Spa Jaipur",
        description: "Restored 18th-century Marwar haveli in Jaipur with traditional Rajasthani architecture, jharokhas, central courtyard pool, folk music evenings, and authentic Thali dining.",
        images: [
            { url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80", filename: "jaipur-haveli-1" }
        ],
        price: 8500,
        currency: "INR",
        location: "Amer Road, Jaipur",
        city: "Jaipur",
        state: "Rajasthan",
        country: "India",
        geometry: { type: "Point", coordinates: [75.8513, 26.9855] },
        propertyType: "Haveli",
        category: "Havelis",
        guests: 4, bedrooms: 2, beds: 2, bathrooms: 2,
        coupleFriendly: true, payAtHotel: false, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: false,
        amenities: ["Courtyard Swimming Pool", "Ayurvedic Spa", "Rajasthani Thali Dining", "Air Conditioning", "Free Parking"],
        rating: 4.96, reviewCount: 86, instantBooking: true, status: "active"
    },
    {
        title: "Taj Lakefront Palace & Luxury Suites Udaipur",
        description: "Breathtaking heritage palace directly overlooking Lake Pichola. Regal suites featuring royal Indian interior decor, marble bathrooms, private boat arrival, and rooftop sunset dining.",
        images: [
            { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80", filename: "udaipur-palace-1" }
        ],
        price: 18500,
        currency: "INR",
        location: "Lake Pichola, Udaipur",
        city: "Udaipur",
        state: "Rajasthan",
        country: "India",
        geometry: { type: "Point", coordinates: [73.68, 24.5764] },
        propertyType: "Resort",
        category: "Luxury",
        guests: 2, bedrooms: 1, beds: 1, bathrooms: 1,
        coupleFriendly: true, payAtHotel: false, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: false,
        amenities: ["Lake Pichola View", "Rooftop Sunset Lounge", "Private Boat Transfer", "Royal Butler Service", "Swimming Pool"],
        rating: 4.99, reviewCount: 92, instantBooking: true, status: "active"
    },
    {
        title: "Jaisalmer Golden Fort Desert Safari Camp",
        description: "Luxury Swiss tented camp in Sam Sand Dunes Jaisalmer. Includes camel safari, Rajasthani Kalbelia dance performance, buffet dinner, and stargazing.",
        images: [
            { url: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80", filename: "jaisalmer-1" }
        ],
        price: 4999,
        currency: "INR",
        location: "Sam Sand Dunes, Jaisalmer",
        city: "Jaisalmer",
        state: "Rajasthan",
        country: "India",
        geometry: { type: "Point", coordinates: [70.505, 26.83] },
        propertyType: "Cabin",
        category: "Camping",
        guests: 4, bedrooms: 2, beds: 2, bathrooms: 2,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: false,
        amenities: ["Camel Safari Included", "Folk Cultural Show", "Bonfire", "Buffet Dinner", "Desert Sunset View"],
        rating: 4.94, reviewCount: 110, instantBooking: true, status: "active"
    },

    // ==========================================
    // GOA (NORTH GOA, SOUTH GOA, PANAJI)
    // ==========================================
    {
        title: "Anjuna Sunset Cliffside Infinity Villa Goa",
        description: "Exclusive 4-bedroom luxury villa overlooking the Arabian Sea in Anjuna Goa. Features a private infinity edge pool, landscaped gardens, butler service, and private cove access.",
        images: [
            { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80", filename: "goa-villa-1" }
        ],
        price: 14999,
        currency: "INR",
        location: "Anjuna Beach, North Goa",
        city: "Goa",
        state: "Goa",
        country: "India",
        geometry: { type: "Point", coordinates: [73.7432, 15.584] },
        propertyType: "Villa",
        category: "Villas",
        guests: 8, bedrooms: 4, beds: 4, bathrooms: 4,
        coupleFriendly: true, payAtHotel: false, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: false,
        amenities: ["Private Infinity Pool", "Ocean Sunset View", "Personal Chef", "High-speed WiFi", "BBQ Setup"],
        rating: 4.98, reviewCount: 64, instantBooking: true, status: "active"
    },
    {
        title: "OYO Select Baga Beachfront Resort Goa",
        description: "Steps from Baga beach nightlife and shacks. Features a large swimming pool, beach bar, sun loungers, couple-friendly vibe, and 24/7 security.",
        images: [
            { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80", filename: "baga-resort-1" }
        ],
        price: 3499,
        currency: "INR",
        location: "Baga Beach, North Goa",
        city: "Goa",
        state: "Goa",
        country: "India",
        geometry: { type: "Point", coordinates: [73.7517, 15.5553] },
        propertyType: "OYO Hotel",
        category: "Beachfront",
        guests: 3, bedrooms: 1, beds: 2, bathrooms: 1,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: true,
        amenities: ["Swimming Pool", "Beach Access", "Free Breakfast", "Air Conditioning", "Cocktail Bar"],
        rating: 4.84, reviewCount: 167, instantBooking: true, status: "active"
    },
    {
        title: "Fontainhas French Heritage Homestay Panaji",
        description: "Charming Portuguese colonial homestay in Fontainhas Latin Quarter Panaji Goa. Painted tiled balconies, cobbled streets, and authentic Goan breakfast.",
        images: [
            { url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80", filename: "goa-fontainhas" }
        ],
        price: 3999,
        currency: "INR",
        location: "Fontainhas Latin Quarter, Panaji",
        city: "Goa",
        state: "Goa",
        country: "India",
        geometry: { type: "Point", coordinates: [73.8315, 15.4989] },
        propertyType: "Homestay",
        category: "Havelis",
        guests: 4, bedrooms: 2, beds: 2, bathrooms: 2,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: false,
        amenities: ["Portuguese Architecture", "Latin Quarter Tour", "Goan Breakfast", "Air Conditioning", "Free WiFi"],
        rating: 4.95, reviewCount: 82, instantBooking: true, status: "active"
    },

    // ==========================================
    // KARNATAKA (BENGALURU, MYSURU, COORG)
    // ==========================================
    {
        title: "OYO Townhouse 044 Indiranagar Bengaluru",
        description: "Modern, premium OYO Townhouse located in the prime hub of Indiranagar. High-speed Wi-Fi, ergonomic workstations, vibrant aesthetic, 24/7 power backup, and couple-friendly policy.",
        images: [
            { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80", filename: "oyo-blr-1" }
        ],
        price: 2199,
        currency: "INR",
        location: "Indiranagar, Bengaluru",
        city: "Bengaluru",
        state: "Karnataka",
        country: "India",
        geometry: { type: "Point", coordinates: [77.6412, 12.9784] },
        propertyType: "OYO Hotel",
        category: "OYO Hotels",
        guests: 2, bedrooms: 1, beds: 1, bathrooms: 1,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: true,
        amenities: ["Complimentary Breakfast", "High-speed WiFi", "Air Conditioning", "24/7 Power Backup", "Elevator"],
        rating: 4.88, reviewCount: 142, instantBooking: true, status: "active"
    },
    {
        title: "Coorg Coffee Estate Heritage Bungalow",
        description: "Nestled in a 50-acre coffee plantation in Madikeri Coorg. Enjoy fresh filter coffee, estate walks, misty valley views, and fireside barbecue.",
        images: [
            { url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80", filename: "coorg-1" }
        ],
        price: 5800,
        currency: "INR",
        location: "Madikeri, Coorg",
        city: "Coorg",
        state: "Karnataka",
        country: "India",
        geometry: { type: "Point", coordinates: [75.7382, 12.4244] },
        propertyType: "Cottage",
        category: "Hill Stations",
        guests: 6, bedrooms: 3, beds: 3, bathrooms: 3,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: false,
        amenities: ["Coffee Estate Walk", "Campfire BBQ", "South Indian Breakfast", "Valley View", "Free Parking"],
        rating: 4.96, reviewCount: 77, instantBooking: true, status: "active"
    },

    // ==========================================
    // KERALA (ALLEPPEY, MUNNAR, KOCHI)
    // ==========================================
    {
        title: "Alleppey Backwater Royal Houseboat Kerala",
        description: "Traditional Kettuvallam luxury houseboat floating through tranquil backwaters. Air-conditioned bedrooms, sun deck, and fresh Karimeen fish dinner cooked by onboard private chef.",
        images: [
            { url: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80", filename: "kerala-houseboat-1" }
        ],
        price: 7800,
        currency: "INR",
        location: "Punnamada Lake, Alleppey",
        city: "Alleppey",
        state: "Kerala",
        country: "India",
        geometry: { type: "Point", coordinates: [76.3388, 9.4981] },
        propertyType: "Houseboat",
        category: "Houseboats",
        guests: 4, bedrooms: 2, beds: 2, bathrooms: 2,
        coupleFriendly: true, payAtHotel: false, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: false,
        amenities: ["Onboard Private Chef", "Air Conditioning", "Sun Deck View", "Kerala Dinner", "Canoe Ride"],
        rating: 4.97, reviewCount: 110, instantBooking: true, status: "active"
    },
    {
        title: "Munnar Tea Estate Hill Resort & Treehouse",
        description: "Surrounded by misty green hills and cardamom plantations in Munnar. Features authentic luxury treehouses with glass windows, Ayurvedic massage center, and campfire.",
        images: [
            { url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=1200&q=80", filename: "munnar-treehouse-1" }
        ],
        price: 6199,
        currency: "INR",
        location: "Pallivasal, Munnar",
        city: "Munnar",
        state: "Kerala",
        country: "India",
        geometry: { type: "Point", coordinates: [77.0597, 10.0889] },
        propertyType: "Resort",
        category: "Hill Stations",
        guests: 2, bedrooms: 1, beds: 1, bathrooms: 1,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: false,
        amenities: ["Luxury Treehouse", "Tea Plantation Tour", "Ayurvedic Spa", "Campfire", "Organic Breakfast"],
        rating: 4.95, reviewCount: 76, instantBooking: true, status: "active"
    },

    // ==========================================
    // HIMACHAL PRADESH & UTTARAKHAND (MANALI, SHIMLA, RISHIKESH)
    // ==========================================
    {
        title: "Solang Valley Pine Alpine Cabin Manali",
        description: "Cosy wooden pine cabin nestled in Solang Valley with panoramic views of snow-capped Himalayan peaks. Features indoor fireplace, heated blankets, and glass lounge room.",
        images: [
            { url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80", filename: "manali-cabin-1" }
        ],
        price: 4999,
        currency: "INR",
        location: "Solang Valley, Manali",
        city: "Manali",
        state: "Himachal Pradesh",
        country: "India",
        geometry: { type: "Point", coordinates: [77.1578, 32.3168] },
        propertyType: "Cabin",
        category: "Hill Stations",
        guests: 4, bedrooms: 2, beds: 2, bathrooms: 2,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: false,
        amenities: ["Fireplace", "Heated Blankets", "Himalayan Mountain View", "Apple Orchard", "Bonfire"],
        rating: 4.93, reviewCount: 78, instantBooking: true, status: "active"
    },
    {
        title: "Cloud Nine Timber Cottage Shimla",
        description: "Charming cedarwood cottage perched on the Ridge in Shimla. Breathtaking snow peak views, wood-burning stove, balcony dining, and stroll away from Mall Road.",
        images: [
            { url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80", filename: "shimla-1" }
        ],
        price: 4299,
        currency: "INR",
        location: "The Ridge, Shimla",
        city: "Shimla",
        state: "Himachal Pradesh",
        country: "India",
        geometry: { type: "Point", coordinates: [77.1734, 31.1048] },
        propertyType: "Cabin",
        category: "Hill Stations",
        guests: 4, bedrooms: 2, beds: 2, bathrooms: 2,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: false,
        amenities: ["Himalayan Snow View", "Fireplace", "Near Mall Road", "Free WiFi", "Heated Blankets"],
        rating: 4.9, reviewCount: 63, instantBooking: true, status: "active"
    },
    {
        title: "Ganga View Ashram & Yoga Retreat Rishikesh",
        description: "Serene eco-resort and yoga homestay on the banks of holy river Ganga in Rishikesh. Organic vegetarian meals, daily morning yoga, and sound healing.",
        images: [
            { url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80", filename: "rishikesh-1" }
        ],
        price: 2499,
        currency: "INR",
        location: "Tapovan, Rishikesh",
        city: "Rishikesh",
        state: "Uttarakhand",
        country: "India",
        geometry: { type: "Point", coordinates: [78.3243, 30.1314] },
        propertyType: "Homestay",
        category: "Pilgrimage",
        guests: 2, bedrooms: 1, beds: 1, bathrooms: 1,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: false,
        amenities: ["Ganga River View", "Daily Morning Yoga", "Sattvik Organic Dining", "Meditation Hall", "Free WiFi"],
        rating: 4.91, reviewCount: 54, instantBooking: true, status: "active"
    },

    // ==========================================
    // UTTAR PRADESH & WEST BENGAL & OTHER HUBS (VARANASI, LUCKNOW, AGRA, KOLKATA, CHENNAI, HYDERABAD)
    // ==========================================
    {
        title: "Kashi Heritage Ganga Ghat Stay Varanasi",
        description: "Historic traditional home situated right on Assi Ghat in Varanasi. Experience evening Ganga Aarti from your private terrace, classical Indian music recitals, and morning boat tours.",
        images: [
            { url: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80", filename: "varanasi-1" }
        ],
        price: 2999,
        currency: "INR",
        location: "Assi Ghat, Varanasi",
        city: "Varanasi",
        state: "Uttar Pradesh",
        country: "India",
        geometry: { type: "Point", coordinates: [83.0066, 25.288] },
        propertyType: "Homestay",
        category: "Pilgrimage",
        guests: 3, bedrooms: 1, beds: 2, bathrooms: 1,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: false,
        amenities: ["Direct Ganga Aarti View", "Rooftop Terrace", "Morning Boat Ride", "Free WiFi", "Air Conditioning"],
        rating: 4.96, reviewCount: 94, instantBooking: true, status: "active"
    },
    {
        title: "Nawab Heritage Residency Hazratganj Lucknow",
        description: "Classic Awadhi architecture homestay near Hazratganj Lucknow. Famous for Tunday Kababi breakfast tours, high ceilings, and royal hospitality.",
        images: [
            { url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80", filename: "lucknow-1" }
        ],
        price: 2500,
        currency: "INR",
        location: "Hazratganj, Lucknow",
        city: "Lucknow",
        state: "Uttar Pradesh",
        country: "India",
        geometry: { type: "Point", coordinates: [80.9462, 26.8467] },
        propertyType: "Homestay",
        category: "Havelis",
        guests: 3, bedrooms: 1, beds: 2, bathrooms: 1,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: true,
        amenities: ["Hazratganj Location", "Awadhi Breakfast", "Air Conditioning", "Free WiFi", "Power Backup"],
        rating: 4.87, reviewCount: 88, instantBooking: true, status: "active"
    },
    {
        title: "Taj Mahal View Luxury Suite Agra",
        description: "Rooftop infinity pool suite with unobstructed views of the Taj Mahal in Agra. Only 500 meters from Taj East Gate.",
        images: [
            { url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80", filename: "agra-1" }
        ],
        price: 4500,
        currency: "INR",
        location: "Taj East Gate Road, Agra",
        city: "Agra",
        state: "Uttar Pradesh",
        country: "India",
        geometry: { type: "Point", coordinates: [78.0421, 27.1751] },
        propertyType: "Hotel",
        category: "Luxury",
        guests: 2, bedrooms: 1, beds: 1, bathrooms: 1,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: true,
        amenities: ["Taj Mahal View", "Rooftop Swimming Pool", "Free Breakfast", "Air Conditioning", "WiFi"],
        rating: 4.94, reviewCount: 140, instantBooking: true, status: "active"
    },
    {
        title: "Park Street Heritage Mansion Kolkata",
        description: "Victorian colonial mansion located on iconic Park Street Kolkata. High ceilings, teakwood furniture, and authentic Bengali Mishti breakfast.",
        images: [
            { url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80", filename: "kolkata-1" }
        ],
        price: 3200,
        currency: "INR",
        location: "Park Street, Kolkata",
        city: "Kolkata",
        state: "West Bengal",
        country: "India",
        geometry: { type: "Point", coordinates: [88.3529, 22.553] },
        propertyType: "Homestay",
        category: "Havelis",
        guests: 4, bedrooms: 2, beds: 2, bathrooms: 2,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: false,
        amenities: ["Park Street Hub", "Bengali Breakfast", "Air Conditioning", "Free WiFi", "High Ceilings"],
        rating: 4.91, reviewCount: 83, instantBooking: true, status: "active"
    },
    {
        title: "Banjara Hills Executive Suite Hyderabad",
        description: "Upscale serviced apartment in Banjara Hills Hyderabad. Close to IT hubs and Hussain Sagar Lake. Hyderabadi Biryani dining options nearby.",
        images: [
            { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", filename: "hyderabad-1" }
        ],
        price: 2799,
        currency: "INR",
        location: "Road No. 12, Banjara Hills, Hyderabad",
        city: "Hyderabad",
        state: "Telangana",
        country: "India",
        geometry: { type: "Point", coordinates: [78.4482, 17.4156] },
        propertyType: "Apartment",
        category: "Cities",
        guests: 3, bedrooms: 1, beds: 2, bathrooms: 1,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: true,
        amenities: ["Banjara Hills Location", "Free Breakfast", "Air Conditioning", "WiFi", "Gym Access"],
        rating: 4.88, reviewCount: 97, instantBooking: true, status: "active"
    },
    {
        title: "Marina Beachfront Suite Chennai",
        description: "Sea-facing penthouse near Marina Beach Chennai. Enjoy morning sea breeze, Filter Coffee, and easy access to Mylapore Temple.",
        images: [
            { url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80", filename: "chennai-1" }
        ],
        price: 2999,
        currency: "INR",
        location: "Beach Road, Santhome, Chennai",
        city: "Chennai",
        state: "Tamil Nadu",
        country: "India",
        geometry: { type: "Point", coordinates: [80.2785, 13.0334] },
        propertyType: "Apartment",
        category: "Beachfront",
        guests: 3, bedrooms: 1, beds: 2, bathrooms: 1,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: true,
        amenities: ["Marina Beach View", "South Indian Filter Coffee", "Air Conditioning", "WiFi", "Elevator"],
        rating: 4.86, reviewCount: 75, instantBooking: true, status: "active"
    },
    {
        title: "Golden Temple Heritage Stay Amritsar",
        description: "Walking distance (300m) to Sri Harmandir Sahib (Golden Temple) in Amritsar. Clean, quiet, family & couple friendly with Amritsari Kulcha breakfast.",
        images: [
            { url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80", filename: "amritsar-1" }
        ],
        price: 2200,
        currency: "INR",
        location: "Heritage Street, Golden Temple, Amritsar",
        city: "Amritsar",
        state: "Punjab",
        country: "India",
        geometry: { type: "Point", coordinates: [74.8765, 31.62] },
        propertyType: "Homestay",
        category: "Pilgrimage",
        guests: 4, bedrooms: 2, beds: 2, bathrooms: 2,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: true,
        amenities: ["300m to Golden Temple", "Amritsari Kulcha Breakfast", "Air Conditioning", "Free WiFi", "Power Backup"],
        rating: 4.97, reviewCount: 156, instantBooking: true, status: "active"
    },
    {
        title: "OYO Premium Chappan Dukan Indore",
        description: "Located near famous Chappan Dukan street food hub in Indore. Clean, modern stay with sanitized rooms, high-speed WiFi, and Poha Jalebi breakfast.",
        images: [
            { url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80", filename: "indore-1" }
        ],
        price: 1650,
        currency: "INR",
        location: "New Palasia, Chappan Dukan, Indore",
        city: "Indore",
        state: "Madhya Pradesh",
        country: "India",
        geometry: { type: "Point", coordinates: [75.8839, 22.7244] },
        propertyType: "OYO Hotel",
        category: "OYO Hotels",
        guests: 2, bedrooms: 1, beds: 1, bathrooms: 1,
        coupleFriendly: true, payAtHotel: true, freeBreakfast: true, sanitizedSafe: true, isOYOVerified: true,
        amenities: ["Near Chappan Dukan", "Indori Poha Breakfast", "Air Conditioning", "WiFi", "Sanitized Rooms"],
        rating: 4.85, reviewCount: 104, instantBooking: true, status: "active"
    }
];

module.exports = sampleListings;