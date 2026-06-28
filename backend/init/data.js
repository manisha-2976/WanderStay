const sampleListings = [
  {
    title: "Sunny Beach Villa near Calangute",
    description: "This beautiful beachside villa near Calangute offers a relaxed coastal vibe with spacious interiors and plenty of natural light. Perfect for families or small groups, the home features comfortable bedrooms, a fully equipped kitchen, and a cozy living area that opens into a private garden. Guests can enjoy morning walks to the nearby beach, explore vibrant local markets, or simply unwind by the pool. The property is designed to provide both privacy and convenience, with restaurants, cafes, and nightlife options just a short drive away. Thoughtfully decorated with Goan touches, the villa creates a warm and inviting atmosphere. Whether you are looking to relax under palm trees or explore Goa’s lively culture, this villa makes an ideal base for your trip.",
    propertyType: "Villa",
    roomType: "Entire place",
    guest: 6,
    bedroom: 3,
    bed: 3,
    bathroom: 3,
    price: 8500,
    country: "India",
    street: "Calangute Beach Road",
    city: "Goa",
    state: "Goa",
    pincode: 403516,
    amenities: ["wifi", "AC", "pool", "parking", "kitchen"],
    safetyItems: ["fire extinguisher", "first aid kit"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782492983/wanderStay_DEV/optimized-seed/wp-1.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-1",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782492984/wanderStay_DEV/optimized-seed/wp-2.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-2",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782492985/wanderStay_DEV/optimized-seed/wp-3.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-3",
      category: "additional"
    }]
  },
  {
    title: "Budget Apartment in Andheri West",
    description: "A compact and affordable apartment located in the bustling area of Andheri West, perfect for solo travelers or couples visiting Mumbai. The space is simple yet comfortable, offering all essential amenities for a pleasant stay. With easy access to metro stations, restaurants, and shopping centers, this property is ideal for those who want to explore the city without spending too much on accommodation. The apartment is well-maintained and provides a quiet retreat from the busy streets outside. Guests will appreciate the convenience of nearby cafes and transport options. Whether you're in Mumbai for business or leisure, this budget-friendly stay ensures comfort and accessibility at a reasonable price.",
    propertyType: "Apartment",
    roomType: "Shared room",
    guest: 2,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    price: 1800,
    country: "India",
    street: "Lokhandwala Market Road",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: 400053,
    amenities: ["wifi", "AC"],
    safetyItems: ["smoke alarm"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782492986/wanderStay_DEV/optimized-seed/wp-4.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-4",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782492987/wanderStay_DEV/optimized-seed/wp-5.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-5",
      category: "additional"
    }]
  },

  {
    title: "Ocean Breeze Villa in Candolim",
    description: "Set in a peaceful lane near Candolim Beach, this elegant villa offers a perfect mix of comfort and coastal charm. The interiors are tastefully designed with airy rooms, large windows, and soothing decor that reflects Goa’s relaxed vibe. Guests can unwind in the private pool, enjoy meals in the open dining space, or take a short stroll to the beach for sunsets. The villa is well-suited for families and groups looking for privacy while still being close to cafes, shacks, and nightlife. With attentive maintenance and modern facilities, it ensures a smooth and enjoyable stay. Whether you’re planning a holiday with friends or a quiet family break, this property offers a memorable experience.",
    propertyType: "Villa",
    roomType: "Entire place",
    guest: 7,
    bedroom: 3,
    bed: 4,
    bathroom: 3,
    price: 12000,
    country: "India",
    street: "Candolim Main Road",
    city: "Goa",
    state: "Goa",
    pincode: 403515,
    amenities: ["wifi", "AC", "pool", "parking", "kitchen"],
    safetyItems: ["fire extinguisher", "first aid kit"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782492989/wanderStay_DEV/optimized-seed/wp-6.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-6",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782492990/wanderStay_DEV/optimized-seed/wp-7.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-7",
      category: "additional"
    }]
  },
  {
    title: "Simple Studio near Kurla Station",
    description: "This practical studio apartment near Kurla Station is ideal for travelers seeking a budget stay with good connectivity. The space is compact yet functional, featuring a comfortable bed, clean bathroom, and essential amenities. It is located in a lively neighborhood with easy access to public transport, local eateries, and markets. The apartment offers a quiet environment despite being in a busy part of the city, making it suitable for both short visits and work trips. Guests will find everything they need for a hassle-free stay at an affordable price point. A great choice for those looking to explore Mumbai without spending too much on accommodation.",
    propertyType: "Apartment",
    roomType: "Entire place",
    guest: 2,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    price: 1700,
    country: "India",
    street: "LBS Marg",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: 400070,
    amenities: ["wifi", "AC"],
    safetyItems: ["smoke alarm"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782492991/wanderStay_DEV/optimized-seed/wp-8.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-8",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782492993/wanderStay_DEV/optimized-seed/wp-9.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-9",
      category: "additional"
    }]
  },
  {
    title: "Heritage Style Home in Fontainhas",
    description: "Experience the charm of old Goa in this beautifully restored heritage home located in Fontainhas. The house features colorful walls, antique furnishings, and a cozy ambiance that reflects Portuguese architecture. Guests can enjoy quiet evenings on the balcony or explore nearby art galleries and cafes. The property blends traditional design with modern comforts, ensuring a comfortable stay while preserving its historic character. Ideal for couples or small families, this home offers a unique cultural experience. The peaceful surroundings and friendly neighborhood add to its appeal, making it a perfect choice for travelers who appreciate authenticity and charm.",
    propertyType: "House",
    roomType: "Entire place",
    guest: 4,
    bedroom: 2,
    bed: 2,
    bathroom: 2,
    price: 4200,
    country: "India",
    street: "Rua de Ourem",
    city: "Goa",
    state: "Goa",
    pincode: 403001,
    amenities: ["wifi", "AC", "kitchen"],
    safetyItems: ["first aid kit"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782492994/wanderStay_DEV/optimized-seed/wp-10.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-10",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782492995/wanderStay_DEV/optimized-seed/wp-11.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-11",
      category: "additional"
    }]
  },
  {
    title: "Modern Apartment in Powai Heights",
    description: "Located in the upscale area of Powai, this modern apartment offers a stylish and comfortable stay. The interiors are sleek and well-designed, with a cozy living area and a fully equipped kitchen. Large windows provide a lovely view of the surrounding greenery and lake area. Guests can enjoy access to building amenities like a gym and parking. The neighborhood is known for its cafes, restaurants, and calm environment, making it ideal for professionals and couples. With excellent connectivity to major business hubs, this apartment is a great choice for both work and leisure travelers visiting Mumbai.",
    propertyType: "Apartment",
    roomType: "Private room",
    guest: 3,
    bedroom: 1,
    bed: 2,
    bathroom: 1,
    price: 4500,
    country: "India",
    street: "Hiranandani Gardens",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: 400076,
    amenities: ["wifi", "AC", "parking", "gym"],
    safetyItems: ["fire extinguisher"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782492996/wanderStay_DEV/optimized-seed/wp-12.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-12",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782492998/wanderStay_DEV/optimized-seed/wp-13.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-13",
      category: "additional"
    }]
  },
  {
    title: "Luxury Pool Villa in Anjuna",
    description: "This stunning villa in Anjuna offers a luxurious retreat with a private pool and elegant interiors. Designed for comfort and style, the space features spacious bedrooms, a modern kitchen, and a beautifully landscaped outdoor area. Guests can relax by the pool, host small gatherings, or explore nearby beaches and nightlife. The villa is located in a quiet area, ensuring privacy while still being close to popular attractions. With premium amenities and thoughtful design, it provides a perfect setting for a memorable holiday. Ideal for groups or families looking for a high-end stay in Goa.",
    propertyType: "Villa",
    roomType: "Entire place",
    guest: 8,
    bedroom: 4,
    bed: 4,
    bathroom: 4,
    price: 18000,
    country: "India",
    street: "Anjuna Beach Road",
    city: "Goa",
    state: "Goa",
    pincode: 403509,
    amenities: ["wifi", "AC", "pool", "parking", "kitchen"],
    safetyItems: ["fire extinguisher", "first aid kit"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782492999/wanderStay_DEV/optimized-seed/wp-14.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-14",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493000/wanderStay_DEV/optimized-seed/wp-15.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-15",
      category: "additional"
    }]
  },

  {
    title: "Seaside Comfort Villa in Baga",
    description: "Located close to Baga Beach, this comfortable villa offers a relaxing coastal stay with airy rooms and modern furnishings. The living area is spacious, and the kitchen is fully equipped for longer stays. Guests can enjoy evening walks to the beach or relax in the private outdoor seating area. The neighborhood is lively with easy access to cafes and nightlife, yet the villa remains peaceful for rest.",
    propertyType: "Villa",
    roomType: "Entire place",
    guest: 5,
    bedroom: 2,
    bed: 3,
    bathroom: 2,
    price: 7000,
    country: "India",
    street: "Baga Beach Road",
    city: "Goa",
    state: "Goa",
    pincode: 403516,
    amenities: ["wifi", "AC", "parking", "kitchen"],
    safetyItems: ["fire extinguisher", "first aid kit"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493001/wanderStay_DEV/optimized-seed/wp-16.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-16",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493002/wanderStay_DEV/optimized-seed/wp-17.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-17",
      category: "additional"
    }]
  },
  {
    title: "Budget Stay near Bandra Station",
    description: "This simple and affordable room near Bandra Station is ideal for travelers who want convenience without high costs. The space is compact but clean, offering a comfortable bed and basic facilities. With excellent connectivity to local trains and buses, exploring Mumbai becomes easy. Surrounded by cafes and street food spots, guests can enjoy the local lifestyle while staying within budget.",
    propertyType: "Hotel",
    roomType: "Private room",
    guest: 2,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    price: 1800,
    country: "India",
    street: "Hill Road",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: 400050,
    amenities: ["wifi", "AC"],
    safetyItems: ["smoke alarm"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493003/wanderStay_DEV/optimized-seed/wp-18.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-18",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493005/wanderStay_DEV/optimized-seed/wp-19.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-19",
      category: "additional"
    }]
  },
  {
    title: "Cozy Apartment in Goregaon West",
    description: "A cozy apartment located in Goregaon West, perfect for short stays in Mumbai. The space is thoughtfully arranged with a small living area, kitchen, and a comfortable bedroom. Guests can easily access malls, offices, and transport hubs. The area is calm and residential, offering a quiet retreat after a busy day exploring the city.",
    propertyType: "Apartment",
    roomType: "Entire place",
    guest: 3,
    bedroom: 1,
    bed: 2,
    bathroom: 1,
    price: 3200,
    country: "India",
    street: "SV Road",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: 400062,
    amenities: ["wifi", "AC", "kitchen"],
    safetyItems: ["fire extinguisher"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493006/wanderStay_DEV/optimized-seed/wp-20.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-20",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493007/wanderStay_DEV/optimized-seed/wp-21.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-21",
      category: "additional"
    }]
  },
  {
    title: "Elegant Pool Villa in Siolim",
    description: "This elegant villa in Siolim features a private pool and modern interiors, offering a peaceful escape in North Goa. The property includes spacious bedrooms, a bright living area, and a fully equipped kitchen. Guests can unwind by the pool or explore nearby beaches like Morjim and Ashwem. The villa is ideal for families and groups seeking comfort and privacy.",
    propertyType: "Villa",
    roomType: "Entire place",
    guest: 8,
    bedroom: 4,
    bed: 4,
    bathroom: 4,
    price: 15000,
    country: "India",
    street: "Siolim Road",
    city: "Goa",
    state: "Goa",
    pincode: 403517,
    amenities: ["wifi", "AC", "pool", "parking"],
    safetyItems: ["fire extinguisher", "first aid kit"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493008/wanderStay_DEV/optimized-seed/wp-22.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-22",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493010/wanderStay_DEV/optimized-seed/wp-23.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-23",
      category: "additional"
    }]
  },
  {
    title: "Compact Studio in Andheri East",
    description: "This compact studio apartment is located close to the airport in Andheri East, making it ideal for quick stays and business trips. The room is neatly arranged with essential amenities, ensuring comfort without unnecessary extras. Guests benefit from easy access to metro lines, offices, and restaurants in the area.",
    propertyType: "Apartment",
    roomType: "Entire place",
    guest: 2,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    price: 2000,
    country: "India",
    street: "Marol Pipeline Road",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: 400059,
    amenities: ["wifi", "AC"],
    safetyItems: ["smoke alarm"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493011/wanderStay_DEV/optimized-seed/wp-24.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-24",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493012/wanderStay_DEV/optimized-seed/wp-25.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-25",
      category: "additional"
    }]
  },
  {
    title: "Beach Cottage in Vagator",
    description: "A charming cottage located near Vagator Beach, offering a relaxed and cozy stay. The property features simple yet comfortable interiors with a small garden area. Guests can enjoy peaceful mornings and lively evenings exploring nearby cafes and beach spots. Ideal for couples and small families.",
    propertyType: "House",
    roomType: "Entire place",
    guest: 4,
    bedroom: 2,
    bed: 2,
    bathroom: 2,
    price: 4000,
    country: "India",
    street: "Vagator Cliff Road",
    city: "Goa",
    state: "Goa",
    pincode: 403509,
    amenities: ["wifi", "AC", "parking"],
    safetyItems: ["first aid kit"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493013/wanderStay_DEV/optimized-seed/wp-26.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-26",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493014/wanderStay_DEV/optimized-seed/wp-27.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-27",
      category: "additional"
    }]
  },
  {
    title: "Luxury Sea View Apartment in Worli",
    description: "This premium apartment in Worli offers breathtaking sea views and modern interiors. The space is designed for comfort with elegant furnishings, a spacious living room, and large windows. Located close to business hubs and fine dining spots, it is ideal for professionals and couples seeking a high-end stay.",
    propertyType: "Apartment",
    roomType: "Entire place",
    guest: 3,
    bedroom: 1,
    bed: 2,
    bathroom: 1,
    price: 9500,
    country: "India",
    street: "Worli Sea Face",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: 400018,
    amenities: ["wifi", "AC", "parking", "gym"],
    safetyItems: ["fire extinguisher"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493015/wanderStay_DEV/optimized-seed/wp-28.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-28",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493017/wanderStay_DEV/optimized-seed/wp-29.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-29",
      category: "additional"
    }]
  },

  {
    title: "Budget Room near Karol Bagh Market",
    description: "Located in the heart of Karol Bagh, this budget-friendly room is perfect for travelers looking to stay close to shopping streets and local eateries. The space is simple yet clean, offering a comfortable bed, air conditioning, and reliable WiFi. Guests can easily access metro stations and explore nearby attractions without hassle. Ideal for solo travelers or couples, this stay provides essential comfort at an affordable price. The lively surroundings give you a taste of Delhi’s vibrant lifestyle while ensuring a safe and convenient stay.",
    propertyType: "Hotel",
    roomType: "Private room",
    guest: 2,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    price: 1800,
    country: "India",
    street: "Ajmal Khan Road",
    city: "Delhi",
    state: "Delhi",
    pincode: 110005,
    amenities: ["wifi", "AC"],
    safetyItems: ["smoke alarm"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493018/wanderStay_DEV/optimized-seed/wp-30.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-30",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493019/wanderStay_DEV/optimized-seed/wp-31.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-31",
      category: "additional"
    }]
  },
  {
    title: "Modern Apartment in South Delhi",
    description: "This modern apartment in South Delhi offers a peaceful and comfortable stay with stylish interiors and essential amenities. The space includes a cozy living room, a well-equipped kitchen, and a bright bedroom with natural light. Located in a quiet neighborhood, it is still close to cafes, markets, and metro connectivity. Perfect for couples or business travelers, the apartment ensures a relaxed environment after a long day exploring the city. The secure building and nearby conveniences make it a practical choice for short and extended stays.",
    propertyType: "Apartment",
    roomType: "Entire place",
    guest: 3,
    bedroom: 1,
    bed: 2,
    bathroom: 1,
    price: 4200,
    country: "India",
    street: "Greater Kailash Part 1",
    city: "Delhi",
    state: "Delhi",
    pincode: 110048,
    amenities: ["wifi", "AC", "kitchen", "parking"],
    safetyItems: ["fire extinguisher"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493020/wanderStay_DEV/optimized-seed/wp-32.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-32",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493022/wanderStay_DEV/optimized-seed/wp-33.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-33",
      category: "additional"
    }]
  },
  {
    title: "Heritage Haveli Stay in Jaipur",
    description: "Experience the charm of Jaipur in this beautifully restored haveli that blends traditional Rajasthani architecture with modern comfort. The rooms are decorated with vintage furniture, colorful textiles, and intricate designs that reflect the city's rich heritage. Guests can relax in the courtyard, enjoy local cuisine, and explore nearby attractions such as Hawa Mahal and City Palace. The property offers a peaceful atmosphere while still being close to bustling markets. Ideal for travelers who appreciate culture and history, this stay provides an authentic Jaipur experience.",
    propertyType: "House",
    roomType: "Private room",
    guest: 2,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    price: 3500,
    country: "India",
    street: "Johari Bazaar Road",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: 302003,
    amenities: ["wifi", "AC", "parking"],
    safetyItems: ["first aid kit"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493023/wanderStay_DEV/optimized-seed/wp-34.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-34",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493024/wanderStay_DEV/optimized-seed/wp-35.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-35",
      category: "additional"
    }]
  },
  {
    title: "Luxury Royal Villa near Amer Fort",
    description: "This luxurious villa near Amer Fort offers a royal living experience with grand interiors and spacious rooms. The property features elegant decor, a private garden, and a swimming pool for a relaxing stay. Guests can enjoy serene surroundings away from the city's hustle while still being close to major tourist spots. The villa is perfect for families or groups looking for a premium experience with privacy and comfort. With attentive service and modern facilities, it provides a memorable stay in Jaipur.",
    propertyType: "Villa",
    roomType: "Entire place",
    guest: 8,
    bedroom: 4,
    bed: 4,
    bathroom: 4,
    price: 12000,
    country: "India",
    street: "Amer Road",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: 302028,
    amenities: ["wifi", "AC", "pool", "parking", "garden"],
    safetyItems: ["fire extinguisher", "first aid kit"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493025/wanderStay_DEV/optimized-seed/wp-36.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-36",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493026/wanderStay_DEV/optimized-seed/wp-37.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-37",
      category: "additional"
    }]
  },
  {
    title: "Shared Hostel Room in Paharganj",
    description: "A lively shared room in Paharganj, perfect for backpackers and budget travelers. The space offers bunk beds, basic facilities, and a friendly atmosphere where guests can meet fellow travelers. Located close to New Delhi Railway Station, it provides easy access to transport and nearby markets. The hostel environment is safe and welcoming, making it ideal for those exploring the city on a budget. Enjoy local food spots and vibrant street life just steps away.",
    propertyType: "Hotel",
    roomType: "Shared room",
    guest: 1,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    price: 1500,
    country: "India",
    street: "Main Bazaar",
    city: "Delhi",
    state: "Delhi",
    pincode: 110055,
    amenities: ["wifi"],
    safetyItems: ["smoke alarm"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493027/wanderStay_DEV/optimized-seed/wp-38.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-38",
      category: "additional"
    }]
  },

  {
    title: "Compact Budget Room near Lajpat Nagar Market",
    description: "This compact budget room is located just a short walk from the busy Lajpat Nagar market, making it ideal for shoppers and travelers. The room is clean and thoughtfully arranged with basic amenities to ensure a comfortable stay. Guests can easily access metro connectivity and explore South Delhi’s cafes and street food spots. Despite being in a lively area, the room offers a quiet space to relax after a long day. Perfect for solo travelers or couples looking for affordability and convenience.",
    propertyType: "Hotel",
    roomType: "Private room",
    guest: 2,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    price: 1900,
    country: "India",
    street: "Central Market Road",
    city: "Delhi",
    state: "Delhi",
    pincode: 110024,
    amenities: ["wifi", "AC"],
    safetyItems: ["smoke alarm"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493030/wanderStay_DEV/optimized-seed/wp-40.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-40",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493031/wanderStay_DEV/optimized-seed/wp-41.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-41",
      category: "additional"
    }]
  },
  {
    title: "Spacious Apartment in Dwarka Sector 7",
    description: "Located in a peaceful residential block, this spacious apartment offers a comfortable stay for families and professionals. The home features a bright living area, well-equipped kitchen, and clean bedrooms. With nearby parks, grocery stores, and metro access, it provides convenience along with a calm environment. Ideal for longer stays, guests can enjoy a homely atmosphere with modern essentials. The apartment is secure and well-maintained, ensuring a smooth and relaxed experience in Delhi.",
    propertyType: "Apartment",
    roomType: "Entire place",
    guest: 5,
    bedroom: 2,
    bed: 3,
    bathroom: 2,
    price: 4200,
    country: "India",
    street: "Sector 7 Road",
    city: "Delhi",
    state: "Delhi",
    pincode: 110075,
    amenities: ["wifi", "AC", "kitchen", "parking"],
    safetyItems: ["fire extinguisher"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493032/wanderStay_DEV/optimized-seed/wp-42.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-42",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493033/wanderStay_DEV/optimized-seed/wp-43.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-43",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493035/wanderStay_DEV/optimized-seed/wp-44.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-44",
      category: "additional"
    }]
  },
  {
    title: "Elegant Business Hotel in Connaught Place",
    description: "Situated in the heart of Connaught Place, this business hotel is perfect for professionals and tourists alike. The rooms are designed with modern interiors, offering comfort and functionality. Guests benefit from easy access to offices, shopping outlets, and restaurants. The property provides a peaceful environment despite its central location. Ideal for short business trips, it combines convenience with quality service. Enjoy the lively surroundings while staying in a well-managed and secure property.",
    propertyType: "Hotel",
    roomType: "Private room",
    guest: 2,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    price: 4800,
    country: "India",
    street: "Inner Circle",
    city: "Delhi",
    state: "Delhi",
    pincode: 110001,
    amenities: ["wifi", "AC", "parking"],
    safetyItems: ["fire extinguisher"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493036/wanderStay_DEV/optimized-seed/wp-45.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-45",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493037/wanderStay_DEV/optimized-seed/wp-46.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-46",
      category: "additional"
    }]
  },
  {
    title: "Charming Heritage Room in Bani Park",
    description: "This charming heritage room in Bani Park captures the essence of Jaipur’s culture with traditional decor and warm hospitality. The space features antique furniture, colorful fabrics, and a cozy ambiance. Guests can enjoy a peaceful courtyard and explore nearby attractions with ease. Perfect for travelers seeking an authentic experience, the property blends history with comfort. The neighborhood is quiet yet well-connected, offering a balanced stay.",
    propertyType: "House",
    roomType: "Private room",
    guest: 2,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    price: 3200,
    country: "India",
    street: "Bani Park Lane",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: 302016,
    amenities: ["wifi", "AC", "parking"],
    safetyItems: ["first aid kit"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493038/wanderStay_DEV/optimized-seed/wp-47.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-47",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493039/wanderStay_DEV/optimized-seed/wp-48.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-48",
      category: "additional"
    }]
  },
  {
    title: "Royal Courtyard Villa in Civil Lines Jaipur",
    description: "This grand villa in Civil Lines offers a royal experience with spacious interiors and a serene courtyard. Designed with elegant Rajasthani elements, the property includes multiple bedrooms, a large dining space, and lush outdoor areas. Guests can relax in privacy while enjoying premium comfort. The villa is located in a posh neighborhood with easy access to city attractions. Ideal for families or groups seeking a luxurious stay with a touch of tradition.",
    propertyType: "Villa",
    roomType: "Entire place",
    guest: 10,
    bedroom: 5,
    bed: 5,
    bathroom: 5,
    price: 14000,
    country: "India",
    street: "Civil Lines Road",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: 302006,
    amenities: ["wifi", "AC", "parking", "garden"],
    safetyItems: ["fire extinguisher", "first aid kit"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493040/wanderStay_DEV/optimized-seed/wp-49.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-49",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493042/wanderStay_DEV/optimized-seed/wp-50.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-50",
      category: "additional"
    }]
  },
  {
    title: "Affordable Shared Room near Saket Mall",
    description: "This shared room near Saket offers a budget-friendly option for travelers looking to stay in South Delhi. The space is simple but clean, with bunk beds and essential facilities. Guests can easily access Select Citywalk Mall, metro stations, and nearby eateries. It’s ideal for backpackers or solo travelers who prefer affordability over luxury. The environment is friendly and safe, making it a convenient base to explore Delhi.",
    propertyType: "Hotel",
    roomType: "Shared room",
    guest: 1,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    price: 1500,
    country: "India",
    street: "Press Enclave Road",
    city: "Delhi",
    state: "Delhi",
    pincode: 110017,
    amenities: ["wifi"],
    safetyItems: ["smoke alarm"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493044/wanderStay_DEV/optimized-seed/wp-51.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-51",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493045/wanderStay_DEV/optimized-seed/wp-52.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-52",
      category: "additional"
    }]
  },
  {
    title: "Classic Apartment near Raja Park",
    description: "Located in the vibrant area of Raja Park, this apartment offers a comfortable stay with easy access to shopping streets and local food joints. The space is well-maintained with a cozy living area and functional kitchen. Guests can explore Jaipur’s markets and return to a peaceful home environment. Suitable for small families or couples, the apartment ensures a pleasant stay with essential amenities.",
    propertyType: "Apartment",
    roomType: "Entire place",
    guest: 4,
    bedroom: 2,
    bed: 2,
    bathroom: 1,
    price: 3600,
    country: "India",
    street: "Raja Park Road",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: 302004,
    amenities: ["wifi", "AC", "kitchen"],
    safetyItems: ["fire extinguisher"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493046/wanderStay_DEV/optimized-seed/wp-53.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-53",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493047/wanderStay_DEV/optimized-seed/wp-54.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-54",
      category: "additional"
    }]
  },

  {
    title: "Snow View Cottage in Old Manali",
    description: "This cozy cottage in Old Manali offers stunning views of snow-covered peaks and pine forests. Designed for comfort, it features warm wooden interiors, a fireplace, and a small balcony to enjoy the chilly mountain breeze. Guests can relax with hot tea while watching the mist roll over the hills. Located close to cafes and trekking routes, it’s ideal for those seeking both adventure and relaxation. The peaceful surroundings and crisp mountain air make it a perfect escape from city life.",
    propertyType: "House",
    roomType: "Entire place",
    guest: 4,
    bedroom: 2,
    bed: 2,
    bathroom: 1,
    price: 4500,
    country: "India",
    street: "Old Manali Road",
    city: "Manali",
    state: "Himachal Pradesh",
    pincode: 175131,
    amenities: ["wifi", "heater", "parking"],
    safetyItems: ["first aid kit"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493049/wanderStay_DEV/optimized-seed/wp-55.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-55",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493050/wanderStay_DEV/optimized-seed/wp-56.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-56",
      category: "additional"
    }]
  },
  {
    title: "Budget Lodge near Mall Road Shimla",
    description: "A simple and budget-friendly lodge located near Shimla’s Mall Road, offering easy access to shops and restaurants. The rooms are clean and comfortable, with basic heating facilities to keep you warm during cold nights. Guests can step out to enjoy scenic views of the hills and explore nearby attractions. Perfect for solo travelers and couples, this stay provides convenience and affordability without compromising comfort.",
    propertyType: "Hotel",
    roomType: "Private room",
    guest: 2,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    price: 1500,
    country: "India",
    street: "Mall Road",
    city: "Shimla",
    state: "Himachal Pradesh",
    pincode: 171001,
    amenities: ["wifi", "heater"],
    safetyItems: ["smoke alarm"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493052/wanderStay_DEV/optimized-seed/wp-57.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-57",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493053/wanderStay_DEV/optimized-seed/wp-58.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-58",
      category: "additional"
    }]
  },
  {
    title: "Lake View Cabin in Nainital Hills",
    description: "Enjoy breathtaking views of Nainital Lake from this charming wooden cabin nestled in the hills. The cabin offers a warm and inviting atmosphere with rustic interiors and large windows overlooking the valley. Guests can relax on the balcony with a cup of tea and soak in the peaceful surroundings. Ideal for couples, this property combines comfort with natural beauty, making it a perfect getaway.",
    propertyType: "House",
    roomType: "Entire place",
    guest: 2,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    price: 3800,
    country: "India",
    street: "Ayarpata Hills",
    city: "Nainital",
    state: "Uttarakhand",
    pincode: 263002,
    amenities: ["wifi", "heater", "parking"],
    safetyItems: ["fire extinguisher"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493054/wanderStay_DEV/optimized-seed/wp-59.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-59",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493055/wanderStay_DEV/optimized-seed/wp-60.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-60",
      category: "additional"
    }]
  },
  {
    title: "Luxury Villa with Valley View in Mussoorie",
    description: "This luxurious villa in Mussoorie offers panoramic views of the valley and surrounding mountains. The property features spacious rooms, modern amenities, and a large terrace perfect for enjoying sunsets. Guests can experience cool mountain air and peaceful surroundings while staying close to popular attractions. Ideal for families and groups, the villa provides a perfect blend of comfort and scenic beauty.",
    propertyType: "Villa",
    roomType: "Entire place",
    guest: 8,
    bedroom: 4,
    bed: 4,
    bathroom: 4,
    price: 9500,
    country: "India",
    street: "Camel Back Road",
    city: "Mussoorie",
    state: "Uttarakhand",
    pincode: 248179,
    amenities: ["wifi", "heater", "parking", "kitchen"],
    safetyItems: ["fire extinguisher", "first aid kit"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493056/wanderStay_DEV/optimized-seed/wp-61.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-61",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493058/wanderStay_DEV/optimized-seed/wp-62.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-62",
      category: "additional"
    }]
  },
  {
    title: "Cozy Pine Cabin in Shimla",
    description: "Surrounded by tall pine trees, this cozy cabin offers a serene escape in Shimla. The wooden interiors and warm lighting create a welcoming atmosphere, perfect for chilly evenings. Guests can enjoy peaceful mornings with mountain views and explore nearby walking trails. Ideal for couples and solo travelers, this cabin is a perfect retreat into nature.",
    propertyType: "House",
    roomType: "Entire place",
    guest: 2,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    price: 3200,
    country: "India",
    street: "Mashobra Road",
    city: "Shimla",
    state: "Himachal Pradesh",
    pincode: 171007,
    amenities: ["wifi", "heater"],
    safetyItems: ["first aid kit"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493059/wanderStay_DEV/optimized-seed/wp-63.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-63",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493061/wanderStay_DEV/optimized-seed/wp-64.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-64",
      category: "additional"
    }]
  },

  {
    title: "Hilltop Wooden Cabin in Manali",
    description: "Perched on a quiet hillside, this wooden cabin offers breathtaking views of snow-covered mountains and dense forests. The interiors are warm and cozy, perfect for chilly evenings. Guests can relax on the balcony with hot tea while enjoying fresh mountain air. Ideal for couples seeking a peaceful retreat surrounded by nature.",
    propertyType: "House",
    roomType: "Entire place",
    guest: 2,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    price: 4200,
    country: "India",
    street: "Naggar Road",
    city: "Manali",
    state: "Himachal Pradesh",
    pincode: 175130,
    amenities: ["wifi", "heater", "parking"],
    safetyItems: ["first aid kit"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493062/wanderStay_DEV/optimized-seed/wp-65.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-65",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493064/wanderStay_DEV/optimized-seed/wp-66.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-66",
      category: "additional"
    }]
  },
  {
    title: "Budget Stay near Solang Valley",
    description: "A simple lodge near Solang Valley offering easy access to snow activities and scenic views. The room is clean and comfortable with basic heating to keep you warm. Perfect for budget travelers looking to explore Manali’s natural beauty without spending much.",
    propertyType: "Hotel",
    roomType: "Private room",
    guest: 2,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    price: 1500,
    country: "India",
    street: "Solang Road",
    city: "Manali",
    state: "Himachal Pradesh",
    pincode: 175131,
    amenities: ["wifi", "heater"],
    safetyItems: ["smoke alarm"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493065/wanderStay_DEV/optimized-seed/wp-67.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-67",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493066/wanderStay_DEV/optimized-seed/wp-68.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-68",
      category: "additional"
    }]
  },
  {
    title: "Valley View Apartment in Shimla",
    description: "This cozy apartment offers stunning valley views with misty mornings and cool breezes. The space is well-furnished with a comfortable living area and kitchen. Guests can enjoy peaceful surroundings while being close to Shimla’s main attractions.",
    propertyType: "Apartment",
    roomType: "Entire place",
    guest: 4,
    bedroom: 2,
    bed: 2,
    bathroom: 1,
    price: 3800,
    country: "India",
    street: "Kufri Road",
    city: "Shimla",
    state: "Himachal Pradesh",
    pincode: 171012,
    amenities: ["wifi", "heater", "kitchen"],
    safetyItems: ["fire extinguisher"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493068/wanderStay_DEV/optimized-seed/wp-69.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-69",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493069/wanderStay_DEV/optimized-seed/wp-70.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-70",
      category: "additional"
    }]
  },
  {
    title: "Pine Forest Cottage in Nainital",
    description: "Nestled among tall pine trees, this cottage offers a calm escape with fresh air and scenic views. The interiors are warm and welcoming, making it ideal for relaxing during cold evenings. Guests can enjoy nature walks and quiet surroundings.",
    propertyType: "House",
    roomType: "Entire place",
    guest: 3,
    bedroom: 1,
    bed: 2,
    bathroom: 1,
    price: 3500,
    country: "India",
    street: "Pangot Road",
    city: "Nainital",
    state: "Uttarakhand",
    pincode: 263001,
    amenities: ["wifi", "heater", "parking"],
    safetyItems: ["first aid kit"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493071/wanderStay_DEV/optimized-seed/wp-71.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-71",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493072/wanderStay_DEV/optimized-seed/wp-72.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-72",
      category: "additional"
    }]
  },
  {
    title: "Luxury Villa with Snow Peaks in Mussoorie",
    description: "Enjoy a premium stay in this villa offering panoramic views of snow peaks and valleys. The interiors are modern with spacious rooms and a large terrace. Perfect for families, this property combines luxury with serene mountain vibes.",
    propertyType: "Villa",
    roomType: "Entire place",
    guest: 8,
    bedroom: 4,
    bed: 4,
    bathroom: 4,
    price: 9000,
    country: "India",
    street: "Landour Road",
    city: "Mussoorie",
    state: "Uttarakhand",
    pincode: 248179,
    amenities: ["wifi", "heater", "parking", "kitchen"],
    safetyItems: ["fire extinguisher", "first aid kit"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493073/wanderStay_DEV/optimized-seed/wp-73.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-73",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493074/wanderStay_DEV/optimized-seed/wp-74.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-74",
      category: "additional"
    }]
  },

  {
    title: "Backwater Houseboat Stay in Alleppey",
    description: "Experience the serene beauty of Kerala’s backwaters in this traditional houseboat. Surrounded by calm waters and lush greenery, the stay offers a peaceful escape with scenic views all around. Guests can enjoy freshly prepared meals and relax on the deck while watching village life pass by. Ideal for couples and families seeking a unique nature retreat.",
    propertyType: "House",
    roomType: "Entire place",
    guest: 4,
    bedroom: 2,
    bed: 2,
    bathroom: 2,
    price: 6500,
    country: "India",
    street: "Punnamada Lake",
    city: "Alleppey",
    state: "Kerala",
    pincode: 688013,
    amenities: ["wifi", "breakfast", "scenic views"],
    safetyItems: ["first aid kit"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493076/wanderStay_DEV/optimized-seed/wp-75.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-75",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493077/wanderStay_DEV/optimized-seed/wp-76.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-76",
      category: "additional"
    }]
  },
  {
    title: "Eco Nature Resort in Coorg Hills",
    description: "Located amidst coffee plantations, this eco resort offers a refreshing stay surrounded by nature. The cottages are simple yet comfortable, with large windows that bring in cool mountain air. Guests can enjoy guided walks, local cuisine, and peaceful mornings with scenic valley views.",
    propertyType: "Hotel",
    roomType: "Private room",
    guest: 2,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    price: 4200,
    country: "India",
    street: "Madikeri Road",
    city: "Coorg",
    state: "Karnataka",
    pincode: 571201,
    amenities: ["wifi", "breakfast", "parking", "scenic views"],
    safetyItems: ["fire extinguisher"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493079/wanderStay_DEV/optimized-seed/wp-77.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-77",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493080/wanderStay_DEV/optimized-seed/wp-78.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-78",
      category: "additional"
    }]
  },
  {
    title: "Luxury Pool Villa in Ooty",
    description: "This elegant villa in Ooty offers a luxurious stay with beautiful garden and hill views. The property features spacious rooms, a private pool, and modern interiors. Guests can unwind in the peaceful surroundings and enjoy cool weather throughout the year. Perfect for families and groups seeking comfort and privacy.",
    propertyType: "Villa",
    roomType: "Entire place",
    guest: 6,
    bedroom: 3,
    bed: 3,
    bathroom: 3,
    price: 9000,
    country: "India",
    street: "Fern Hill Road",
    city: "Ooty",
    state: "Tamil Nadu",
    pincode: 643004,
    amenities: ["wifi", "pool", "breakfast", "parking"],
    safetyItems: ["fire extinguisher", "first aid kit"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493082/wanderStay_DEV/optimized-seed/wp-79.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-79",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493083/wanderStay_DEV/optimized-seed/wp-80.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-80",
      category: "additional"
    }]
  },
  {
    title: "Tea Garden Cottage in Ooty",
    description: "Stay amidst lush tea gardens in this cozy cottage offering stunning views of rolling hills. The space is warm and inviting, perfect for enjoying cool evenings with a cup of tea. Guests can explore nearby plantations and enjoy peaceful surroundings away from the crowds.",
    propertyType: "House",
    roomType: "Entire place",
    guest: 3,
    bedroom: 1,
    bed: 2,
    bathroom: 1,
    price: 3500,
    country: "India",
    street: "Coonoor Road",
    city: "Ooty",
    state: "Tamil Nadu",
    pincode: 643001,
    amenities: ["wifi", "breakfast", "scenic views"],
    safetyItems: ["first aid kit"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493084/wanderStay_DEV/optimized-seed/wp-81.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-81",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493085/wanderStay_DEV/optimized-seed/wp-82.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-82",
      category: "additional"
    }]
  },
  {
    title: "Budget Homestay in Wayanad",
    description: "This budget-friendly homestay in Wayanad offers a comfortable stay surrounded by forests and hills. The rooms are simple and clean, with access to local homemade meals. Guests can enjoy nature walks and relax in a calm environment.",
    propertyType: "House",
    roomType: "Private room",
    guest: 2,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    price: 1800,
    country: "India",
    street: "Kalpetta Road",
    city: "Wayanad",
    state: "Kerala",
    pincode: 673121,
    amenities: ["wifi", "breakfast", "parking"],
    safetyItems: ["smoke alarm"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493087/wanderStay_DEV/optimized-seed/wp-83.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-83",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493088/wanderStay_DEV/optimized-seed/wp-84.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-84",
      category: "additional"
    }]
  },


  // STATE
  {
    title: "Serene Backwater Villa in Kumarakom",
    description: "Overlooking tranquil backwaters, this villa in Kumarakom offers a peaceful stay surrounded by coconut trees and gentle breezes. Guests can relax by the private pool, enjoy traditional Kerala breakfast, and watch houseboats drift by. The interiors are airy and designed for comfort, making it ideal for families or couples seeking calm nature views.",
    propertyType: "Villa",
    roomType: "Entire place",
    guest: 5,
    bedroom: 2,
    bed: 3,
    bathroom: 2,
    price: 7800,
    country: "India",
    street: "Kumarakom Lake Road",
    city: "Kumarakom",
    state: "Kerala",
    pincode: 686563,
    amenities: ["wifi", "pool", "breakfast", "scenic views", "parking"],
    safetyItems: ["fire extinguisher", "first aid kit"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493089/wanderStay_DEV/optimized-seed/wp-85.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-85",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493091/wanderStay_DEV/optimized-seed/wp-86.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-86",
      category: "additional"
    }]
  },
  {
    title: "Peaceful Eco Stay in Madikeri Coffee Estate",
    description: "Nestled within lush coffee plantations, this eco stay offers a refreshing break in Coorg. Wake up to birdsong and misty hills while enjoying locally sourced breakfast. The rooms are simple yet cozy, with large windows that open to scenic green views. Perfect for travelers who enjoy nature and quiet surroundings.",
    propertyType: "House",
    roomType: "Private room",
    guest: 2,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    price: 3000,
    country: "India",
    street: "Coffee Estate Road",
    city: "Madikeri",
    state: "Karnataka",
    pincode: 571201,
    amenities: ["wifi", "breakfast", "scenic views", "parking"],
    safetyItems: ["first aid kit"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493092/wanderStay_DEV/optimized-seed/wp-87.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-87",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493093/wanderStay_DEV/optimized-seed/wp-88.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-88",
      category: "additional"
    }]
  },
  {
    title: "Luxury Backwater Resort Room in Alleppey",
    description: "Enjoy a comfortable stay at this luxury resort in Alleppey with stunning backwater views. The room is spacious and well-furnished, offering modern amenities and a peaceful environment. Guests can take a dip in the pool, savor local breakfast, and unwind in nature’s calm setting.",
    propertyType: "Hotel",
    roomType: "Private room",
    guest: 3,
    bedroom: 1,
    bed: 2,
    bathroom: 1,
    price: 6500,
    country: "India",
    street: "Nehru Trophy Road",
    city: "Alleppey",
    state: "Kerala",
    pincode: 688011,
    amenities: ["wifi", "pool", "breakfast", "scenic views"],
    safetyItems: ["fire extinguisher"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493094/wanderStay_DEV/optimized-seed/wp-89.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-89",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493095/wanderStay_DEV/optimized-seed/wp-90.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-90",
      category: "additional"
    }]
  },
  {
    title: "Rustic Riverside Cottage in Wayanad",
    description: "Located near a gentle stream, this rustic cottage offers a peaceful escape in Wayanad. Surrounded by greenery, the stay provides fresh air, scenic views, and a calm environment. Guests can relax outdoors or enjoy a simple homemade breakfast. Ideal for those seeking a nature retreat.",
    propertyType: "House",
    roomType: "Entire place",
    guest: 4,
    bedroom: 2,
    bed: 2,
    bathroom: 1,
    price: 2800,
    country: "India",
    street: "Meppadi Road",
    city: "Wayanad",
    state: "Kerala",
    pincode: 673577,
    amenities: ["wifi", "breakfast", "scenic views", "parking"],
    safetyItems: ["first aid kit"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493097/wanderStay_DEV/optimized-seed/wp-91.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-91",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493098/wanderStay_DEV/optimized-seed/wp-92.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-92",
      category: "additional"
    }]
  },
  {
    title: "Premium Pool Villa in Virajpet Coorg",
    description: "This premium villa in Virajpet offers a luxurious stay surrounded by hills and plantations. Featuring a private pool, spacious interiors, and scenic views, it is perfect for families or groups. Guests can relax in privacy while enjoying fresh breakfast and cool weather.",
    propertyType: "Villa",
    roomType: "Entire place",
    guest: 8,
    bedroom: 4,
    bed: 4,
    bathroom: 4,
    price: 9200,
    country: "India",
    street: "Virajpet Main Road",
    city: "Coorg",
    state: "Karnataka",
    pincode: 571218,
    amenities: ["wifi", "pool", "breakfast", "scenic views", "parking"],
    safetyItems: ["fire extinguisher", "first aid kit"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493099/wanderStay_DEV/optimized-seed/wp-93.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-93",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493101/wanderStay_DEV/optimized-seed/wp-94.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-94",
      category: "additional"
    }]
  },


  {
    title: "Affordable Room near New Delhi Railway Station",
    description: "A simple and budget-friendly stay ideal for students and solo travelers. Located close to New Delhi Railway Station, this room offers quick access to transport and local markets. The space is basic but clean, with a comfortable bed and essential amenities. Perfect for short stays or transit visits, guests can enjoy nearby street food and shops while staying within budget.",
    propertyType: "Hotel",
    roomType: "Private room",
    guest: 2,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    price: 1200,
    country: "India",
    street: "Paharganj Main Bazaar",
    city: "Delhi",
    state: "Delhi",
    pincode: 110055,
    amenities: ["wifi", "fan"],
    safetyItems: ["smoke alarm"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493102/wanderStay_DEV/optimized-seed/wp-95.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-95",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493103/wanderStay_DEV/optimized-seed/wp-96.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-96",
      category: "additional"
    }]
  },
  {
    title: "Budget Lodge near Mumbai CST",
    description: "This economical lodge near Chhatrapati Shivaji Terminus is perfect for quick stays. The room offers a basic setup with a fan, clean bedding, and access to shared facilities. Its central location makes it easy to explore nearby tourist spots and local eateries. Ideal for solo travelers looking for convenience at a low price.",
    propertyType: "Hotel",
    roomType: "Shared room",
    guest: 1,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    price: 900,
    country: "India",
    street: "DN Road",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: 400001,
    amenities: ["wifi", "fan"],
    safetyItems: ["smoke alarm"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493104/wanderStay_DEV/optimized-seed/wp-97.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-97",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493105/wanderStay_DEV/optimized-seed/wp-98.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-98",
      category: "additional"
    }]
  },
  {
    title: "Simple Stay near Jaipur Railway Station",
    description: "A neat and affordable room located near Jaipur Railway Station, perfect for travelers on a budget. The room includes basic furnishings, a fan, and WiFi. Guests can easily explore nearby markets and tourist spots like Hawa Mahal. Ideal for short stays with easy transport access.",
    propertyType: "Hotel",
    roomType: "Private room",
    guest: 2,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    price: 1100,
    country: "India",
    street: "Station Road",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: 302006,
    amenities: ["wifi", "fan"],
    safetyItems: ["first aid kit"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493106/wanderStay_DEV/optimized-seed/wp-99.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-99",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493107/wanderStay_DEV/optimized-seed/wp-100.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-100",
      category: "additional"
    }]
  },
  {
    title: "Low Cost Room near Varanasi Ghats",
    description: "Stay close to the famous ghats of Varanasi in this budget-friendly room. The accommodation is simple and ideal for solo travelers seeking spiritual experiences. With basic amenities and a peaceful setting, guests can explore temples and local markets easily.",
    propertyType: "House",
    roomType: "Private room",
    guest: 1,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    price: 1000,
    country: "India",
    street: "Dashashwamedh Road",
    city: "Varanasi",
    state: "Uttar Pradesh",
    pincode: 221001,
    amenities: ["wifi", "fan"],
    safetyItems: ["first aid kit"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493108/wanderStay_DEV/optimized-seed/wp-101.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-101",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493110/wanderStay_DEV/optimized-seed/wp-102.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-102",
      category: "additional"
    }]
  },
  {
    title: "Student Friendly Stay near Bangalore Station",
    description: "This affordable stay near Bangalore City Railway Station is perfect for students and solo visitors. The room is basic but clean, with essential amenities like WiFi and fan. Guests can easily access public transport and nearby eateries.",
    propertyType: "Apartment",
    roomType: "Shared room",
    guest: 1,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    price: 950,
    country: "India",
    street: "Majestic Area",
    city: "Bangalore",
    state: "Karnataka",
    pincode: 560009,
    amenities: ["wifi", "fan"],
    safetyItems: ["smoke alarm"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493111/wanderStay_DEV/optimized-seed/wp-103.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-103",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493112/wanderStay_DEV/optimized-seed/wp-104.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-104",
      category: "additional"
    }]
  },

  {
    title: "Basic Room near Howrah Station",
    description: "A no-frills stay located close to Howrah Railway Station, perfect for students and solo travelers on a budget. The room is simple with a clean bed, fan, and basic WiFi. Guests can easily catch trains or explore Kolkata’s nearby markets and eateries. Ideal for short transit stays.",
    propertyType: "Hotel",
    roomType: "Private room",
    guest: 2,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    price: 1000,
    country: "India",
    street: "Howrah Station Road",
    city: "Kolkata",
    state: "West Bengal",
    pincode: 711101,
    amenities: ["wifi", "fan"],
    safetyItems: ["smoke alarm"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493113/wanderStay_DEV/optimized-seed/wp-105.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-105",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493114/wanderStay_DEV/optimized-seed/wp-106.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-106",
      category: "additional"
    }]
  },
  {
    title: "Budget Stay near Chennai Central",
    description: "Conveniently located near Chennai Central Railway Station, this budget stay is ideal for quick visits. The room is clean and basic, offering a fan, bed, and WiFi. Guests can easily access transport and nearby food joints, making it perfect for solo travelers.",
    propertyType: "Hotel",
    roomType: "Private room",
    guest: 2,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    price: 1100,
    country: "India",
    street: "Wall Tax Road",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: 600003,
    amenities: ["wifi", "fan"],
    safetyItems: ["first aid kit"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493116/wanderStay_DEV/optimized-seed/wp-107.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-107",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493117/wanderStay_DEV/optimized-seed/wp-108.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-108",
      category: "additional"
    }]
  },
  {
    title: "Simple Lodge near Secunderabad Station",
    description: "A practical lodge offering basic comfort near Secunderabad Railway Station. The room includes essential facilities like a bed, fan, and WiFi. Guests can explore nearby shops and restaurants easily. Ideal for budget-conscious travelers.",
    propertyType: "Hotel",
    roomType: "Shared room",
    guest: 1,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    price: 900,
    country: "India",
    street: "Station Road",
    city: "Hyderabad",
    state: "Telangana",
    pincode: 500003,
    amenities: ["wifi", "fan"],
    safetyItems: ["smoke alarm"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493118/wanderStay_DEV/optimized-seed/wp-109.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-109",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493120/wanderStay_DEV/optimized-seed/wp-110.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-110",
      category: "additional"
    }]
  },
  {
    title: "Affordable Room near Amritsar Golden Temple",
    description: "Stay close to the Golden Temple in this affordable and clean room. Ideal for pilgrims and solo travelers, the space offers basic amenities like WiFi and fan. The location allows easy access to local markets and food spots.",
    propertyType: "House",
    roomType: "Private room",
    guest: 2,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    price: 1200,
    country: "India",
    street: "Heritage Street",
    city: "Amritsar",
    state: "Punjab",
    pincode: 143001,
    amenities: ["wifi", "fan"],
    safetyItems: ["first aid kit"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493121/wanderStay_DEV/optimized-seed/wp-111.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-111",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493122/wanderStay_DEV/optimized-seed/wp-112.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-112",
      category: "additional"
    }]
  },
  {
    title: "Low Cost Stay near Pune Station",
    description: "This low-cost stay near Pune Railway Station is perfect for students and solo travelers. The room is simple but clean with a fan and WiFi. Guests can explore nearby markets and enjoy easy connectivity.",
    propertyType: "Apartment",
    roomType: "Shared room",
    guest: 1,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    price: 950,
    country: "India",
    street: "Station Road",
    city: "Pune",
    state: "Maharashtra",
    pincode: 411001,
    amenities: ["wifi", "fan"],
    safetyItems: ["smoke alarm"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493124/wanderStay_DEV/optimized-seed/wp-113.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-113",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493125/wanderStay_DEV/optimized-seed/wp-114.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-114",
      category: "additional"
    }]
  },

  {
    title: "Snow Peak View Cottage in Manali",
    description: "Wake up to breathtaking views of snow-covered peaks in this cozy cottage tucked away in Manali. The wooden interiors and warm bedding create a comforting vibe during chilly nights. Guests can sip hot tea on the balcony while enjoying fresh mountain air and peaceful surroundings. Ideal for couples and small families looking to unwind in nature.",
    propertyType: "House",
    roomType: "Entire place",
    guest: 4,
    bedroom: 2,
    bed: 2,
    bathroom: 1,
    price: 4800,
    country: "India",
    street: "Hadimba Road",
    city: "Manali",
    state: "Himachal Pradesh",
    pincode: 175131,
    amenities: ["wifi", "heater", "parking", "scenic views"],
    safetyItems: ["first aid kit"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493126/wanderStay_DEV/optimized-seed/wp-115.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-115",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493127/wanderStay_DEV/optimized-seed/wp-116.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-116",
      category: "additional"
    }]
  },
  {
    title: "Budget Lodge near Mall Road Shimla",
    description: "A simple and budget-friendly lodge located close to Mall Road, Shimla. The rooms are neat with basic heating arrangements to keep you warm in the cold weather. Guests can easily explore nearby cafes, shops, and viewpoints. Perfect for solo travelers and students looking for an affordable stay in the hills.",
    propertyType: "Hotel",
    roomType: "Private room",
    guest: 2,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    price: 1500,
    country: "India",
    street: "Mall Road",
    city: "Shimla",
    state: "Himachal Pradesh",
    pincode: 171001,
    amenities: ["wifi", "heater"],
    safetyItems: ["smoke alarm"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493128/wanderStay_DEV/optimized-seed/wp-117.png",
      filename: "wanderStay_DEV/optimized-seed/wp-117",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493129/wanderStay_DEV/optimized-seed/wp-118.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-118",
      category: "additional"
    }]
  },
  {
    title: "Valley View Cabin in Mussoorie Hills",
    description: "Enjoy stunning valley views from this wooden cabin in Mussoorie. Surrounded by pine forests and cool mountain air, the stay offers a peaceful escape from city life. The interiors are warm and rustic, making it perfect for relaxing evenings. Ideal for couples seeking a romantic getaway in the hills.",
    propertyType: "House",
    roomType: "Entire place",
    guest: 2,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    price: 4200,
    country: "India",
    street: "Landour Road",
    city: "Mussoorie",
    state: "Uttarakhand",
    pincode: 248179,
    amenities: ["wifi", "heater", "scenic views"],
    safetyItems: ["first aid kit"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493131/wanderStay_DEV/optimized-seed/wp-119.webp",
      filename: "wanderStay_DEV/optimized-seed/wp-119",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493132/wanderStay_DEV/optimized-seed/wp-120.webp",
      filename: "wanderStay_DEV/optimized-seed/wp-120",
      category: "additional"
    }]
  },
  {
    title: "Lake View Budget Stay in Nainital",
    description: "This budget-friendly stay offers partial views of Nainital Lake along with a cozy and simple room setup. Guests can enjoy cool weather and easy access to the main town area. The stay is ideal for solo travelers or students looking to explore the hills without spending much.",
    propertyType: "Hotel",
    roomType: "Private room",
    guest: 2,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    price: 1800,
    country: "India",
    street: "Mallital Road",
    city: "Nainital",
    state: "Uttarakhand",
    pincode: 263001,
    amenities: ["wifi", "heater"],
    safetyItems: ["smoke alarm"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493133/wanderStay_DEV/optimized-seed/wp-122.jpg",
      filename: "wanderStay_DEV/optimized-seed/wp-122",
      category: "additional"
    }]
  },
  {
    title: "Luxury Mountain Villa in Shimla",
    description: "This spacious villa offers panoramic views of the surrounding mountains and valleys. Designed with modern interiors and warm lighting, it provides a luxurious yet cozy experience. Guests can relax on the terrace, enjoy cool breezes, and spend quality time with family in a peaceful environment.",
    propertyType: "Villa",
    roomType: "Entire place",
    guest: 8,
    bedroom: 4,
    bed: 4,
    bathroom: 3,
    price: 9500,
    country: "India",
    street: "Kufri Road",
    city: "Shimla",
    state: "Himachal Pradesh",
    pincode: 171012,
    amenities: ["wifi", "heater", "parking", "scenic views"],
    safetyItems: ["fire extinguisher", "first aid kit"],
    images: [{
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493134/wanderStay_DEV/optimized-seed/wp-123.webp",
      filename: "wanderStay_DEV/optimized-seed/wp-123",
      category: "additional"
    },
    {
      url: "https://res.cloudinary.com/dtaewoa2u/image/upload/v1782493135/wanderStay_DEV/optimized-seed/wp-124.webp",
      filename: "wanderStay_DEV/optimized-seed/wp-124",
      category: "additional"
    }]
  }









];
module.exports = { data: sampleListings };
