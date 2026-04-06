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
      url: "https://images.unsplash.com/photo-1691677749553-1b6c76821339?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "villa_goa_1",
      category: "additional"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1661913412680-c274b6fea096?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "villa_goa_2",
      category: "additional"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1661963080918-263cf79261f9?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "villa_goa_3",
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
      url: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "mumbai_apt_1",
      category: "additional"
    },
    {
      url: "https://housing-images.n7net.in/01c16c28/704ef88e1fd70b2226d047e7d1a77cb7/v0/medium/1.5_bhk_apartment-for-rent-andheri_west-Mumbai-bedroom.jpg",
      filename: "mumbai_apt_2",
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
      url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/27207806.jpg?k=c855ce4ef9c5463151365cdb867d41522f77456d35d9a5ea4940aa1d38e3d258&o=",
      filename: "villa_candolim_1",
      category: "additional"
    },
    {
      url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/27207763.jpg?k=28323a31fd795c970f26fe261a641d97e7321f27bc4002c9c32bfaa05fdcecd7&o=",
      filename: "villa_candolim_2",
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
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "mumbai_studio_2",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1630699375019-c334927264df?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "mumbai_studio_1",
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
      url: "https://images.unsplash.com/photo-1648367819123-19d2ffe43f3a?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "goa_heritage_1",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "goa_heritage_2",
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
      url: "https://images.unsplash.com/photo-1751104902006-968539a64c3b?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "powai_apartment_1",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "powai_apartment_2",
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
      url: "https://images.unsplash.com/photo-1543489822-c49534f3271f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjB2aWxsYXxlbnwwfHwwfHx8MA%3D%3D",
      filename: "anjuna_villa_2",
      category: "additional"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1682377521697-bc598b52b08a?q=80&w=915&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "anjuna_villa_1",
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
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "baga_villa_1",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "baga_villa_2",
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
      url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",
      filename: "bandra_room_1",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1600494448868-9fbd1ac2d9f5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "bandra_room_2",
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
      url: "https://images.unsplash.com/photo-1580216643062-cf460548a66a?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "goregaon_apt_1",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "goregaon_apt_2",
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
      url: "https://plus.unsplash.com/premium_photo-1682377521697-bc598b52b08a?q=80&w=915&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "siolim_villa_1",
      category: "additional"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1682377521720-3a43955c8329?q=80&w=866&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "siolim_villa_2",
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
      url: "https://www.pajasaapartments.com/wp-content/uploads/2019/04/Studio-Service-Apartment-Andheri-Mumbai.jpeg",
      filename: "andheri_studio_1",
      category: "additional"
    },
    {
      url: "https://www.pajasaapartments.com/wp-content/uploads/2019/04/Studio-Serviced-Apartment-in-Andheri-Mumbai.jpeg",
      filename: "andheri_studio_2",
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
      url: "https://images.unsplash.com/photo-1510069551606-f9ec0a62fe28?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "vagator_cottage_1",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1580953546435-96ba8e1415da?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "vagator_cottage_2",
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
      url: "https://plus.unsplash.com/premium_photo-1661963542944-0d1fc8e66f83?q=80&w=830&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "worli_apt_1",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1647962431451-d0fdaf1cf21c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "worli_apt_2",
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
      url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "karolbagh_room",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "karolbagh_room_2",
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
      url: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "gk_apartment",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "gk_apartment_2",
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
      url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "jaipur_haveli",
      category: "additional"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "jaipur_haveli_2",
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
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "amer_villa",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1602774895672-b553538bceb9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "amer_villa_2",
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
      url: "https://plus.unsplash.com/premium_photo-1670076505419-99468d952c61?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "paharganj_hostel",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1560448070-8b02c1d9a7e4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "paharganj_hostel_2",
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
      url: "https://plus.unsplash.com/premium_photo-1671269705771-1ae9b3162118?q=80&w=625&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "lajpat_room_1",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "lajpat_room_2",
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
      url: "https://plus.unsplash.com/premium_photo-1678963247798-0944cf6ba34d?q=80&w=439&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "dwarka_apt_1",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1631510390389-c1e4fb20ff31?q=80&w=792&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "dwarka_apt_2",
      category: "additional"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1764500048252-7bff86b7b09c?q=80&w=445&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "dwarka_apt_3",
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
      url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "cp_hotel_1",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1617228069096-4638a7ffc906?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "cp_hotel_2",
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
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "bani_park_1",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "bani_park_2",
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
      url: "https://plus.unsplash.com/premium_photo-1661954372617-15780178eb2e?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "civil_villa_1",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "civil_villa_2",
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
      url: "https://images.unsplash.com/photo-1673687782286-674e29c9bf9e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "saket_shared_1",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1600488999585-e4364713b90a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "saket_shared_2",
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
      url: "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "raja_park_1",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "raja_park_2",
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
      url: "https://images.unsplash.com/photo-1515496281361-241a540151a5?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1704241723786-b0dac5f1fcf5?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
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
      url: "https://images.unsplash.com/photo-1597256817041-0c75c0633658?q=80&w=849&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
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
      url: "https://plus.unsplash.com/premium_photo-1675716926733-469add3ea1c0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1725408069039-17853912f8ce?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
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
      url: "https://images.unsplash.com/photo-1556630279-0ecfac70eaf2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1722680738736-66a4cdc08923?q=80&w=791&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
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
      url: "https://images.unsplash.com/photo-1698970105874-3b67848fb913?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1668196796572-36e355bd719a?q=80&w=775&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
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
      url: "https://images.unsplash.com/photo-1677820915366-27d887c9b872?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2xkJTIwbWFuYWxpfGVufDB8fDB8fHww",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1672859772739-1879813239eb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
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
      url: "https://images.unsplash.com/photo-1651475599186-7283220effdd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1711943729004-e392d32b46c8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
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
      url: "https://images.unsplash.com/photo-1695272811289-8a44997be013?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1726090401458-7abb00f7450c?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
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
      url: "https://images.unsplash.com/photo-1739662088066-2d0f468f96e7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1594037666209-211d7c8c257d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
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
      url: "https://plus.unsplash.com/premium_photo-1734549548001-8b351b111dc9?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1734549547856-068dadb976eb?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
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
      url: "https://plus.unsplash.com/premium_photo-1694475205503-d6c6a71f03bc?q=80&w=901&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1697729442042-c071ef0415b0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
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
      url: "https://images.unsplash.com/photo-1570565151086-cda88c54270f?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1557973350-f61cc5d1a5ff?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
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
      url: "https://plus.unsplash.com/premium_photo-1682377521724-ececd24a83b4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1687960117069-567a456fe5f3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
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
      url: "https://images.unsplash.com/photo-1562182384-08115de5ee97?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1674498260932-6f7d8eed6d9f?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
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
      url: "https://plus.unsplash.com/premium_photo-1733493684000-9e32eaf89c60?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1568495248636-6432b97bd949?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
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
      url: "https://images.unsplash.com/photo-1637946094815-291767647026?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1686090449403-43c24a6a4f79?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
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
      url: "https://images.unsplash.com/photo-1641232458416-feace752b346?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
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
      url: "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1687960116880-086e6fb4b404?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
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
      url: "https://images.unsplash.com/photo-1570127828934-c60aa3e1e5af?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1686090448517-2f692cc45187?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
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
      url: "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1682377521552-49d35c2c9704?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
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
      url: "https://images.unsplash.com/photo-1619810230359-b2c2f61c49cd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1675615949691-342910bfaded?q=80&w=392&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
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
      url: "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1660697261323-e703308416e3?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
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
      url: "https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1560448075-bb485b067938?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
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
      url: "https://images.unsplash.com/photo-1706186839147-0d708602587b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=857&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
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
      url: "https://images.unsplash.com/photo-1658595148963-13b7da6dcd6d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1643949719317-4342d8d4031e?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
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
      url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1587527901949-ab0341697c1e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
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
      url: "https://images.unsplash.com/photo-1572716903354-232e0a5f74b2?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
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
      url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1681980021035-5db5823c974b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
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
      url: "https://images.unsplash.com/photo-1663811397207-418a92396ad5?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://images.unsplash.com/photo-1724582586508-8f06117dc979?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
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
      url: "https://images.unsplash.com/photo-1686240202140-d7dd0ccf684f?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1675537843200-78c1a0ea1736?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
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
      url: "https://images.unsplash.com/photo-1677820915366-27d887c9b872?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1684445035187-c4bc7c96bc5d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImage",
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
      url: "https://lh3.googleusercontent.com/p/AF1QipOzX7FoT6PCipVBUPUkxLJpH5GMIy3VK9WtAuiw=w252-h251-k-no",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://lh6.googleusercontent.com/proxy/SHZmbqChTpQiJxrNu-b10SxtQKdoqYJAOzI5w_7-ET3xisjFaUVKz4_DuQIY9fGm3rYPVAZJkNjRcc4coRRY9SzOIUJqBM3zJgJSkN1zCWtvKrQkaYZB6GlPY8HEkRnsOOtoL_8fL10uFs67TOT3PZuLYRls9Q=w253-h190-k-no",
      filename: "listingImage",
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
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1578187887650554190/original/62c8c018-9008-406f-a758-d79234eadd26.jpeg?im_w=960",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1578187887650554190/original/26de1e2e-db13-42ce-a4b8-9ea1f4f7caef.jpeg?im_w=720",
      filename: "listingImage",
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
      url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo5O1m7xMsCA7MlRkBFnvzokXszNwecEfYPadpjXn-V_9-CP9FeYU2z9rh_x7i0T9-2JyFBIxaCGlivfR_yOM2EJjpmcuAiJVSh9-TMRA-CioDzERFMsMxLJ8-X5dl4uv_laUY=w252-h504-k-no",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://lh3.googleusercontent.com/p/AF1QipO0LZU7tXX4KnDvpDv06dbIGeXBCZr7XCo3YFST=w252-h189-k-no",
      filename: "listingImage",
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
      url: "https://www.saffronstays.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2F5tgxhsqev%2Fsaffronstays-media%2Fimage%2Fupload%2F1765376823631601336%3Ftr%3Dq-40%2Cf-webp&w=640&q=75",
      filename: "listingImage",
      category: "additional"
    },
    {
      url: "https://www.saffronstays.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2F5tgxhsqev%2Fsaffronstays-media%2Fimage%2Fupload%2F1765376827998760470%3Ftr%3Dq-40%2Cf-webp&w=640&q=75",
      filename: "listingImage",
      category: "additional"
    }]
  }









];
module.exports = { data: sampleListings };