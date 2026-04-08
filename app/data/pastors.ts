// app/data/pastors.ts

import { Certificate } from "crypto";

export type Tour = {
  title: string;
  cardTitle?: string;
  subtitle?: string;
  slug: string;
  description: string;
  heroImage: string;
  heroVideo?: string;
  gallery: string[];
  overview: string[];
  included: string[];
  excluded: string[];
  reviews: string[];

  itinerary: {
    subtitle?: string;
    title: string;
    image: string;
    price?: number;
    moreDetails?: {
      item: string;
      reason: string;
    }[];
    infantPrice?: string;
    extraInfo?: string[];
    duration?: number | string;
    currency?: string;
    pickupTimes?: string[];
    returnTime?: string;
    included?: string[];
    excluded?: string[];
    highlights?: string[];
    description: string;
  }[];

  
};

export const makeSlug = (title: string) =>
  title.toLowerCase().replace(/ /g, '-');

export const pastors: Tour[] = [
  {
    title: "Experience Luxor’s legendary heritage ", 
    cardTitle: "Pst Shonibare", 
    subtitle:"Resident Pastor",
    slug: makeSlug("6 Day Egypt Desert  Oasis Tour"), 
    
    description:
      "Our Resident Pastor",
    heroImage: "/images/pastors/7.jpg",
    heroVideo: "/videos/luxor.mp4",
    gallery: ["/images/pastors/1.jpg", "/images/pastors/luxor2.jpg"],
    overview: [
  "Luxor... Where history meets the SIRI SAND TOURS family.",

  "In Luxor, every stone tells a story, and we at SIRI SAND TOURS are creating unforgettable family memories with you in the world's largest open-air museum.",

  "Your family trip to the \"City of a Hundred Gates\": Among the temples, experience the grandeur of Karnak and the magic of Luxor Temple together as a family. 📜🛕",

  "Valley of the Kings: Explore the secrets of the pharaohs and their royal tombs. 👑🏺",

  "The Magic of the Nile: Enjoy a relaxing sunset cruise on a felucca in a peaceful and warm atmosphere. ⛵🌅",

  "Hot Air Ballooning: See the city from the sky — an unforgettable adventure for all ages. 🎈🎈",

  "Deir el-Medina and Medinet Habu: Discover the beauty of authentic ancient inscriptions and vibrant temple reliefs. ⛪🕌"
],
    itinerary: [
  {
    title: "Day Tour – Karnak, Valley of the Kings, Memnon, Hatshepsut",
    image: "/images/itinerary/karnak.jpg",
    duration: "3 hrs",
      price: 75,
  currency: "€",
  pickupTimes: ["4:00 AM from Hurghada"],
  highlights: [
  "Visit Karnak Temple, Valley of the Kings, and Hatshepsut Temple",
  "Explore the most famous ancient sites in Luxor with a professional guide",
  "Enjoy lunch at a restaurant overlooking the Nile or near the temples",
  "Comfortable round-trip transfers from your hotel in Hurghada",
  "Early morning departure to make the most of your day trip"
],

included: [
  "Basic entrance tickets for Karnak, Valley of the Kings, and Hatshepsut Temple",
  "Lunch at a local restaurant",
  "Security permits for tour bus passage",
  "Pickup from Hurghada (4:00 AM – 5:30 AM depending on hotel location)",
  "Transfers to and from your hotel in Hurghada",
  "Professional tour guide in your language"
],

excluded: [
  "Drinks during lunch",
  "Special tombs entry tickets (e.g., King Tutankhamun’s tomb)",
  "Optional activities (e.g., Felucca ride or Banana Island visit)",
  "Personal expenses (souvenirs or photos)",
  "Tipping for guide or driver (optional)"
],

infantPrice: "Contact us for child pricing details",

extraInfo: [
  "Pickup time is usually between 4:00 AM – 5:30 AM depending on hotel location",
  "Tipping for the guide or driver is optional",
  "Special tombs require additional tickets"
],

moreDetails: [
  {
    item: "Departure Time",
    reason: "Pickup from Hurghada is usually between 4:00 AM – 5:30 AM (depending on hotel location)"
  },
  {
    item: "Lunch",
    reason: "Served at a restaurant overlooking the Nile or near the temples"
  },
  {
    item: "Entrance Fees",
    reason: "Includes basic tickets for Karnak, Valley of the Kings, and Hatshepsut Temple"
  },
  {
    item: "Transfers",
    reason: "Round-trip transfers from your hotel in Hurghada"
  },
  {
    item: "Tour Guide",
    reason: "Professional guide available in your language"
  },
  {
    item: "Security Permits",
    reason: "Required for tour bus passage"
  }
],

    description:
      "Visit the massive Karnak Temple complex, explore the Valley of the Kings, see the Colossi of Memnon, and admire Queen Hatshepsut’s temple.",
  },
  {
    title: "Balloon – Hot Air Balloon Ride",
    image: "/images/itinerary/balloon.jpg",
     price: 70,
  currency: "€",
  pickupTimes: ["24:00 from Hurghada"],
 highlights: [
  "Experience the thrill of soaring above fairy chimneys and rock-cut churches",
  "Fuel up with complimentary tea, coffee, and a pastry before your take-off",
  "Savor views of Cappadocia from a bird's-eye-perspective in a hot air balloon",
  "Raise a toast to your flight and watch the sunrise with a champagne in hand",
  "Commemorate your memorable experience with an individual flight certificate"
]
,
  included:[ "Flight Certificate, Water, Tea, Cpffee"],
  excluded:["Gratuities (Tipping)"], 
    infantPrice: "Not allowed for childern under 6 years old", 
    extraInfo: ["Refund Policy: Full refund for weather cancellations or 24h notice " ,"Booking Advice: Highly recommended to book 3 days in advance"],
  moreDetails: [
  {
    item: "Flight Time",
    reason: "45 minutes"
  },
  
  {
    item: "Transportation",
    reason: "Hotel/Cruise pick-up & drop-off (A/C vehicles)"
  },
  {
    item: "River Crossing",
    reason: "Speedboat transfer to the West Bank"
  },
  {
    item: "Health & Safety",
    reason: "Not suitable for pregnant women, people with heart or back problems, or wheelchair users."
  },
  {
    item: "Weather Note",
    reason: "Bring a light jacket — it can be cold in the early morning."
  }
]
,

  description:
      "Explore a spectacular setting from the sky on this hot air balloon ride over Cappadocia. Be picked up from your accommodation in Göreme before the first light of day and relax on the transfer to the launch site, a location selected by your pilot based on the day's weather conditions.Upon arrival, enjoy tea and coffee with a light pastry while the crew makes flight preparations. Get into the basket and listen as the pilot gives detailed safety instructions. Then, as the burners are fired up, slowly rise into the sky. Watch the balloon gently gain elevation as you soar above the Cappadocia scenery. Upon returning to the ground, celebrate your flight with sparkling wine or champagne. Receive a flight certificate to commemorate your experience before heading back to your hotel."

  },

 {
  title: "Nile Cruise – Luxor to Aswan",
  image: "/images/itinerary/nile-cruise.jpg",
  price: 90,
  pickupTimes: ["Depends Where You Are"],
  currency: "€",

  highlights: [
    "Covers all must-do experiences in Luxor & Aswan in one epic journey",
    "Soar over Luxor on an unforgettable hot air balloon ride",
    "Walk in the footsteps of pharaohs at Karnak & the Valley of the Kings",
    "Cruise the Nile in style with guided stops at Egypt’s top temples",
    "Witness the awe-inspiring Abu Simbel Temples",
    "Valley of the Kings, Karnak Temple, Edfu, Kom Ombo, and Philae Temple"
  ],

  moreDetails: [
    {
      item: "Duration",
      reason: "4 Nights (Luxor to Aswan) or 3 Nights (Aswan to Luxor)"
    },
    {
      item: "Accommodation",
      reason: "Stay in a 5-Star Floating Hotel (Private cabin with Nile view)"
    },
    {
      item: "Languages",
      reason: "Live tour guide speaking Arabic, English, German, Spanish, and French"
    },
    {
      item: "Sightseeing",
      reason: "Professional Egyptologist guides all temple visits and excursions"
    },
    {
      item: "Entertainment",
      reason: "Nightly entertainment including Galabeya Party, Belly Dance, and Nubian Show"
    },
    {
      item: "Meals",
      reason: "Full Board: Breakfast, Lunch, and Dinner (Open Buffet)"
    },
    {
      item: "Transport",
      reason: "All pickups and drop-offs via air-conditioned vehicles"
    }
  ],

  included: [
    "Live tour guide in multiple languages",
    "Professional Egyptologist for all sightseeing",
    "All pickups and drop-offs via air-conditioned vehicles",
    "Nightly entertainment (Galabeya Party, Belly Dance, Nubian Show)",
    "Full Board: Breakfast, Lunch, and Dinner (Open Buffet)"
  ],

  excluded: [
    "Drinks: All beverages (Water, Soda, Coffee, etc.) are extra",
    "Optional Tours: Hot Air Balloon (Luxor) & Abu Simbel Temple (Aswan)",
    "Entry Tickets: Entrance fees to the archaeological sites",
    "Personal Expenses: Laundry, Spa services, and Tipping (Gratuity)"
  ],

  description: "Relax on a scenic Nile cruise from Luxor to Aswan, stopping at historic temples along the way."
}
],

    included: ["Hotel Pickup", "Professional Guide",],
    excluded: [""],
    reviews: ["⭐⭐⭐⭐⭐ Amazing experience!", "⭐⭐⭐⭐ Great tour and friendly guide."],
    
  },

  {
    title: "Experience world-class sea trips from Sharm El-Sheikh",
    cardTitle: "Pst Emmanuel ",
    subtitle:"Associate Pastor",
    slug: makeSlug("Classic Nile Cruise Experience"),
    description:
      "Experience world-class sea trips from Sharm El-Sheikh, featuring iconic dive spots and stunning scenery.",
    heroImage: "/images/pastors/11.jpg",
    heroVideo: "/videos/sham.mp4",
    gallery: ["/images/pastors/16.jpg", "/images/pastors/17.jpg"],
    overview: [
  "Sharm El Sheikh... Where your family story begins with SIRI SAND TOURS. ✨",

  "At SIRI SAND TOURS, we believe that travel is not just about visiting places, but about sharing warm moments with the ones you love. In Sharm El Sheikh, we are your extended family, opening the doors to beauty and adventure for you.",

  "The Colors of the Sea: Dive into the breathtaking waters of Ras Mohammed, where you and your children will discover a divine masterpiece of vibrant coral reefs. 🐠🤿",

  "The Serenity of the Soul: Enjoy a peaceful moment before the majestic architecture of Al-Sahaba Mosque and the unique beauty of the Heavenly Cathedral. 🕌⛪",

  "The Magic of the Desert: Experience a warm Bedouin dinner under the stars, filled with stories, laughter, and unforgettable desert vibes. 🏜️✨",

  "The Joy of the City: Explore Soho Square and Naama Bay, where modern attractions blend beautifully with the charm of the Red Sea coast. 🎡🛍️",

  "We don’t just organize trips — we create family memories that stay etched in your heart. We are waiting for you in our second home, Sharm El Sheikh."
],
    itinerary: [
      
  {
    title: "Sea Trip – Private Boat",
    image: "/images/itinerary/ras-mohammed.jpg",
      price: 120,
  currency: "€",
  pickupTimes: ["Private / On demand (Upon Request)"],
 highlights: [
  "Private high-speed boat for your group only",
  "Snorkeling at the best coral reefs or Dolphin watching",
  "Flexible pickup time from your hotel",
  "Professional licensed captain and guide"
],

included: [
  "Private high-speed boat",
  "Professional licensed captain and guide",
  "Private round-trip transfers from your hotel in Sharm El Sheikh to the jetty",
  "Life jackets and all safety equipment on board",
  "Flexible pickup from your hotel (Usually between 9:00 AM – 3:00 PM)"
],

excluded: [
  "Snorkeling gear (Mask, Fins, Life Jacket) unless requested",
  "National Park Fees: Ras Mohammed entry fees (if applicable)",
  "Any additional beverages not mentioned",
  "Optional lunch (available at extra cost)",
  "Personal expenses (professional photography or souvenirs)",
  "Tipping for the captain or driver (optional)"
],

extraInfo: [
  "Departure Time: Flexible pickup between 9:00 AM – 3:00 PM",
  "Optional lunch can be arranged at extra cost",
  "National Park Fees apply if visiting Ras Mohammed"
],

moreDetails: [
  {
    item: "Captain",
    reason: "Professional licensed captain and guide"
  },
  {
    item: "Activities",
    reason: "Snorkeling at the best coral reefs or Dolphin watching"
  },
  {
    item: "Transfers",
    reason: "Private round-trip from your hotel in Sharm El Sheikh to the jetty"
  },
  {
    item: "Safety",
    reason: "Life jackets and all safety equipment on board"
  },
  {
    item: "Private Boat",
    reason: "High-speed boat for your group only"
  },
  {
    item: "National Park Fees",
    reason: "Ras Mohammed entry fees (if applicable)"
  }
],
    description: "A private, high-speed sea tour offering flexibility and thrill while exploring coastal landmarks."
  },
  {
    title: "Sea Trip – Ras Mohammed",
    image: "/images/itinerary/pirate-boat.jpg",
      price: 28,
    pickupTimes:["8:00am - 4:00pm"],
  currency: "€",
 highlights: [
  "Visit the National Park, Magic Lake, and Mangroves",
  "Snorkel at the best spots with a professional guide",
  "Enjoy a buffet lunch served on the boat or at a local spot",
  "Comfortable round-trip transfers from your hotel"
],

included: [
  "Access to the National Park, Magic Lake, and Mangroves",
  "Buffet lunch served on the boat or at a local spot",
  "Round-trip by air-conditioned tourist vehicle",
  "Professional guide to show the best snorkeling spots",
  "Necessary security permits for entering the protected area",
  "Pickup from your hotel between 8:00 AM – 9:00 AM"
],

excluded: [
  "National Park entry fee for Ras Mohammed (if not pre-paid)",
  "Renting snorkeling gear (Mask, Fins, Life Jacket)",
  "Any beverages not included with lunch",
  "Personal expenses (professional photography or souvenirs)",
  "Tipping for the guide or driver (optional)"
],

extraInfo: [
  "Departure Time: Pickup from your hotel between 8:00 AM – 9:00 AM",
  "Security permits are required for entering the protected area",
  "National Park entry fee applies if not pre-paid"
],

moreDetails: [
  {
    item: "Entrance Fees",
    reason: "Access to the National Park, Magic Lake, and Mangroves"
  },
  {
    item: "Transfers",
    reason: "Round-trip by air-conditioned tourist vehicle"
  },
  {
    item: "Lunch",
    reason: "Buffet lunch served on the boat or at a local spot"
  },
  {
    item: "Equipment",
    reason: "Snorkeling gear available for rent (Mask, Fins, Life Jacket)"
  },
  {
    item: "Tour Guide",
    reason: "Professional guide to show the best snorkeling spots"
  },
  {
    item: "Security Permits",
    reason: "Necessary permits for entering the protected area"
  }
],
    description: "A world-famous National Park renowned for its vibrant coral reefs and diverse marine life; ideal for snorkeling."
  },
  {
    title: "Sea Trip – Tiran Island",
    image: "/images/itinerary/tiran-island.jpg",
      price: 25,
    
  currency: "€",
  pickupTimes: ["8:00 am - 9:00pm"],
 highlights: [
  "Full day boat trip on a luxury boat with sun decks",
  "Snorkeling with a professional guide on board",
  "Open buffet lunch served on the boat",
  "Water and soft drinks available all day"
],

included: [
  "Full day on a luxury boat with sun decks",
  "Professional snorkeling guide on board",
  "Open buffet lunch prepared and served on the boat",
  "Water and soft drinks available all day on the boat",
  "Round-trip by air-conditioned tourist vehicle to the jetty",
  "Pickup from your hotel between 8:00 AM – 9:00 AM"
],

excluded: [
  "Renting snorkeling gear (Mask, Fins, Life Jacket)",
  "Intro diving (extra cost if not pre-booked)",
  "Any beverages not included with lunch",
  "Personal expenses (professional photography or souvenirs)",
  "Tipping for the boat crew or driver (optional)"
],

extraInfo: [
  "Pickup from your hotel between 8:00 AM – 9:00 AM",
  "Intro diving available at extra cost if not pre-booked"
],

moreDetails: [
  {
    item: "Boat Trip",
    reason: "Full day on a luxury boat with sun decks"
  },
  {
    item: "Tour Guide",
    reason: "Professional snorkeling guide on board"
  },
  {
    item: "Lunch",
    reason: "Open buffet lunch prepared and served on the boat"
  },
  {
    item: "Soft Drinks",
    reason: "Water and soft drinks available all day on the boat"
  },
  {
    item: "Transfers",
    reason: "Round-trip by air-conditioned tourist vehicle to the jetty"
  }
],
    description: "A relaxing boat trip to the crystal-clear waters surrounding Tiran Island, featuring multiple snorkeling stops."
  },
  {
  title: "Submarine – Semi Submarine",
  image: "/images/itinerary/submarin.jpg",
  price: 22,
  currency: "€",
  pickupTimes: ["Periodic (Every two hours from 9AM)"],

  highlights: [
    "Panoramic submarine underwater viewing deck experience",
    "Huge glass windows for clear underwater views",
    "Guide to identify fish and coral reef species",
    "Fish feeding experience to attract fish near the glass",
    "Short snorkeling/swimming stop (approx. 30 mins)",
    "Coral reef visit at shallow vibrant sites",
    "Air-conditioned underwater observation deck",
    "Upper sun deck for sea breeze & relaxation",
    "Family friendly (ideal for toddlers, infants & non-swimmers)",
    "Complimentary water or juice during the trip",
    "Multiple daily departure shifts"
  ],

  included: [
    "Round-trip pickup and drop-off from your hotel",
    "Submarine ticket with entry to the panoramic underwater viewing deck (1.5–2 meters depth)",
    "Guide to identify fish and coral reef species",
    "Short snorkeling/swimming stop (approx. 30 mins)",
    "Life jackets provided (especially for snorkeling)",
    "Huge panoramic glass windows for each passenger",
    "Air-conditioned underwater deck",
    "Access to upper sun deck",
    "Clean restrooms onboard",
    "Complimentary water or juice during the trip",
    "Private or shared round-trip transfers from your hotel to the jetty",
    "Multiple daily departure shifts (e.g., 9:00 AM, 11:00 AM, or 1:00 PM)"
  ],

  excluded: [
    "Professional photography by the boat crew",
    "Snorkeling gear (unless part of a combined snorkeling trip)",
    "Lunch (trip duration is usually 1.5–2 hours)",
    "Extra drinks outside the complimentary water/juice",
    "Snacks or bar purchases onboard",
    "Personal expenses (souvenirs, additional services)",
    "Tipping for the boat crew or driver (optional)"
  ],

  extraInfo: [
    "Departure Time: Multiple shifts daily (9:00 AM, 11:00 AM, or 1:00 PM)",
    "Duration: Approximately 1.5 to 2 hours",
    "Life jackets are available for all passengers on board",
    "Ideal for families and non-swimmers",
    "Facilities include clean restrooms and a small onboard snack bar"
  ],

  moreDetails: [
    {
      item: "Underwater Viewing",
      reason: "Large panoramic glass windows at approx. 1.5–2 meters depth for clear reef viewing"
    },
    {
      item: "Coral Reefs",
      reason: "Visit vibrant shallow reef areas with colorful marine life"
    },
    {
      item: "Fish Feeding",
      reason: "Crew feeds fish to bring them closer to the glass"
    },
    {
      item: "Snorkeling Stop",
      reason: "Short 30-minute swimming or snorkeling break"
    },
    {
      item: "Comfort",
      reason: "Air-conditioned observation deck with comfortable seating"
    },
    {
      item: "Sun Deck",
      reason: "Upper deck available for sunbathing and enjoying sea breeze"
    },
    {
      item: "Safety",
      reason: "Life jackets provided and crew supervision throughout the trip"
    },
    {
      item: "Transfers",
      reason: "Private or shared round-trip from your hotel to the jetty"
    },
    {
      item: "Soft Drinks",
      reason: "Complimentary water or juice served during the trip"
    }
  ],

  description:
    "Enjoy a semi-submarine adventure with panoramic glass windows to explore vibrant coral reefs and marine life without getting wet. A short, family-friendly Red Sea experience combining comfort, safety, and unforgettable underwater views."
},
  {
    title: "Safari – Desert Safari",
    image: "/images/itinerary/siwa-safari.jpg",
      price: 25,
  currency: "€",
  pickupTimes: ["Sunrise (4:00 Am) or Sunset (3:00PM)"],
  
  highlights: [
  "Quad Biking (ATV), Spider Car (Buggy), and Camel ride",
  "Oriental show (Belly dance, Tanoura, and Fire show)",
  "Authentic Bedouin dinner served in a tent",
  "Sunset desert trip experience"
],

included: [
  "Pickup from your hotel between 3:30 PM – 4:30 PM (Sunset trip)",
  "Round-trip by air-conditioned tourist vehicle",
  "Quad Biking (ATV), Spider Car (Buggy), and Camel ride",
  "Oriental show (Belly dance, Tanoura, and Fire show)",
  "Traditional Bedouin tea in the desert camp",
  "Authentic Bedouin dinner served in a Bedouin tent"
],

excluded: [
  "Any beverages not included with dinner",
  "Renting or buying a desert scarf (Shemagh)",
  "Extra pastors or additional activities not listed",
  "Personal expenses (professional photography or souvenirs)",
  "Tipping for the desert guide or driver (optional)"
],

extraInfo: [
  "Departure Time: Pickup between 3:30 PM – 4:30 PM (Sunset trip)",
  "Bedouin tea is served at the desert camp"
],

moreDetails: [
  {
    item: "Entertainment",
    reason: "Oriental show (Belly dance, Tanoura, and Fire show)"
  },
  {
    item: "Activities",
    reason: "Quad Biking (ATV), Spider Car (Buggy), and Camel ride"
  },
  {
    item: "Dinner",
    reason: "Authentic Bedouin dinner served in a Bedouin tent"
  },
  {
    item: "Transfers",
    reason: "Round-trip by air-conditioned tourist vehicle"
  }
],
    description: "A desert adventure biking, camel riding, and a traditional Bedouin dinner with live shows."
  },
{
  title: "Limousine + Taxi",
  image: "/images/itinerary/limouse2.jpg",
  price: 15,
  currency: "€",
  pickupTimes: ["On Request (24/7)"],

  highlights: [
    "Professional representative with personalized sign and luggage assistance",
    "100% On-time guarantee; drivers arrive 15 minutes early",
    "Modern, fully air-conditioned vehicles (Standard Sedan, Family Van, Luxury Business Class)",
    "City Taxi option (Classic Orange & Blue taxis for quick trips)",
    "Airport transfers with extra luggage space",
    "Pre-booking available for airport & long-distance trips",
    "Intercity private travel (Cairo, Luxor, Marsa Alam)",
    "Complimentary High-speed Wi-Fi, bottled mineral water, and mobile charging ports",
    "Professional, multilingual licensed drivers",
    "Monitored trips for safety and reliability",
    "Transparent all-inclusive fixed rates (Tolls included)",
    "24/7 customer support availability"
  ],

  moreDetails: [
    {
      item: "Meet & Greet",
      reason: "A professional representative awaits you with a personalized sign and full luggage assistance"
    },
    {
      item: "Punctuality",
      reason: "100% On-time guarantee; drivers arrive 15 minutes before scheduled pickup"
    },
    {
      item: "Premium Fleet",
      reason: "Modern, fully air-conditioned vehicles (Standard Sedan, Family Van, Luxury Business Class)"
    },
    {
      item: "City Taxi",
      reason: "Classic Orange & Blue taxis available for short and quick city trips"
    },
    {
      item: "Airport Transfers",
      reason: "Specialized service with extra luggage space and smooth airport pickup/drop-off"
    },
    {
      item: "Intercity Travel",
      reason: "Private long-distance trips to Cairo, Luxor, or Marsa Alam"
    },
    {
      item: "Onboard Comfort",
      reason: "Complimentary High-speed Wi-Fi, bottled mineral water, and mobile charging ports"
    },
    {
      item: "Expert Drivers",
      reason: "Licensed, multilingual drivers with knowledge of all city and intercity routes"
    },
    {
      item: "Safety",
      reason: "Monitored trips and professional driving standards"
    },
    {
      item: "Fixed Pricing",
      reason: "Pre-agreed, transparent all-inclusive rates with no hidden fees"
    },
    {
      item: "Customer Support",
      reason: "24/7 availability for assistance and bookings"
    }
  ],

  included: [
    "Door-to-door pickup and drop-off",
    "Personalized Meet & Greet",
    "Full luggage assistance",
    "Professional licensed driver",
    "Air-conditioned vehicle",
    "High-speed Wi-Fi",
    "Bottled mineral water",
    "Mobile charging ports",
    "Pre-agreed fixed rates",
    "Tolls included"
  ],

  excluded: [
    "Extra unplanned stops during the trip (may incur additional fees)",
    "Extended waiting time (e.g., malls, restaurants)",
    "Specific parking fees at private marinas or malls",
    "Optional tipping for the driver"
  ],

  description:
    "Reliable 24/7 limousine and taxi services offering airport transfers, city rides, and intercity travel with professional drivers, fixed transparent pricing, and premium onboard comfort."
},
],
    included: [ "Airport Transfers", "Guide",],
    excluded: ["Drinks", "Tips"],
    reviews: ["⭐⭐⭐⭐⭐ Beautiful cruise!", "⭐⭐⭐⭐ Highly recommended."],
  
  },

  {
    title: "Discover the heart of Egypt with its pyramids, museums, and bustling streets.",
    cardTitle: "Pst Uche",
    subtitle:"... Pastor",
    slug: makeSlug("Explore Egypt From the Pyramids to the White Desert"),
    description: "Discover the heart of Egypt with its pyramids, museums, and bustling streets.",
    heroImage: "/images/pastors/8.jpg",
    heroVideo: "/videos/cario.mp4",
    gallery: ["/images/trending/4.jpg", "/images/trending/21.jpg"],
    overview: [
  "Cairo through the eyes of the SIRI SAND TOURS family... where your story begins. ✨",

  "At SIRI SAND TOURS, we welcome you as family, not just as guests. We take you on a warm, family-friendly journey that beautifully combines history, spirituality, and togetherness.",

  "The Grandeur of the Past: Discover the timeless Pyramids and the treasures of the Grand Egyptian Museum. 🏛️",

  "The Tranquility of the Soul: Visit the Citadel, Al-Azhar Mosque, and the Hanging Church for moments of peace and reflection. 🕌⛪",

  "The Joy of Togetherness: Enjoy a delightful stroll through Al-Muizz Street and Khan El-Khalili, filled with culture, charm, and local flavors. ☕🛍️",

  "We care about your family, so you can experience the magic of Egypt with love, comfort, and complete peace of mind."
],
    itinerary: [
  {
    title: "Giza Pyramids & Grand Egyptian Museum",
    image: "/images/itinerary/22.jpg",
    
      price: 80,
  currency: "€",
  pickupTimes: ["1:30 Am - 2:30 Am"],
highlights: [
  "Visit the Giza Pyramids area, Sphinx, and the Grand Egyptian Museum (GEM)",
  "Explore the ancient Egyptian sites with a professional Egyptologist guide",
  "Enjoy lunch at a quality restaurant in Cairo",
  "Round-trip transfers from Hurghada in an air-conditioned tourist bus",
  "Early morning departure to make the most of your day trip"
],

included: [
  "Entrance fees for Giza Pyramids area, Sphinx, and the Grand Egyptian Museum (GEM)",
  "Lunch at a quality restaurant in Cairo",
  "Security permits for tour bus passage",
  "Pickup from Hurghada (usually between 1:30 AM – 2:30 AM depending on hotel location)",
  "Round-trip transfers to and from your hotel in Hurghada",
  "Professional Egyptologist guide explaining the sights in your language"
],

excluded: [
  "Any additional drinks during lunch",
  "Entry ticket to go inside the Great Pyramid (Khufu)",
  "Optional activities (e.g., Camel ride or Nile Felucca)",
  "Personal expenses (souvenirs or professional photography)",
  "Tipping for guide or driver (optional)"
],

infantPrice: "Contact us for child pricing details",

extraInfo: [
  "Pickup time is usually between 1:30 AM – 2:30 AM depending on hotel location",
  "Tipping for the guide or driver is optional",
  "Entry inside the Great Pyramid requires a separate ticket"
],

moreDetails: [
  {
    item: "Departure Time",
    reason: "Pickup from Hurghada is usually between 1:30 AM – 2:30 AM (depending on hotel location)"
  },
  {
    item: "Lunch",
    reason: "Served at a quality restaurant in Cairo"
  },
  {
    item: "Entrance Fees",
    reason: "Includes fees for Giza Pyramids area, Sphinx, and the Grand Egyptian Museum (GEM)"
  },
  {
    item: "Transfers",
    reason: "Round-trip transfers from your hotel in Hurghada"
  },
  {
    item: "Tour Guide",
    reason: "Professional Egyptologist guide available in your language"
  },
  {
    item: "Security Permits",
    reason: "Required for tour bus passage"
  }
],
    description: "Explore the Great Pyramids of Giza and the Sphinx, followed by a visit to the Grand Egyptian Museum (GEM) to see the treasures of Ancient Egypt."
  },
  {
    title: "Scenic Flight Over Pyramids",
    image: "/images/itinerary/20.jpg",
     price: 120,
  currency: "€",
  pickupTimes: ["5:30 am"],
included:["Private group", "Host or Greeter : English, Arabic"],
    infantPrice: "",
    extraInfo:["Free Cancellation: Cancel up 24hrs in advance for full refund", "Reserve now & pay later: Keep your travel plans flexble- book your spot and pay nothing today"
     ], 
  
moreDetails: [
  {
    item: "Priority Access",
    reason: "Skip the line through a separate entrance for faster entry."
  }
],

  highlights: [
    "Feel the thrill of a private helicopter flight over Cairo and the Pyramids",

"Perfect for couples, families, or VIP guests seeking a luxurious experience"
,
"Private aerial flight over the Pyramids of Giza and the Great Sphinx",
  "Unforgettable bird’s-eye views of Egypt’s most iconic ancient wonders",

"exclusive landing at the Pyramids for a truly unforgettable adventure!"  
  ],
description: "Experience Cairo like never before. Take off on a private helicopter ride and enjoy breathtaking panoramic views of the Nile, Cairo Tower, and the historic Salah El-Din Citadel. Feel the thrill of soaring above the ancient wonders of Cairo and Giza in a luxurious private aircraft—an experience that blends opulence with adventure. From the moment of ascent, the vast metropolis of Cairo unfolds beneath you, where winding streets, historic landmarks, and modern structures merge seamlessly with the surrounding desert. As the journey continues toward Giza, the legendary pyramids rise majestically from the sands, offering an unobstructed aerial view of the Great Pyramid of Khufu, the Pyramid of Khafre, and the Pyramid of Menkaure. More than a sightseeing tour, this exclusive flight is an immersive encounter with Egypt’s timeless history, revealing its grandeur from a perspective reserved for the few."
  },
  {
    title: "Historic Cairo – Al Muizz & Khan El Khalili",
    image: "/images/itinerary/23.jpg",
      price: 40,
  currency: "€",
  pickupTimes: ["2:30 am",],
included:["Private group", "Host or Greeter : English, Arabic"],
    infantPrice: "",
    extraInfo:["Free Cancellation: Cancel up 24hrs in advance for full refund", "Reserve now & pay later: Keep your travel plans flexble- book your spot and pay nothing today"
     ], 
  
moreDetails: [
  {
    item: "Comfortable Walking Shoes",
    reason: "The tour involves walking on historic cobblestone streets."
  },
  {
    item: "Camera or Smartphone",
    reason: "To capture stunning photos of thousand-year-old landmarks."
  },
  {
    item: "Headscarf / Light Shawl",
    reason: "Useful for sun protection and for ladies when entering mosques."
  },
  {
    item: "Cash (Local Currency)",
    reason: "Recommended for shopping and tipping in the small alleys."
  },
  {
    item: "Sunglasses",
    reason: "To protect your eyes from the bright daylight."
  }
],



  highlights: [
    "Stop 1 : Bab al-Futuh & Al-Muizz St.,Exploring Fatimid walls and the Qalawun Complex",
"Stop 2: Islamic Architecture (Bayt al-Suhaymi),Admiring traditional Cairene house design and Mashrabiya",
"Stop 3:The Historic Souq (Khan el-Khalili), Free time for shopping for antiques, textiles, and souvenirs",
"Stop 4: Heritage Break (El Fishawy Cafe),Relaxing at Cairo’s oldest cafe with traditional Egyptian tea",
"Stop 5 : Tour Finale (Al-Hussein Area),Enjoying lunch or dinner at a restaurant with an ancient view"
  ],
    description: "A walk through the heart of Old Cairo; enjoy shopping at the historic bazaar and admire the medieval Islamic architecture of Al-Muizz Street. A Note from SIRI SAND TOURS: We pay attention to every detail to ensure you have an unforgettable journey through history."
},
  {
  title: "Islamic Cario Mosques",
  image: "/images/trending/5.jpg",
  price: 65,
  currency: "€",
  pickupTimes: ["1:30 Am - 2:30 AM"],
  highlights: [
  "Visit Saladin Citadel, Al-Ababaster Mosque, and Al-Azhar Mosque",
  "Guided walking tour through Moez Street and Khan El-Khalili bazaar",
  "Enjoy lunch at a quality restaurant in Old Cairo",
  "Round-trip transfers from Hurghada in an air-conditioned tourist bus",
  "Learn from an Egyptologist specializing in Islamic history"
],

included: [
  "Entrance fees for Saladin Citadel, Al-Ababaster Mosque, and Al-Azhar Mosque",
  "Lunch at a quality restaurant in Old Cairo",
  "Security permits for tour bus passage",
  "Pickup from Hurghada (usually between 1:30 AM – 2:30 AM depending on hotel location)",
  "Round-trip transfers to and from your hotel in Hurghada",
  "Professional Egyptologist guide explaining Islamic Cairo sights"
],

excluded: [
  "Any additional drinks during lunch",
  "Optional activities (e.g., Nile Felucca or horse carriage ride)",
  "Personal expenses (buying souvenirs or shopping at Khan El-Khalili)",
  "Tipping for guide or driver (optional)"
],

infantPrice: "Contact us for child pricing details",

extraInfo: [
  "Pickup time is usually between 1:30 AM – 2:30 AM depending on hotel location",
  "Tipping for the guide or driver is optional",
  "Personal expenses include souvenirs or shopping at Khan El-Khalili"
],

moreDetails: [
  {
    item: "Departure Time",
    reason: "Pickup from Hurghada is usually between 1:30 AM – 2:30 AM (depending on hotel location)"
  },

  {
    item: "9:00 AM – Muhammad Ali Mosque (Marble Mosque)",
    reason:
      "Icon of the Citadel, famous for its Ottoman architecture, towering minarets, and breathtaking panoramic views over Cairo. Located inside the Citadel of Saladin."
  },
  {
    item: "10:30 AM – Mosque of al-Nasir Muhammad ibn Qalawun",
    reason:
      "A remarkable Mamluk mosque distinguished by its minarets decorated with green mosaic tiles (Qashani). Located inside the Citadel of Saladin."
  },
  {
    item: "11:30 AM – Mosque & Madrasa of Sultan Hassan",
    reason:
      "Known as the 'Pyramid of Islamic Architecture' and considered one of the greatest Mamluk buildings in the world. Located at Citadel Square."
  },
  {
    item: "12:30 PM – Al-Rifa’i Mosque",
    reason:
      "Located opposite Sultan Hassan Mosque, it houses the tombs of the Muhammad Ali dynasty and the Shah of Iran, distinguished by its royal decorations."
  },
  {
    item: "1:30 PM – Mosque of Ahmad Ibn Tulun",
    reason:
      "The oldest mosque preserved in its original state, famous for its unique spiral minaret and vast courtyard. Located in Sayyida Zainab."
  },

  {
    item: "Lunch",
    reason: "Served at a quality restaurant in Old Cairo"
  },
  {
    item: "Entrance Fees",
    reason: "Includes fees for Saladin Citadel, Al-Ababaster Mosque, and Al-Azhar Mosque"
  },
  {
    item: "Transfers",
    reason: "Round-trip transfers from your hotel in Hurghada"
  },
  {
    item: "Tour Guide",
    reason: "Professional Egyptologist specializing in Islamic history"
  },
  {
    item: "Security Permits",
    reason: "Required for tour bus passage"
  }
],
  description: "A specialized tour of Cairo's historic landmarks, including the Saladin Citadel, Mosque of Muhammad Ali, and the Sultan Hassan Mosque."
  },
 {
  title: "Coptic Cairo Churches",
  image: "/images/itinerary/24.jpg",
  price: 65,
  currency: "€",

  duration: "Full Day (Approx. 15 Hours)",

  extraInfo: [
    "Pick-up Time: Your exact pick-up time may vary by 30 minutes depending on your hotel location in Hurghada",
    "Safe pedestrian zones: No need to use a car once you reach the entrance, ideal for families and seniors"
  ],

  pickupTimes: ["03:00 AM"],

  highlights: [
    "Visit the Hanging Church, Abu Serga, St. Barbara, and St. George Monastery",
    "Modest clothing is recommended in respect for the sanctity of the churches",
    "Bring a professional or high-quality camera to capture ancient Coptic icons and inlaid wood altar details",
    "Hat and sunglasses recommended for walking between outdoor church areas",
    "An information booklet or guide is helpful, as the area is rich in spiritual history and stories"
  ],

  moreDetails: [
    {
      item: "Start Time",
      reason: "Tour begins at 3:00 AM from your hotel in Hurghada"
    },
    {
      item: "Main Sites",
      reason: "Hanging Church, Abu Serga, St. Barbara, St. George Monastery"
    },
    {
      item: "Lunch & Relaxation",
      reason: "2:30 PM – Enjoy an oriental lunch at a restaurant overlooking Old Cairo landmarks (Citadel / Al-Azhar area)"
    },
    {
      item: "Total Duration",
      reason: "Approx. 15 hours including travel and guided tour"
    }
  ],

  included: [
    "A/C Transfers from/to hotel",
    "Professional guide",
    "Entrance fees to all churches",
    "Lunch",
    "Bottled water"
  ],

  excluded: [
    "Tips (Gratuity)",
    "Lunch drinks",
    "Personal expenses"
  ],

  description: "🗺️ SIRI SAND TOURS' advice: This tour is fully within pedestrian zones, making it easy and safe to explore Coptic Cairo on foot. Perfect for families, seniors, and anyone interested in religious history and architecture."
},
{
  title: "Limousine + Taxi",
  image: "/images/itinerary/limouse.jpg",
  price: 15,
  currency: "€",
  pickupTimes: ["On Request (24/7)"],

  highlights: [
    "Professional representative with personalized sign and luggage assistance",
    "100% On-time guarantee; drivers arrive 15 minutes early",
    "Modern, fully air-conditioned vehicles (Standard Sedan, Family Van, Luxury Business Class)",
    "City Taxi option (Classic Orange & Blue taxis for quick trips)",
    "Airport transfers with extra luggage space",
    "Pre-booking available for airport & long-distance trips",
    "Intercity private travel (Cairo, Luxor, Marsa Alam)",
    "Complimentary High-speed Wi-Fi, bottled mineral water, and mobile charging ports",
    "Professional, multilingual licensed drivers",
    "Monitored trips for safety and reliability",
    "Transparent all-inclusive fixed rates (Tolls included)",
    "24/7 customer support availability"
  ],

  moreDetails: [
    {
      item: "Meet & Greet",
      reason: "A professional representative awaits you with a personalized sign and full luggage assistance"
    },
    {
      item: "Punctuality",
      reason: "100% On-time guarantee; drivers arrive 15 minutes before scheduled pickup"
    },
    {
      item: "Premium Fleet",
      reason: "Modern, fully air-conditioned vehicles (Standard Sedan, Family Van, Luxury Business Class)"
    },
    {
      item: "City Taxi",
      reason: "Classic Orange & Blue taxis available for short and quick city trips"
    },
    {
      item: "Airport Transfers",
      reason: "Specialized service with extra luggage space and smooth airport pickup/drop-off"
    },
    {
      item: "Intercity Travel",
      reason: "Private long-distance trips to Cairo, Luxor, or Marsa Alam"
    },
    {
      item: "Onboard Comfort",
      reason: "Complimentary High-speed Wi-Fi, bottled mineral water, and mobile charging ports"
    },
    {
      item: "Expert Drivers",
      reason: "Licensed, multilingual drivers with knowledge of all city and intercity routes"
    },
    {
      item: "Safety",
      reason: "Monitored trips and professional driving standards"
    },
    {
      item: "Fixed Pricing",
      reason: "Pre-agreed, transparent all-inclusive rates with no hidden fees"
    },
    {
      item: "Customer Support",
      reason: "24/7 availability for assistance and bookings"
    }
  ],

  included: [
    "Door-to-door pickup and drop-off",
    "Personalized Meet & Greet",
    "Full luggage assistance",
    "Professional licensed driver",
    "Air-conditioned vehicle",
    "High-speed Wi-Fi",
    "Bottled mineral water",
    "Mobile charging ports",
    "Pre-agreed fixed rates",
    "Tolls included"
  ],

  excluded: [
    "Extra unplanned stops during the trip (may incur additional fees)",
    "Extended waiting time (e.g., malls, restaurants)",
    "Specific parking fees at private marinas or malls",
    "Optional tipping for the driver"
  ],

  description:
    "Reliable 24/7 limousine and taxi services offering airport transfers, city rides, and intercity travel with professional drivers, fixed transparent pricing, and premium onboard comfort."
},

]
,
    included: [ "Guide",],
    excluded: ["Flights", "Tips"],
    reviews: ["⭐⭐⭐⭐⭐ Fantastic tour!", "⭐⭐⭐⭐ Loved it!"],
   
  },

  {
    title: "Experience a peaceful Red Sea getaway with snorkeling & diving,",
    cardTitle: "pst.... ",
    subtitle:"... Pastor",
    slug: makeSlug("Luxury Siwa Oasis White Desert Adventure"),
    description: "Experience a peaceful Red Sea getaway with snorkeling, diving, and coastal relaxation in Marsa Alam.",
    heroImage: "/images/pastors/2.jpg",
    heroVideo: "/videos/marsa.mp4",
    gallery: ["/images/pastors/14.jpg", "/images/pastors/15.jpg"],
   overview: [
  "Marsa Alam... Discover paradise with the SIRI SAND TOURS family. ✨",

  "At SIRI SAND TOURS, we believe the most beautiful moments are those shared with family in the heart of untouched nature.",

  "Meeting the Sea’s Gentle Giants: Swim with dugongs and sea turtles in the crystal-clear waters of Abu Dabbab. 🐢🌊",

  "The Maldives of Egypt: Enjoy an unforgettable family day on the pristine beaches of Sharm El Luli and El Neezak. 🏝️💎",

  "The Magic of Wildlife: Explore Wadi El Gemal National Park and experience the peaceful beauty of the desert. 🐫🌿",

  "Privacy and Security: Our warm, family-oriented approach ensures your comfort, safety, and complete peace of mind. 🤝❤️",

  "In Marsa Alam, you’re not just tourists — you’re guests in the SIRI SAND TOURS family home."
],
    itinerary: [
 {
  title: "Royal Sea Scope Submarine",
  image: "/images/itinerary/royal-seascope.jpg",
  price: 35,
  currency: "€",
  pickupTimes: ["9:00 am"],

  duration: "",

  moreDetails: [
    {
      item: "Morning Trip (1)",
      reason: "09:00 AM – 11:00 AM"
    },
    {
      item: "Morning Trip (2)",
      reason: "11:00 AM – 01:00 PM"
    },
    {
      item: "Afternoon Trip (3)",
      reason: "03:00 PM – 05:00 PM"
    }
  ],

  highlights: [
    "Underwater viewing at a depth of 3 meters inside the Sea Scope submarine.",
    "45 minutes of marine life viewing through panoramic glass windows.",
    "Snorkeling stop: 45 minutes to explore vibrant coral reefs."
  ],

  included: [
    "Hotel pickup & drop-off",
    "Submarine entrance ticket",
    "Multilingual guide",
    "Welcome drink",
    "Complimentary snorkeling gear (life jackets, masks & fins)",
    "Free mineral water from dispenser during the trip"
  ],

  excluded: [
    "Professional photos or videos",
    "Personal snacks & meals",
    "Extra drinks from the bar",
    "Staff gratuities (tipping)"
  ],

  description: "Enjoy a Royal Sea Scope submarine experience with underwater viewing, snorkeling stop, professional guidance, and hotel transfers included."
},
  {
    title: "Nefertari Submarine",
    image: "/images/itinerary/Nefertari.jpg",
      price: 40,
  currency: "€",
 pickupTimes: ["09:00 AM / 02:00 PM"],
duration: "",
included: [
  "Soft drinks and mineral water",
  "Life jacket",
  "Lunch",
  "Hotel transfers (Pick-up & Drop-off)",
  "Snorkeling equipment",
  "National Park fees and taxes"
],

excluded: [
  "Professional Photographer",
  "Transfers from South Marsa Alam Airport ($7 per person)"
],

extraInfo: [
  "Free Cancellation: Cancel up to 24 hours in advance for a full refund.",
  "Reserve now & pay later: Keep your travel plans flexible — book your spot and pay nothing today."
],

highlights: [
  "Morning Trip: Starts at 09:00 AM and ends at 01:30 PM.",
  "Sunset Trip: Starts at 02:00 PM and ends at 07:00 PM."
],

moreDetails: [
  {
    item: "Required Documents",
    reason: "Personal ID (for Egyptians) or Passport (for non-Egyptians)."
  },
  {
    item: "Clothing & Footwear",
    reason: "Comfortable clothes and comfortable shoes are recommended."
  },
  {
    item: "Personal Essentials",
    reason: "Sunglasses and sunscreen."
  },
  {
    item: "Snorkeling Guide",
    reason: "Professional snorkeling guide available during the trip."
  }
],

    description: "Underwater viewing experience inside a real submarine."
  },
  {
    title: "Super Desert Safari",
    image: "/images/itinerary/super-safari.jpg",
      price: 40,
  currency: "€",
 pickupTimes: ["Sunrise (4am) or Sunset (3pm)"],
extraInfo: ["It's recommended to confirm your pickup time 24hrs in advance to ensure transportation from your hotel"],
included: [
  "4x4 Jeep Cars",
  "Bedouin Party",
  "Helmet",
  "Dinner",
  "Mineral Water",
  "Tour Guide",
  "Beach Buggy",
  "Bedouin Village",
  "Bedouin & Oriental Show",
  "Camel Riding",
  "Hotel Transfers (Pick up & Drop off)",
  "All Taxes & Service Charges"
],

excluded: [
  "Scarf (Shawl)",
  "Photographer"
],
duration: "7 Hours",

highlights: [
  "Trip Time: Starts from 12:30 PM until 7:30 PM.",
  "Desert adventure with 4x4 Jeep and Beach Buggy experience.",
  "Camel riding and visit to a traditional Bedouin village.",
  "Enjoy Bedouin dinner with Oriental show entertainment."
],

moreDetails: [
  {
    item: "Required Items",
    reason: "National ID or Passport (for non-Egyptians)."
  },
  {
    item: "Clothing",
    reason: "Comfortable clothes"
  },
  {
    item: "Footwear",
    reason: "Sports shoes (sneakers)"
  },
  {
    item: "Extra",
    reason: "Bring a jacket or coat."
  }
],

    description: "Quad biking, camel ride, and desert sunset experience."
  },
  {
    title: "Dolphin House Snorkeling",
    image: "/images/itinerary/dolphin-house.jpg",
      price: 50,
  currency: "€",
  duration: "10 Hours",

pickupTimes: ["08:00 AM"],

included: [
  "Snorkeling gear",
  "Life jacket",
  "Lunch",
  "Drinks",
  "Hotel transfers"
],

excluded: [
  "Photographer"
],

moreDetails: [
  {
    item: "Must Bring",
    reason: "Swimwear, sunscreen, sunglasses, and ID/Passport."
  }
],

    description: "Snorkel with dolphins in their natural habitat."
  },
  {
    title: "Satyah Turtle Bay",
    image: "/images/itinerary/turtle-bay.jpg",
      price: 35,
    pickupTimes: [ "9:00 Am"],
  currency: "€",
 included: [
  "Professional snorkeling guide",
  "Life jacket",
  "Lunch on the yacht",
  "snorkeling eguipment",
  "National park fees ",
  "All necesary permits",
  "Drinks",
  "Hotel transfers"
],
duration:"8hrs",
highlights:["Exact pickup time is confimed during booking"],
excluded: [
  "Professional Photographer"
],
    description: "Snorkeling with turtles and colorful fish."
  },
 {
  title: "Wadi El Gemal National Park",
  image: "/images/itinerary/wadi-el-gemal.jpg",
  price: 28,
  currency: "€",
  duration: "6–8 hours",

  highlights: [
    "Full-day nature experience in Wadi El Gemal National Park",
    "Visit Hankorab Beach (Sharm El Luli)",
    "Explore Qulaan Mangrove area",
    "Snorkeling in crystal-clear waters",
    "Bird watching and desert safari experience",
    "Pickup time set upon booking"
  ],

  moreDetails: [
    {
      item: "Duration",
      reason: "Full-day trip lasting approximately 6 to 8 hours."
    },
    {
      item: "Top Sites",
      reason: "Hankorab Beach (Sharm El Luli) & Qulaan Mangrove."
    },
    {
      item: "Activities",
      reason: "Snorkeling, bird watching, and desert safari."
    },
    {
      item: "Essentials",
      reason: "Comfortable clothing & shoes, sunscreen, sunglasses, ID/Passport."
    }
  ],

  included: [
    "Round-trip transfers",
    "National park entry fees",
    "Lunch",
    "Soft drinks",
    "Guided pastors"
  ],

  excluded: [
    "Snorkeling gear rental (mask & fins)",
    "Professional photos & videos",
    "Personal expenses & souvenirs",
    "Gratuities (tipping)"
  ],

  description: "Discover the natural beauty of Wadi El Gemal National Park with pristine beaches, mangrove forests, snorkeling, wildlife spotting, and a guided full-day adventure."
},
{
  title: "Scuba Diving Trip",
  image: "/images/itinerary/scuba-diving.jpg",
  price: 45,
  currency: "€",
  pickupTimes: ["8:30 AM"],
  duration: "Half-day (1 dive) or Full-day (2 dives)",
  included: [
    "Diving Gear (Tank, BCD, Regulator)",
    "Professional Dive Instructor",
    "Underwater Photos/GoPro Videos",
    "Boat Trip & Lunch (for full-day)",
    "Soft Drinks & Water",
    "Permit",
    "Transfers (Hotel pick-up & drop-off)"
  ],
  excluded: [
    "Diving Computer (Additional rental)",
    "National Park Fees (varies by site)",
    "Staff Gratuities (Tipping)",
    "Photographer"
  ],
  moreDetails: [
    {
      item: "Requirements",
      reason: "ID/Passport, Sunglasses, Sunscreen, Swimwear"
    },
    {
      item: "Encounters",
      reason: "Sea Cows (Dugong), Dolphins, and Sharks"
    },
    {
      item: "Famous Sites",
      reason: "Marsa Mubarak, Elphinstone, Samadai Reef"
    },
    {
      item: "Equipment",
      reason: "Included (Diving & Snorkeling gear)"
    },
    {
      item: "Food & Drinks",
      reason: "Included (Open buffet lunch, Water, Soft drinks)"
    }
  ],
  description: "Full-day or half-day diving excursion with professional instructors, exploring famous reefs and encountering dugongs, dolphins, and sharks."
}
]
,
    included: ["Taxi", "Guide", "Limousine"],
    excluded: [""],
    reviews: ["⭐⭐⭐⭐⭐ Luxurious!", "⭐⭐⭐⭐ Amazing experience!"],
   
  },

  {
    title: "Explore Fayoum’s natural beauty & ancient sites",
    cardTitle: "Pst Babatunde",
    subtitle:"Youth Pastor",
    slug: makeSlug("Cairo Alexandria Highlights Tour"),
    description: "Explore Fayoum’s natural beauty, ancient sites, and desert landscapes on a refreshing escape from the city.",
    heroImage: "/images/pastors/4.jpg",
    heroVideo: "/videos/fayoum.mp4",
    gallery: ["/images/pastors/18.jpg", "/images/pastors/19.jpg"],
    overview: [
  "Fayoum... An oasis of tranquility for your family with SIRI SAND TOURS. ✨",

  "In Fayoum, nature speaks the language of peace, and we guide you on a journey back to simple, authentic beauty.",

  "Wadi El-Hitan (Valley of the Whales): A breathtaking open-air museum and UNESCO World Heritage Site. 🐋⏳",

  "Wadi El-Rayan Waterfalls: Family joy surrounded by the soothing sound of cascading water in the desert. 🌊🏜️",

  "Lake Qarun and Tunis Village: Discover pottery art and creative workshops for your children in a charming countryside setting. 🏺🎨",

  "Mount Al-Mudawara: Witness a magical sunset that brings your family together in serenity. 🌄✨",

  "With SIRI SAND TOURS, Fayoum becomes a peaceful family retreat embraced by nature."
],
    itinerary: [
{
  title: "Tunis Village",
  image: "/images/itinerary/tunis-village.jpg",
  price: 70,
  currency: "€",
  pickupTimes: ["12 noon"],
  highlights: [
    "A \"piece of Europe\" with an authentic Egyptian spirit, this charming village sits on a hill overlooking Lake Qarun.",
    "What's it famous for? It is a world-renowned center for pottery and ceramics, founded by the Swiss craftswoman Eveline Porret.",
    "The atmosphere: Rustic houses with white and blue domes, and tranquil, green streets.",
    "Activities: Try your hand at pottery making, go horseback riding, or enjoy a traditional Egyptian breakfast (feteer and meshaltet) with a panoramic view of the lake."
  ],
  included: [
    "Village Entry & Walk",
    
    "Lake Qarun Viewpoints",
    
    "Visit to the Caricature Museum",
    "Local Guide (if pre-booked)",
    
  ],
  excluded: [
    "Horseback Riding (Optional)",
    "Pottery Classes Fees",
    "Boat Rides on the Lake",
    "Lunch & Traditional Meals"
  ],
  moreDetails: [
    {
      item: "08:00 AM",
      reason: "Traditional Breakfast: Arrive at the village for a rural breakfast (Feteer & Honey) overlooking the lake."
    },
    {
      item: "10:00 AM",
      reason: "Pottery School: Tour the workshops, try hand-making pottery, or shop for unique handicrafts."
    },
    {
      item: "12:00 PM",
      reason: "4x4 Safari: Visit Wadi El Rayan, the Waterfalls, and Mudawarra Mountain with Sandboarding."
    },
    {
      item: "03:00 PM",
      reason: "Authentic Lunch: Return for a home-cooked Egyptian meal (Roasted Duck or local specialties)."
    },
    {
      item: "04:30 PM",
      reason: "Sunset Experience: Felucca ride on Lake Qarun at sunset or Horseback riding through the farms."
    },
    {
      item: "06:00 PM",
      reason: "Art & Departure: Free tour of the Caricature Museum followed by the return journey."
    }
  ],
  description: `A "piece of Europe" with an authentic Egyptian spirit, this charming village sits on a hill overlooking Lake Qarun.

What's it famous for?
It is a world-renowned center for pottery and ceramics, founded by the Swiss craftswoman Eveline Porret.

The atmosphere:
Rustic houses with white and blue domes, and tranquil, green streets.

Activities:
Try your hand at pottery making, go horseback riding, or enjoy a traditional Egyptian breakfast (feteer and meshaltet) with a panoramic view of the lake.`
},
 {
  title: "Wadi El Rayan & Sandboarding",
  image: "/images/itinerary/wadi-el-rayan.jpg",
  price: 25,
  currency: "€",
  pickupTimes: ["10:00 am"],
  duration: "10hrs",

  highlights: [
    "One of the most beautiful nature reserves in Egypt, consisting of two lakes (upper and lower) connected by Egypt’s only waterfalls.",
    "What's it famous for? It boasts the only waterfalls in Egypt and offers rich wildlife, dramatic desert scenery, and stunning natural landscapes.",
    "Experience: Desert landscapes, waterfalls, and thrilling sandboarding adventures.",
    "Top Sites: The Waterfalls, Magic Lake, and Wadi El Hitan (Whale Valley)."
  ],

  included: [
    "National Park Entry Fees",
    "Visit to the Waterfalls",
    "Basic Guided Tour",
    "Group Transport (if pre-booked)"
  ],

  excluded: [
    "Sandboarding Gear Rental",
    "Magic Lake Safari (4x4 Jeep)",
    "Traditional Bedouin Lunch",
    "Boat Rides in the Lake"
  ],

  moreDetails: [
    {
      item: "10:00 AM",
      reason: "Departure from Cairo or Giza towards Wadi El Rayan Nature Reserve."
    },
    {
      item: "12:00 PM",
      reason: "Waterfalls Visit: Explore Egypt’s only waterfalls and enjoy photo stops."
    },
    {
      item: "01:30 PM",
      reason: "Sandboarding Experience: Enjoy sliding down the desert dunes near Magic Lake."
    },
    {
      item: "02:30 PM",
      reason: "Magic Lake Stop: Relax by the lake whose waters change color with sunlight."
    },
    {
      item: "03:30 PM",
      reason: "Optional Activities: 4x4 Safari ride, boat ride on the lake, or Traditional Bedouin lunch."
    },
    {
      item: "05:00 PM",
      reason: "Return trip to Cairo or Giza (Full-day experience)."
    }
  ],

  description: `One of the most beautiful nature reserves in Egypt, Wadi El Rayan consists of two lakes (upper and lower) connected by Egypt’s only waterfalls.

What's it famous for?
It boasts the only waterfalls in Egypt and is an area rich in wildlife and stunning desert scenery.

Experience:
Desert landscapes, waterfalls, and sandboarding adventures make it a perfect full-day escape from Cairo or Giza.

Top Sites:
The Waterfalls, Magic Lake, and Wadi El Hitan (Whale Valley).

Activities:
Sandboarding, 4x4 desert safari, boat rides on the lake, and memorable photo stops across the reserve.`
}
]
,
    included: ["Hotel", "Guide", "Meals"],
    excluded: ["Flights", "Tips"],
    reviews: ["⭐⭐⭐⭐⭐ Great tour!", "⭐⭐⭐⭐ Excellent guide."],
  
  },

  {
    title: "A peaceful escape to Egypt’s remote Siwa Oasis",
    cardTitle: "pst ....",
    subtitle:"..... Pastor",
    slug: makeSlug("Red Sea  Desert Safari Tour"),
    description: "A peaceful escape to Egypt’s remote Siwa Oasis, blending ancient history, salt lakes, and desert adventure.",
    heroImage: "/images/pastors/1.jpg",
    heroVideo: "/videos/siwa.mp4",
    gallery: [
      "/images/pastors/21.jpg",
      "/images/pastors/20.jpg"
    ],
  overview: [
  "Siwa... Your family’s dream oasis with SIRI SAND TOURS. ✨",

  "In Siwa, time stands still and the soul finds peace. We invite you to experience refined simplicity with your loved ones.",

  "Shali Fortress: Walk through the ruins of the ancient mud-brick city built from kershif and salt. 🏰🧱",

  "Cleopatra’s Spring: Enjoy family moments in crystal-clear natural springs beneath the shade of palm trees. 🏊‍♂️🌴",

  "Great Sand Sea: Experience safe safari adventures and sandboarding fun for all ages. 🏜️🏂",

  "Salt Lakes: Float effortlessly in turquoise waters for a truly unique experience. 💎🌊",

  "Temple of the Oracle: Stand where Alexander the Great once sought his destiny. 🏛️📜",

  "With SIRI SAND TOURS, Siwa is not just a trip — it’s a soulful family journey."
],
  itinerary: [
  {
    title: "Shali Fortress & Mountain of the Dead",
    image: "/images/itinerary/shali-fortress.jpg",
      price: 45,
  currency: "€",
  pickupTimes: ["9:00 AM - 10:00 AM"],
  highlights: [
  "Day 1: Heritage Discovery - Tour of Shali Fortress with panoramic view of the oasis.",
  "Day 2: Wellness & Adventure - Explore history at Mountain of the Dead and the Temple of the Oracle.",
  "Day 3: Relaxation & Memories - Tour of Dakrur Mountain, the icon of sand therapy."
],

included: [
  "Entrance fees for Shali Old City and the Salt Lake",
  "Authentic Siwan lunch at a local restaurant",
  "Local transfers within Siwa (4x4 Jeep or AC Van)",
  "Professional local guide explaining the history of Shali and Siwa",
  "Swim in the Salt Lake crystal blue pools",
  "Security permits required for the oasis tour",
  "Pickup from your hotel in Siwa (between 9:00 AM – 10:00 AM)"
],

excluded: [
  "Any additional drinks during lunch",
  "Personal expenses (Siwan dates, oils, salt lamps, or other souvenirs)",
  "Tipping for guide or driver (optional)",
  "Optional activities (e.g., Sandboarding session)",
  "Any special government entrance fees not listed"
],


moreDetails: [
  {
    item: "Day 1",
    reason: "Heritage Discovery: Shali Fortress panoramic views."
  },
  {
    item: "Day 2",
    reason: "Wellness & Adventure: Mountain of the Dead and Temple of the Oracle exploration."
  },
  {
    item: "Day 3",
    reason: "Relaxation & Memories: Dakrur Mountain visit for sand therapy experience."
  },
    {
    item: "Transfers",
    reason: "Local transport by 4x4 Jeep or air-conditioned van within Siwa"
  },
  {
    item: "Tour Guide",
    reason: "Local expert explaining the history of Shali and Siwa"
  },
  {
    item: "Security Permits",
    reason: "Required permits arranged for the oasis tour"
  }
],
duration:"10:00 AM – 4:00 PM",
    description: "A natural sulfur spring surrounded by palm trees, famous for swimming and relaxation."
  },
  {
    title: "Salt Lakes & Cleopatra’s Bath",
    image: "/images/itinerary/salt-lake.webp",
      price: 40,
  currency: "€",
  pickupTimes: ["9:00 AM - 10:00 AM"],
 highlights: [
  "Cleopatra's Spring - Swimming & Cafes.",
  "Siwan Lunch - Traditional Meal (Mandi).",
  "Salt Lakes - Floating in Salt Mines.",
  "Fatnas Island.",
  "Sunset & Palm Groves."
],

included: [
  "Entrance fees for Shali Old City and the Salt Lake",
  "Authentic Siwan lunch at a local restaurant",
  "Local transfers within Siwa (4x4 Jeep or AC Van)",
  "Professional local guide explaining the history of Shali and Siwa",
  "Swim in the Salt Lake crystal blue pools",
  "Security permits required for the oasis tour",
  "Pickup from your hotel in Siwa (between 9:00 AM – 10:00 AM)"
],

excluded: [
  "Any additional drinks during lunch",
  "Personal expenses (Siwan dates, oils, salt lamps, or other souvenirs)",
  "Tipping for guide or driver (optional)",
  "Optional activities (e.g., Sandboarding session)",
  "Any special government entrance fees not listed"
],


moreDetails: [
  {
    item: "Cleopatra's Spring",
    reason: "Visit before Salt Lakes to rinse off the salt later; enjoy swimming and cafes."
  },
  {
    item: "Siwan Lunch",
    reason: "Experience a traditional meal (Mandi)."
  },
  {
    item: "Salt Lakes",
    reason: "Float effortlessly in the mineral-rich salt waters."
  },
  {
    item: "Fatnas Island",
    reason: "Explore the serene island surroundings."
  },
  {
    item: "Sunset & Palm Groves",
    reason: "End the day with a beautiful sunset among palm groves."
  }
],

    description: "A historic fortress made of Kershef (mud and salt), offering panoramic views of the oasis."
  },
  {
    title: "Great Sand Sea Safari",
    image: "/images/itinerary/sand-sea.jpg",
      price: 60,
  currency: "€",
  pickupTimes: ["2:00 PM – 3:00 PM depending on location"],
 highlights: [
  "Enjoy a breathtaking sunset in the Siwa Desert",
  "Adventure through the dunes in a 4x4 Jeep Land Cruiser",
  "Try sandboarding on the golden desert dunes",
  "Swim in natural Cold and Hot Springs",
  "Experience a traditional Siwan Bedouin dinner and tea in the desert"
],

included: [
  "Pickup from Siwa between 2:00 PM – 3:00 PM (for sunset views)",
  "4x4 Jeep Land Cruiser with professional desert driver",
  "Desert expert and local Siwan guide",
  "Sandboarding experience on the dunes",
  "Swimming in Cold and Hot Springs",
  "Traditional Siwan Bedouin dinner and tea in the desert",
  "Desert entry permits and park fees (security permits)"
],

excluded: [
  "Any additional drinks during lunch/dinner",
  "Optional activities (e.g., Camel rides or Quad biking)",
  "Personal expenses (souvenirs or professional photography)",
  "Tipping for driver or guide (optional)",
  "Any extra tickets for private or special areas"
],

infantPrice: "",

extraInfo: [
  "This tour is designed for sunset views in the desert",
  "Tipping for the driver or guide is optional"
],

moreDetails: [
  {
    item: "Departure Time",
    reason: "Pickup from Siwa between 2:00 PM – 3:00 PM for sunset experience"
  },
  {
    item: "Transfers",
    reason: "4x4 Jeep Land Cruiser with professional desert driver"
  },
  {
    item: "Activities",
    reason: "Sandboarding on dunes and swimming in natural Cold/Hot Springs"
  },
  {
    item: "Meals",
    reason: "Traditional Siwan Bedouin dinner and tea served in the desert"
  },
  {
    item: "Tour Guide",
    reason: "Desert expert and local Siwan guide"
  },
  {
    item: "Security Permits",
    reason: "Desert entry permits and park fees included"
  }
],
duration:"2:00 PM - 6:00 PM",
    description: "An off-road 4x4 journey into the Great Sand Sea, including sandboarding and cold lakes."
  },
  
]
,
    included: ["Hotel", "Guide", "Meals", "Transport"],
    excluded: ["Flights", "Tips"],
    reviews: ["⭐⭐⭐⭐ Amazing tour!", "⭐⭐⭐⭐⭐ Loved it!"],
   
  },

  {
    title: "Explore Aswan’s serene Nile scenery & ancient temples",
    cardTitle: "Pst .. ",
    subtitle:".... Pastor",
    slug: makeSlug("Ancient Egypt Discovery Tour"),
    description: "Explore Aswan’s serene Nile scenery, ancient temples, and Nubian culture.",
    heroImage: "/images/pastors/10.jpg",
    heroVideo: "/videos/aswan.mp4",
    gallery: ["/images/pastors/12.jpg", "/images/pastors/13.jpg"],
   overview: [
  "Aswan... The magic of the Nile and the warmth of the SIRI SAND TOURS family. ✨",

  "In Aswan, time slows down as you savor precious moments with your family surrounded by serene landscapes and Nubian charm.",

  "The Majesty of the Temples: Visit the magnificent Abu Simbel and the enchanting Philae Temple rising from the Nile. 🏛️💧",

  "The Nubian Village: Share laughter, colors, and warm hospitality in authentic Nubian homes. 🏡🌈",

  "Nature and History: Discover the Botanical Garden and the secrets of ancient craftsmanship at the Unfinished Obelisk. 🌴🗿",

  "The Nile Sunset: Enjoy a peaceful felucca ride around Elephantine Island as the sun paints the sky. ⛵🌅",

  "With SIRI SAND TOURS, you’re not just visitors in Aswan — you’re welcomed into the heart of the Nile."
],
    itinerary: [
{ 
  title: "High Dam, Philae & Nubian Village",
  image: "/images/itinerary/philae.jpg",
  
  price: 60,
  currency: "€",
  
  duration: "6hrs",

  extraInfo: [
    "Free Cancellation: Cancel up 24hrs in advance for full refund",
    "Reserve now & pay later: Keep your travel plans flexible - book your spot and pay nothing today"
  ], 

  pickupTimes: ["08:00 AM - 04:00 PM"],

  highlights: [
    "Stand in awe at Philae Temple, rescued from the Nile's rising waters",
    "Enjoy the unique view of the Nile as it crosses Aswan High Dam",
    "Find out the secrets and the story behind the Unfinished Obelisk",
    "Discover the vibrant Nubian Village and its painted alleyways",
    "Step into history, culture, and modern miracles in one unforgettable day"
  ],

  included: [
    "Hotel Pickup & Drop-off",
    "Motorboat to Philae Island",
    "Licensed Tour Guide",
    "Scenic Nile boat trip",
    "Village walking tour",
    "Traditional welcome drink",
    "Live tour guide (Arabic, English, German, Spanish, French)"
  ],

  excluded: [
    "Entry Tickets (Bank Card Only)",
    "Personal expenses",
    "Lunch (Optional)",
    "Camel rides",
    "Tipping (Drivers/Boatmen)"
  ],

  description: "A stunning temple complex dedicated to the goddess Isis, accessible by a scenic short boat ride on the Nile."
},
{
  title: "Abu Simbel & Kom Ombo",
  image: "/images/itinerary/abu-simbel.jpg",
  price: 80,
  currency: "€",

  duration: "8–9 Hours",

  extraInfo: [
    "Free Cancellation: Cancel up 24hrs in advance for full refund",
    "Reserve now & pay later: Keep your travel plans flexible - book your spot and pay nothing today"
  ],

  pickupTimes: ["04:00 AM - 05:00 AM"],

  highlights: [
    "Explore the magnificent Abu Simbel Temples",
    "Marvel at the Great Temple of Ramses II",
    "Visit the Temple of Queen Nefertari",
    "Enjoy comfortable pickup and drop-off from your hotel in Aswan"
  ],

  moreDetails: [
    {
      item: "Start Time",
      reason: "Usually between 4:00 AM – 5:00 AM (3-hour drive each way)."
    },
    {
      item: "Total Duration",
      reason: "8 to 9 hours including travel and guided tour."
    },
    {
      item: "Main Highlights",
      reason: "Great Temple of Ramses II & Temple of Queen Nefertari."
    }
  ],

  included: [
    "Transportation: Private or Shared Air-Conditioned vehicle",
    "Pickup: From your Hotel or Nile Cruise in Aswan",
    "Professional Egyptologist guide (depending on booking option)",
    "Drop-off: Back to your location in Aswan"
  ],

  excluded: [
    "Entry Tickets: Purchased at the gate (strictly by Bank Card)",
    "Meals: Breakfast box (usually requested from your hotel)",
    "Drinks: Any beverages during the trip"
  ],

  description: "A day trip to the iconic rock-cut temples of Ramses II. The early start is essential to beat the desert heat."
},
{
  title: "Nile Cruise Aswan – Luxor",
  image: "/images/itinerary/nile-cruise2.jpg",
  price: 90,
  currency: "€",

  duration: "4 Days / 3 Nights",

  pickupTimes: ["12:00 PM (Noon)"],

  extraInfo: [
    "Free Cancellation: Cancel up 24hrs in advance for full refund",
    "Reserve now & pay later: Keep your travel plans flexible - book your spot and pay nothing today"
  ],

  highlights: [
    "Explore the temples of Philae, Kom Ombo, Edfu, Luxor, and Karnak",
    "Cruise the Nile with overnights in Aswan, Edfu, and Luxor",
    "Visit the Valley of the Kings and Hatshepsut Temple",
    "Optional visit to Abu Simbel or Hot Air Balloon in Luxor"
  ],

  moreDetails: [
    {
      item: "Day 1",
      reason: "Arrival in Aswan, visit Philae Temple & High Dam, then check-in on the cruise."
    },
    {
      item: "Day 2",
      reason: "Sailing to Kom Ombo (visit the temple) then continue to Edfu."
    },
    {
      item: "Day 3",
      reason: "Visit Edfu Temple, cross Esna Lock, and arrive in Luxor to visit Karnak & Luxor Temples."
    },
    {
      item: "Day 4",
      reason: "Check-out, visit Valley of the Kings, Hatshepsut Temple, and Colossi of Memnon."
    },
    {
      item: "Accommodation",
      reason: "3 Nights on a 5-star cruise ship."
    },
    {
      item: "Meals",
      reason: "Full Board (Breakfast, Lunch, and Dinner)."
    },
    {
      item: "Tours",
      reason: "All mentioned sightseeing with a professional Egyptologist guide."
    },
    {
      item: "Transfers",
      reason: "Pickup in Aswan and drop-off in Luxor."
    }
  ],

  included: [
    "Accommodation: 3 Nights on a 5-star cruise ship",
    "Meals: Full Board (Breakfast, Lunch, and Dinner)",
    "All mentioned sightseeing pastors with a professional Egyptologist guide",
    "Transfers: Pickup in Aswan and drop-off in Luxor",
    "Guide speaks English (other languages upon request)",
    "Guest contact one day before arrival for coordination"
  ],

  excluded: [
    "Entrance Fees: Tickets to the temples (paid via bank card)",
    "Drinks: Beverages (Soda, Water, etc.) at the restaurant or bar",
    "Tips: Gratuity for the boat crew and drivers",
    "Optional Tours: Abu Simbel Temples or Hot Air Balloon in Luxor"
  ],

  description: "A floating 5-star cruise journey from Aswan to Luxor, visiting Egypt’s most iconic Nile-side temples with full-board accommodation and guided excursions."
}
]
,
    included: ["Hotel", "Guide", "Meals", "Transport"],
    excluded: ["Flights", "Tips"],
    reviews: ["⭐⭐⭐⭐⭐ Excellent!", "⭐⭐⭐⭐ Fun trip!"],
   
  },

  {
    title: "Don't just be a tourist... be part of the family! SIRI SAND TOURS designs a city tour like you've never dreamed of (8:00 am - 9:00 pm)",
    cardTitle: "Pst ....",
    subtitle:"... Pastor",
    slug: makeSlug("Egypt Cultural Heritage Tour"),
    description: "Immerse yourself in Egypt’s history and culture.",
    heroImage: "/images/pastors/9.jpg",
    heroVideo: "/videos/hurghada.mp4",
    gallery: ["/images/pastors/10.jpeg", "/images/pastors/11.jpg"],
  overview: [
  "Your family is always welcome at SIRI SAND TOURS in Hurghada. ✨",

  "Hurghada is more than just the sea — it’s about creating unforgettable memories with your loved ones. At SIRI SAND TOURS, we take you on a heartfelt journey filled with adventure, comfort, and togetherness.",

  "The Depths of Magic: Enjoy snorkeling and diving pastors to discover the most beautiful coral reefs alongside your children. 🐠🤿",

  "The Mystery of the Desert: Experience thrilling safari trips and a warm Bedouin dinner under the stars of Hurghada. 🏜️✨",

  "The Spirit of the City: Explore Hurghada Marina, the Grand Mosque, and St. Shenouda Church, where culture and beauty meet. 🕌⛪",

  "Luxury and Comfort: Our family-oriented planning ensures your safety, relaxation, and enjoyment every step of the way. 🤝❤️",

  "With SIRI SAND TOURS, you’re not just tourists — you’re part of our extended family."
],
    itinerary: [
  {
    title: "Tawila Island Resort (VVIP)",
    image: "/images/itinerary/tawila.jpg",
    duration: "3 hrs",
       price: 320,
  currency: "€",
  pickupTimes:["customized Time"],
  highlights: [
  "Morning Activity",
  "Evening Experience",
  "Arrival & Resort Check-in",
  "Welcome Sunset Dinner",
  "Island Exploration & Swimming",
  "Beachside Yoga Session",
  "Coral Reef Snorkeling Trip",
  "Outdoor Movie Night",
  "Luxury Spa & Wellness Treatment",
  "Private In-Villa Dining",
  "Kayaking & Paddle Boarding",
  "Beach BBQ Party",
  "Relaxation & Free Leisure Time",
  "Lounge Music & Cocktails",
  "Farewell Breakfast",
  "Checkout & Departure"
],
included: [
  "Pickup from your hotel between 3:30 PM – 4:30 PM (Sunset trip)",
  "Round-trip by air-conditioned tourist vehicle",
  "Quad Biking (ATV), Spider Car (Buggy), and Camel ride",
  "Oriental show (Belly dance, Tanoura, and Fire show)",
  "Traditional Bedouin tea in the desert camp",
  "Authentic Bedouin dinner served in a Bedouin tent"
],

excluded: [
  "Any beverages not included with dinner",
  "Renting or buying a desert scarf (Shemagh)",
  "Extra pastors or additional activities not listed",
  "Personal expenses (professional photography or souvenirs)",
  "Tipping for the desert guide or driver (optional)"
],
moreDetails: [
{
    item: "Departure Time",
    reason: "Pickup from your location in Hurghada (Customized time.)"
  },

  {
    item: "Morning Activity",
    reason: "Start your day with curated morning experiences."
  },
  {
    item: "Evening Experience",
    reason: "Enjoy relaxing evening activities and entertainment."
  },
  {
    item: "Arrival & Resort Check-in",
    reason: "Settle into your resort upon arrival."
  },
  {
    item: "Welcome Sunset Dinner",
    reason: "Dine while watching a beautiful sunset."
  },
  {
    item: "Island Exploration & Swimming",
    reason: "Explore the island and enjoy swimming sessions."
  },
  {
    item: "Beachside Yoga Session",
    reason: "Participate in a relaxing yoga session by the beach."
  },
  {
    item: "Coral Reef Snorkeling Trip",
    reason: "Discover vibrant marine life while snorkeling."
  },
  {
    item: "Outdoor Movie Night",
    reason: "Enjoy a cinematic experience under the stars."
  },
  {
    item: "Luxury Spa & Wellness Treatment",
    reason: "Indulge in wellness and spa therapies."
  },
  {
    item: "Private In-Villa Dining",
    reason: "Savor exclusive dining within your villa."
  },
  {
    item: "Kayaking & Paddle Boarding",
    reason: "Engage in water sports and active exploration."
  },
  {
    item: "Beach BBQ Party",
    reason: "Enjoy a lively BBQ party by the beach."
  },
  {
    item: "Relaxation & Free Leisure Time",
    reason: "Unwind with free time at your own pace."
  },
  {
    item: "Lounge Music & Cocktails",
    reason: "Experience evening music with cocktails."
  },
  {
    item: "Farewell Breakfast",
    reason: "Conclude your stay with a memorable breakfast."
  },



  {
    item: "Checkout & Departure",
    reason: "Check out from the resort and depart."
  }
],

    description: "Luxury island day experience."
  },
  {
    title: "Hula Hula Island",
    image: "/images/itinerary/hula.jpg",
       price: 23,
  pickupTimes: ["8:00 AM - 9:00 AM"],

currency: "€",

included: [
  "Hotel Transfers (Round-trip to the marina)",
  "Boat Cruise to Hula Hula Island and back",
  "Island Permits & Entry Fees",
  "Access to umbrellas, beanbags & sunbeds",
  "Snorkeling Guide",
  "Snorkeling Gear (Mask, fins & life jacket)",
  "Guided Snorkeling Stops at coral reefs",
  "Water Sports (Banana & Cobra - if pre-booked)",
  "Open Buffet Lunch (on boat or island restaurant)",
  "Unlimited Water, Tea & Coffee on boat",
  "Beach Chairs",
  "Access to tropical-themed photo spots & relaxation areas",
  "Professional guides & lifeguards for safety"
],

excluded: [
  "Professional Photographer (Photo/Video sessions)",
  "Island Drinks",
  "Canned sodas & Alcoholic beverages outside buffet",
  "Extra Water Sports (e.g., Parasailing unless pre-booked)",
  "Transfers from Makadi, Sahl Hasheesh, El Gouna, Soma Bay",
  "Tipping for boat crew or driver (Optional)"
],

highlights: [
  "Timing - 9:00 AM to 4:00 PM.",
  "Pickup between 8:00 AM - 9:00 AM.",
  "Boat cruise to Hula Hula Island with guided snorkeling stops.",
  "Mandatory Items - ID/Passport, Comfortable Clothes, Swimwear, Sunscreen, Sunglasses."
],

moreDetails: [
  {
    item: "Timing",
    reason: "Tour runs from 9:00 AM to 4:00 PM."
  },
  {
    item: "Pickup",
    reason: "Pickup from your hotel between 8:00 AM - 9:00 AM."
  },
  {
    item: "Snorkeling Stops",
    reason: "Guided swim stops at the best coral reef spots near the island."
  },
  {
    item: "Safety",
    reason: "Professional guides and lifeguards monitor all swimming activities."
  },
  {
    item: "Mandatory Items",
    reason: "Bring ID/Passport, Comfortable Clothes, Swimwear, Sunscreen, Sunglasses."
  }
],

    description: "Snorkeling and beach relaxation."
  },
  {
    title: "Eden Island",
    image: "/images/itinerary/eden.jpg",
       price: 40,
  currency: "€",
  pickupTimes:["8:15am - 8:45am"],
  highlights: [
  "Access and stay at Eden Island beach",
  "Comfortable boat trip to and from the island",
  "Guided snorkeling stops at the best coral reefs nearby",
  "Open buffet lunch served on the island or boat"
],

included: [
  "Entrance fees and stay at Eden Island beach",
  "Comfortable boat trip to and from the island",
  "Guided snorkeling stops at the best coral reefs nearby",
  "Open buffet lunch served on the island or boat",
  "Round-trip by air-conditioned vehicle to the jetty",
  "Necessary security permits for the boat passage",
  "Pickup from your hotel between 8:00 AM – 9:00 AM"
],

excluded: [
  "Any beverages not included with lunch",
  "Renting snorkeling gear (Mask, Fins, Life Jacket)",
  "Extra cost water sports (Banana Boat or Sofa)",
  "Personal expenses (professional photography or souvenirs)",
  "Tipping for the boat crew or driver (optional)"
],

extraInfo: [
  "Departure Time: Pickup from your hotel between 8:00 AM – 9:00 AM",
  "Security permits are necessary for the boat passage"
],

moreDetails: [
  {
    item: "Island Access",
    reason: "Entrance fees and stay at Eden Island beach"
  },
  {
    item: "Boat Trip",
    reason: "Comfortable boat trip to and from the island"
  },
  {
    item: "Snorkeling Stops",
    reason: "Guided stops at the best coral reefs nearby"
  },
  {
    item: "Lunch",
    reason: "Open buffet lunch served on the island or boat"
  },
  {
    item: "Transfers",
    reason: "Round-trip by air-conditioned vehicle to the jetty"
  }
],
    description: "Island escape with coral reefs."
  },
  {
    title: "Orange Bay Island",
    image: "/images/itinerary/orange-bay.jpg",
       price:25 ,
  currency: "€",
pickupTimes: ["8:00 AM - 9:00 AM"],
included: [
  "Round-trip Hotel Transfers to the Marina",
  "Boat Cruise to Orange Bay Island & snorkeling spots",
  "Island Entry Fees to Orange Bay private beach & wooden swings",
  "Snorkeling Guide",
  "Two Guided Snorkeling Stops at coral reefs",
  "Snorkeling Gear (Mask, fins & life jacket)",
  "Water Sports (Short Banana Boat or Quattro ride)",
  "Open Buffet Lunch (on boat or island restaurant if booked)",
  "Unlimited Water, Tea & Coffee on the boat",
  "Beach Chairs",
  "Professional guides & rescue monitoring during swimming"
],

excluded: [
  "Professional Photographer (Action photos & videos)",
  "Island Drinks",
  "Canned sodas or fresh juices outside water/tea buffet",
  "Transfers from Makadi, Sahl Hasheesh, El Gouna, Soma Bay",
  "Tipping for boat crew or driver (Optional)",
  "Personal Expenses (Towels & souvenirs)"
],

highlights: [
  "Timing - 9:00 AM to 4:00 PM.",
  "Pickup between 8:00 AM - 9:00 AM.",
  "Boat cruise to Orange Bay Island with two guided snorkeling stops.",
  "Water sports included (Banana Boat or Quattro ride).",
  "Mandatory Items - ID/Passport, Comfortable Clothes, Swimwear, Sunscreen, Sunglasses."
],

moreDetails: [
  {
    item: "Timing",
    reason: "Tour runs from 9:00 AM to 4:00 PM."
  },
  {
    item: "Departure Time",
    reason: "Pickup from your hotel between 8:00 AM - 9:00 AM."
  },
  {
    item: "Snorkeling",
    reason: "Two guided snorkeling stops at the most beautiful coral reefs."
  },
  {
    item: "Safety",
    reason: "Professional guides and rescue team monitor all swimming activities."
  },
  {
    item: "Mandatory Items",
    reason: "Bring ID/Passport, Comfortable Clothes, Swimwear, Sunscreen, Sunglasses."
  }
],
    description: "Relax on sandy beaches and swim."
  },
  {
  title: "Paradise Island",
  image: "/images/itinerary/paradise.jpg",
  price: 50,
  pickupTimes: ["8:00 AM - 9:00 AM"],
  infantPrice: "",

  included: [
    "Round-trip Hotel Transfers to the Marina (Air-conditioned vehicle)",
    "Boat Cruise to Paradise Island",
    "Island Entry Fees",
    "Snorkeling Guide",
    "Snorkeling Gear (Mask, fins & life jacket)",
    "Guided Snorkeling Stops",
    "Water Sports (Banana Boat & Cobra)",
    "Parasailing Flight (Single, Double or Triple depending on weight)",
    "Safety Gear (Harness & Life Jacket)",
    "Professional Safety Briefing before takeoff",
    "Speedboat ride for Parasailing takeoff",
    "Open Buffet Lunch & Soft Drinks (on Yacht)",
    "Beach Chairs",
    "Experienced boat crew & modern equipment"
  ],

  excluded: [
    "Professional Photographer (Boat or Drone photos/videos)",
    "Island Drinks",
    "Canned sodas or additional beverages at the pier",
    "Transfers from Makadi, Sahl Hasheesh, El Gouna, Soma Bay",
    "Meals during parasailing-only activity",
    "Tipping for boat captain or driver (Optional)"
  ],

  highlights: [
    "Timing - 9:00 AM to 4:00 PM.",
    "Pickup between 8:00 AM - 9:00 AM.",
    "Parasailing flight 30–50 meters above the Red Sea.",
    "8–10 minutes flight time in the air.",
    "Optional water splash experience before landing.",
    "Mandatory Items - ID/Passport, Comfortable Clothes, Swimwear, Sunscreen, Sunglasses."
  ],

  moreDetails: [
    {
      item: "Flight Type",
      reason: "Single, Double or Triple flight depending on total weight."
    },
    {
      item: "Flight Height",
      reason: "Fly at approximately 30 to 50 meters above sea level."
    },
    {
      item: "Flight Duration",
      reason: "Approximately 8 to 10 minutes in the air."
    },
    {
      item: "Safety",
      reason: "High-quality harness, life jacket, professional briefing, and experienced crew."
    },
    {
      item: "Recovery",
      reason: "Safe takeoff and landing directly from the boat platform."
    },
    {
      item: "Timing",
      reason: "Tour runs from 9:00 AM to 4:00 PM."
    }
  ],

  description: "Full-day boat trip to Paradise Island including snorkeling, water sports, parasailing experience, buffet lunch, and professional safety supervision."
},
{
  title: "Sharm El Naga Beach",
  image: "/images/itinerary/sharm.jpg",
  price: 35,
  pickupTimes: ["8:30 AM - 9:30 AM"],
  currency: "€",

  highlights: [
    "Schedule - 08:00 AM to 04:30 PM.",
    "Direct shore snorkeling (No boat needed).",
    "Open buffet lunch at the resort restaurant.",
    "Access to umbrellas, sunbeds, showers & toilets.",
    "Kids playground and shallow swimming areas.",
    "Requirements - ID/Passport, Sunglasses, Swimwear, Sunscreen."
  ],

  moreDetails: [
    {
      item: "Schedule",
      reason: "Tour runs from 08:00 AM to 04:30 PM."
    },
    {
      item: "Departure Time",
      reason: "Pickup from your hotel between 8:30 AM – 9:30 AM."
    },
    {
      item: "Snorkeling",
      reason: "Direct access to coral reefs from the shore (No boat required)."
    },
    {
      item: "Beach Access",
      reason: "Entry fees to the protected nature reserve and resort included."
    },
    {
      item: "Facilities",
      reason: "Use of umbrellas, sunbeds, showers, and toilets."
    },
    {
      item: "Safety",
      reason: "Professional lifeguards monitoring the shore and snorkeling area."
    },
    {
      item: "Requirements",
      reason: "Bring ID/Passport, Sunglasses, Swimwear, Sunscreen."
    }
  ],

  included: [
    "Round-trip Transfers by air-conditioned vehicle to Safaga / Sharm El Naga",
    "Entry Fees to the protected nature reserve",
    "Shore Snorkeling Access",
    "Snorkeling Gear (Mask, fins & life jacket)",
    "Snorkeling Guide",
    "Open Buffet Lunch at the resort restaurant",
    "Water & Tea during lunch buffet",
    "Access to umbrellas, sunbeds, showers & toilets",
    "Kids playground & shallow swimming areas",
    "Professional lifeguards on duty"
  ],

  excluded: [
    "Professional Photography (Photo or video sessions on the beach)",
    "Extra bottled or canned drinks outside the buffet",
    "Private pool access (if applicable)",
    "Tipping for guides or driver (Optional)"
  ],

  description: "Relaxing beach day at Sharm El Naga with direct shore snorkeling, open buffet lunch, full resort facilities, and professional lifeguard supervision."
},
{
  title: "Sinbad Submarine",
  image: "/images/itinerary/sinbad.jpg",
  price: 22,
  pickupTimes: ["9:00 AM", "11:00 AM", "1:00 PM"],
  currency: "€",

  highlights: [
    "Available daily with multiple departure slots.",
    "Descend to 22 meters (72 feet) below sea level.",
    "45–50 minutes underwater submarine experience.",
    "Close-up views of coral reefs & Red Sea marine life.",
    "Professional diver fish-feeding show."
  ],

  moreDetails: [
    {
      item: "Depth",
      reason: "Descending to a depth of 22 meters (72 feet) below sea level."
    },
    {
      item: "Duration",
      reason: "Approximately 45 to 50 minutes underwater."
    },
    {
      item: "Marine Life",
      reason: "Close-up views of coral reefs and diverse Red Sea fish."
    },
    {
      item: "Cabin Comfort",
      reason: "Fully air-conditioned cabin with individual viewing windows."
    },
    {
      item: "Safety",
      reason: "Professional submarine pilots with constant surface contact."
    },
    {
      item: "Diver Show",
      reason: "A professional diver performs a fish-feeding show outside the submarine."
    },
    {
      item: "Facilities",
      reason: "Restrooms and waiting lounge available at the departure pier."
    }
  ],

  included: [
    "Round-trip hotel transfers by air-conditioned vehicle to Sindbad Pier",
    "Submarine dive experience",
    "45–50 minutes underwater",
    "Professional submarine pilots",
    "Diver fish-feeding show",
    "Museum entry at Sindbad Submarine pier",
    "Access to waiting lounge facilities"
  ],

  excluded: [
    "Professional photography taken by onboard crew",
    "Meals during the submarine activity",
    "Canned sodas or snacks at the marina café",
    "Tipping for submarine pilots or driver (Optional)"
  ],

  description: "Unique underwater submarine adventure descending 22 meters below the Red Sea, featuring coral reefs, colorful marine life, diver show, and full air-conditioned cabin comfort."
},
 {
  title: "Parasailing",
  image: "/images/itinerary/parasailing.jpg",
  price: 20,
  pickupTimes: ["Flexible (Morning or Afternoon)"],
  currency: "€",

  description: "Fly over the Red Sea at an altitude of approximately 30 to 50 meters and enjoy breathtaking views.",

  highlights: [
    "Single Flight: One person flying solo (up to weight limits)",
    "Double/Triple Flight: Two or three people (depending on weight)",
    "Height: Approximately 30 to 50 meters",
    "Splash Option: Optional water dip before landing",
    "Optional - Double Flight: Max weight 150 kg (for 2 people)",
    "Add-ons - Transportation can be added (extra charge)",
    "Kids - Not suitable for children",
    "Essentials - Swimwear, Sunglasses, and a Towel"
  ],

  moreDetails: [
    {
      item: "Safety Gear",
      reason: "High-quality harness and life jacket provided."
    },
    {
      item: "Briefing",
      reason: "Professional instructions on takeoff and landing."
    },
    {
      item: "Safety",
      reason: "Experienced boat crew and modern parasailing equipment."
    },
    {
      item: "Recovery",
      reason: "Safe takeoff and landing directly from the boat platform."
    },
    {
      item: "Optional",
      reason: "Double Flight option available for up to 150 kg (2 people)."
    },
    {
      item: "Add-ons",
      reason: "Transportation can be added for an extra charge."
    },
    {
      item: "Kids",
      reason: "Activity is not suitable for children."
    },
    {
      item: "Essentials",
      reason: "Bring Swimwear, Sunglasses, and a Towel."
    }
  ],

  included: [
    "Hotel pickup (Flexible daily slots)",
    "Round-trip air-conditioned transfers to the marina",
    "Speedboat ride to takeoff point",
    "Professional safety briefing",
    "Life jacket and harness",
    "8–10 minutes flight time"
  ],

  excluded: [
    "Professional photos/videos (boat or drone)",
    "Meals",
    "Drinks",
    "Tipping (optional)"
  ]
},
 {
  title: "Hurghada Aquarium",
  image: "/images/itinerary/hurghada-aquarium.jpg",
  price: 30,
  pickupTimes: ["10:00am", "2:00pm"],
  currency: "€",

  description: "Explore marine life, rainforest habitats, and fascinating exhibits at Hurghada Aquarium.",

  highlights: [
    "Marine Life: Over 1,200 species including sharks, rays, and turtles",
    "Mini Zoo: Crocodiles, monkeys, and birds",
    "Rainforest: Simulated tropical jungle environment",
    "Shark Feeding: Scheduled daily shows",
    "Indoor Activity: Fully air-conditioned",
    "Wheelchair & Stroller Accessible",
    "Underwater Glass Tunnel Experience",
    "Fossil Exhibit: 'Valley of the Whales' museum"
  ],

  moreDetails: [
    {
      item: "Accessibility",
      reason: "Wheelchair and stroller-friendly pathways."
    },
    {
      item: "Gift Shop",
      reason: "On-site shop for marine-themed souvenirs."
    },
    {
      item: "Guide",
      reason: "Clear signage in English and Arabic throughout the park."
    }
  ],

  included: [
    "Round-trip air-conditioned transfers from hotel",
    "Full entry ticket to Aquarium, Zoo, and Rainforest",
    "Access to underwater glass tunnel",
    "Entry to 'Valley of the Whales' fossil museum"
  ],

  excluded: [
    "Professional photography fees",
    "Meals and snacks (available onsite)",
    "Special feeding experiences (extra fee may apply)",
    "Tipping (optional)"
  ]
},
 {
  title: "Private Speedboat",
  image: "/images/itinerary/speedboat.jpg",
  price: 110,
  pickupTimes: ["Flexible / On Request"],
  currency: "€",

  description: "Enjoy a fully private speedboat experience with customizable routes, snorkeling stops, and flexible timing.",

  highlights: [
    "Private Boat – Exclusive for your group",
    "Tailored Route (Dolphin House, Magawish, Abu Ramada)",
    "Flexible Duration (2, 4, or 8 hours)",
    "Dolphin Spotting Opportunity",
    "Snorkeling Stops at Coral Reefs",
    "Sunshade Bimini Top for Comfort"
  ],

  moreDetails: [
    {
      item: "Pick-up & Drop-off",
      reason: "Round-trip transfer from your hotel to the marina."
    },
    {
      item: "Fuel & Captain",
      reason: "Professional licensed captain and fuel costs included."
    },
    {
      item: "Snorkeling Gear",
      reason: "Clean masks, fins, and life jackets for all guests."
    },
    {
      item: "Safety First",
      reason: "GPS, life jackets, and first-aid kit onboard."
    },
    {
      item: "Briefing",
      reason: "Safety instructions before departure from the marina."
    },
    {
      item: "Flexible Timing",
      reason: "Choose your preferred start time and duration (2, 4, or 8 hours)."
    },
    {
      item: "Capacity",
      reason: "Different boat sizes available (usually 4–8 people)."
    }
  ],

  included: [
    "Private speedboat for your group",
    "Round-trip hotel transfers",
    "Licensed captain",
    "Fuel costs",
    "Snorkeling equipment",
    "Life jackets",
    "Bottled water and soft drinks"
  ],

  excluded: [
    "Professional photography or drone service",
    "Island entry fees (e.g., Orange / Paradise)",
    "Lunch (snacks or sandwiches available for extra fee)",
    "Tipping (optional)"
  ],

  infantPrice: "€5"
},
 {
  title: "Fishing Trip",
  image: "/images/itinerary/fishing.jpg",
  price: 100,
  pickupTimes: ["8:00am"],
  currency: "€",

  highlights: [
    "Hurghada, Red Sea",
    "Grady White (Well-equipped)",
    "12+ Years Experience",
    "Child Friendly Policy",
    "Keep your catch",
    "2–3 Prime Fishing Stops",
    "Freshly Prepared Buffet Lunch Onboard",
    "Snorkeling & Swimming Breaks",
    "Unlimited Soft Drinks",
    "Experienced Crew Assistance"
  ],

  moreDetails: [
    {
      item: "Location",
      reason: "Hurghada, Red Sea"
    },
    {
      item: "Boat",
      reason: "Grady White (Well-equipped)"
    },
    {
      item: "Experience",
      reason: "12+ Years"
    },
    {
      item: "Fishing Spots",
      reason: "Two or three different stops at prime fishing locations"
    },
    {
      item: "Lunch",
      reason: "Freshly prepared open buffet lunch served on the boat"
    },
    {
      item: "Drinks",
      reason: "Unlimited water, tea, coffee, and soft drinks all day"
    },
    {
      item: "Snorkeling",
      reason: "Swimming breaks in clear water while the boat is anchored"
    },
    {
      item: "Safety",
      reason: "Life jackets, first-aid kits, and experienced crew onboard"
    },
    {
      item: "Facilities",
      reason: "Sun deck for tanning and shaded relaxing area"
    },
    {
      item: "Fees",
      reason: "Taxes & Fuel included"
    },
    {
      item: "Policies",
      reason: "Child Friendly. Keep your catch"
    }
  ],

  included: [
    "Fishing rods",
    "Lines & hooks",
    "Fresh bait",
    "Snorkeling gear (mask, fins, life jacket)",
    "Full-day boat trip",
    "Round-trip hotel transfers",
    "Open buffet lunch",
    "Unlimited water, tea, coffee & soft drinks",
    "Crew assistance",
    "Life jackets & first-aid",
    "Fishing license"
  ],

  excluded: [
    "Professional photography",
    "Personal deep-sea trolling equipment (if not specified)",
    "Alcoholic drinks",
    "Crew & captain tipping (optional)"
  ],

  description: "Enjoy a full-day sea fishing adventure in Hurghada with multiple fishing stops, snorkeling breaks, freshly prepared buffet lunch onboard, unlimited soft drinks, and full equipment included."
},
{
  title: "Scuba Diving",
  image: "/images/itinerary/scuba-diving2.jpg",
  price: 27,
  pickupTimes: ["8:00am-8:30am"],
  currency: "€",

  highlights: [
    "Beginner-friendly (No prior experience required)",
    "Guided step-by-step by certified instructors",
    "Hurghada, Red Sea",
    "2 Diving stops (15-20 minutes each, 5–8m depth)",
    "Free Hotel Pickup & Drop-off (Within Hurghada)",
    "Full scuba equipment included",
    "Snorkeling access between dives",
    "Open buffet lunch onboard",
    "Unlimited water, tea, coffee & soft drinks",
    "Standard diving insurance included"
  ],

  moreDetails: [
    {
      item: "Experience Level",
      reason: "Beginner-friendly, no prior experience required"
    },
    {
      item: "Dive Duration",
      reason: "15–20 minutes underwater per dive (Depth: 5–8 meters)"
    },
    {
      item: "Diving Stops",
      reason: "Two separate dive locations"
    },
    {
      item: "Briefing",
      reason: "Detailed safety and underwater sign instructions before diving"
    },
    {
      item: "Instructor Ratio",
      reason: "Certified diving instructor for every 2–3 divers"
    },
    {
      item: "Snorkeling",
      reason: "Access to snorkeling gear between or after diving sessions"
    },
    {
      item: "Safety",
      reason: "Oxygen tanks, first-aid kits, and emergency equipment onboard"
    },
    {
      item: "Boat Facilities",
      reason: "Sun deck, shaded lounge area, and clean restrooms"
    },
    {
      item: "Insurance",
      reason: "Standard diving insurance provided by the center"
    },
    {
      item: "Transport",
      reason: "Round-trip hotel pickup and drop-off within Hurghada"
    }
  ],

  included: [
    "Round-trip hotel transfers",
    "Full diving gear (wet suit, BCD, regulator, mask, fins)",
    "2 guided dives",
    "Certified diving instructor",
    "Snorkeling gear",
    "Open buffet lunch",
    "Unlimited water, tea, coffee & soft drinks",
    "Standard diving insurance"
  ],

  excluded: [
    "Underwater photos & videos (extra fee)",
    "Diving courses (PADI/CMAS certification unless pre-booked)",
    "Personal expenses (towels, souvenirs)",
    "Crew & instructor tipping (optional)",
    "National park fee (€7.00 per person)"
  ],

  description: "Enjoy a beginner-friendly scuba diving experience in Hurghada with two guided dives (5–8m depth), full equipment, professional instructors, buffet lunch onboard, unlimited drinks, snorkeling access, and full safety support."
},
 {
  title: "Horse Riding",
  image: "/images/itinerary/horse.jpg",
  price: 20,
  pickupTimes: ["Sunrise (6:00am)", "Sunset (4:00pm)"],
  currency: "€",

  highlights: [
    "Beach or Desert Scenic Routes",
    "Swim with Horses in the Sea",
    "Suitable for Beginners to Experts",
    "Well-trained Arabian & Mixed-breed Horses",
    "Photo Stops at Scenic Viewpoints",
    "Stable Visit Before Ride",
    "Professional Guide Escort",
    "Free Hotel Pickup & Drop-off"
  ],

  moreDetails: [
    {
      item: "Route Options",
      reason: "Scenic desert trails or beautiful shoreline rides"
    },
    {
      item: "Sea Experience",
      reason: "Unique opportunity to swim with horses in the sea"
    },
    {
      item: "Skill Level",
      reason: "Suitable for absolute beginners to experienced riders"
    },
    {
      item: "Horse Welfare",
      reason: "Well-trained, healthy, calm Arabian or mixed-breed horses"
    },
    {
      item: "Photo Stops",
      reason: "Breaks at the best viewpoints to capture scenery"
    },
    {
      item: "Briefing",
      reason: "Basic instructions on how to steer and stop the horse safely"
    },
    {
      item: "Stable Visit",
      reason: "Meet and interact with the horses before the ride"
    },
    {
      item: "Safety",
      reason: "Constant supervision by professional stable hands"
    },
    {
      item: "Ride Duration",
      reason: "1 or 2 hours of riding (depending on booking)"
    }
  ],

  included: [
    "Round-trip hotel transfers",
    "Professional riding guide",
    "Riding helmet (safety gear)",
    "Horse",
    "Water"
  ],

  excluded: [
    "Professional photography or videos",
    "Tips for stable guides or driver (optional)",
    "Snacks or refreshments at the stable cafe",
    "Personal wear (long pants & closed shoes recommended)"
  ],

  description: "Enjoy a scenic horse riding experience along the beach or through the desert, including optional sea swimming with horses, professional guidance, safety equipment, and hotel transfers."
},
{
  title: "Dolphin House",
  image: "/images/itinerary/dolphin-house2.jpg",
  price: 25,
  pickupTimes: ["Morning (Exact time confirmed after booking)"],
  currency: "€",

  description: "Full-day boat trip to Dolphin House reefs with snorkeling, dolphin encounters, buffet lunch, and water sports.",

  duration: "Full Day",

  highlights: [
    "Swim with wild dolphins in their natural habitat",
    "2–3 snorkeling stops at coral reefs",
    "Full-day boat cruise to Dolphin House",
    "Open buffet lunch served onboard",
    "Unlimited water, tea, coffee & soft drinks",
    "Banana Boat or Quattro water sports",
    "Relaxing sun deck & shaded lounge areas"
  ],

  moreDetails: [
    {
      item: "Dolphin Interaction",
      reason: "Chance to swim with wild dolphins in their natural environment."
    },
    {
      item: "Snorkeling Stops",
      reason: "2–3 stops at vibrant coral reefs with colorful fish."
    },
    {
      item: "Professional Guides",
      reason: "Experienced snorkeling guides help you find the best spots."
    },
    {
      item: "Safety",
      reason: "Constant monitoring by guides and life jackets for all levels."
    },
    {
      item: "Facilities",
      reason: "Shaded areas, indoor lounge, and clean restrooms onboard."
    }
  ],

  included: [
    "Round-trip hotel transfers",
    "Full-day boat trip to Dolphin House",
    "Snorkeling equipment (mask, fins, life jacket)",
    "Open buffet lunch",
    "Unlimited water, tea, coffee & soft drinks",
    "Banana Boat or Quattro ride",
    "Professional snorkeling guides"
  ],

  excluded: [
    "Professional underwater/on-deck photography",
    "Personal towels and swimwear",
    "Canned drinks & fresh juices (outside buffet)",
    "Tipping (optional)"
  ],

  infantPrice: "Children under 6 years are free"
},
{
  title: "Kite Surf",
  image: "/images/itinerary/night-surf.jpg",
  price: 160,
  currency: "€",
  pickupTimes: ["8:30 AM – 9:30 AM"],

  highlights: [
    "Kite surfing session with certified instructor (if booked)",
    "Safety monitored with helmet, impact vest, and rescue boat",
    "Access to Kite Lagoon beach, facilities, and storage",
    "Round-trip hotel transfers included",
    "Fresh lunch included (unless full-day Kite Safari)"
  ],

  included: [
    "Pickup from your hotel between 8:30 AM – 9:30 AM",
    "Round-trip transportation from hotel to Kite Spot",
    "Certified kite instructor for lessons (if booked)",
    "Helmet and Impact Vest during the session",
    "Rescue boat monitoring and safety service",
    "Entry fees to the Kite Lagoon and private beach area",
    "Use of storage facilities for personal gear",
    "Access to showers, changing rooms, and chill-out areas",
    "Fresh lunch included (unless full-day Kite Safari)",
    "Water and tea",
    "Compressor use for pumping kites"
  ],

  excluded: [
    "Rental of kite equipment (Kite, Board, Harness) if not pre-booked",
    "Additional beverages or snacks outside of water/tea",
    "Professional action photos or drone video footage",
    "Personal sports/accident insurance (highly recommended)",
    "Tipping for instructors or driver (optional)"
  ],

  extraInfo: [
    "Wind briefing provided (wind direction, speed, and spot hazards)",
    "Safety gear and rescue boat included for monitoring and emergencies",
    "Personal sports/accident insurance is highly recommended"
  ],

  moreDetails: [
    {
      item: "Departure Time",
      reason: "Pickup from your hotel between 8:30 AM – 9:30 AM"
    },
    {
      item: "Full Equipment",
      reason: "Rental of Kite, Board, and Harness available if not pre-booked"
    },
    {
      item: "Transfers",
      reason: "Round-trip transportation from hotel to Kite Spot"
    },
    {
      item: "Safety Gear",
      reason: "Helmet and Impact Vest provided during the session"
    },
    {
      item: "Rescue Boat",
      reason: "Constant safety boat monitoring and rescue service"
    },
    {
      item: "Beach Access",
      reason: "Entry fees to Kite Lagoon and private beach area"
    },
    {
      item: "Facilities",
      reason: "Access to showers, changing rooms, and chill-out areas"
    },
    {
      item: "Wind Briefing",
      reason: "Information on wind direction, speed, and spot hazards"
    },
    {
      item: "Meals",
      reason: "Fresh lunch included (unless it’s a full-day Kite Safari)"
    },
    {
      item: "Air",
      reason: "Compressor use for pumping kites"
    }
  ],

  description: "Enjoy an exciting kite surfing experience with professional supervision, full safety support, beach access, lunch, and convenient hotel transfers."
},
  {
  title: "Safari Hurghada",
  image: "/images/itinerary/safari-hurghada.jpg",
  price: 35,
  currency: "€",
  duration: "8–10 hrs",
  pickupTimes: ["11:30 AM – 12:30 PM"],

  highlights: [
    "Round-trip 4x4 Jeep transfers from your hotel",
    "45-minute Quad Bike (ATV) self-driving experience",
    "Spider Car desert buggy ride",
    "Jeep safari through the dunes to a Bedouin village",
    "Camel ride and sunset view from the mountains",
    "BBQ open buffet dinner with evening folklore show",
    "Unlimited water and soft drinks during the evening program"
  ],

  included: [
    "Round-trip transfers by 4x4 Jeep from hotel to desert base",
    "Approximately 45 minutes Quad Bike (ATV) ride",
    "Spider Car buggy experience",
    "Jeep safari through the desert dunes",
    "Visit to traditional Bedouin village",
    "Short camel ride",
    "Sunset view from a high point in the mountains",
    "Bedouin BBQ open buffet dinner under the stars",
    "Unlimited water and soft drinks during evening program",
    "Tanoura dance, belly dancing, and fire show performance",
    "Professional desert guides leading all driving convoys",
    "Helmets provided for Quad Bike session"
  ],

  excluded: [
    "Professional photos or videos",
    "Traditional desert scarf & protective goggles",
    "Shisha (available for extra fee)",
    "Tipping for desert guides or driver (optional)",
    "Travel/personal insurance"
  ],

  moreDetails: [
    {
      item: "Transfers",
      reason: "Round-trip by 4x4 Jeep from hotel to desert base"
    },
    {
      item: "Quad Bike",
      reason: "Approximately 45 minutes of self-driving (ATV)"
    },
    {
      item: "Spider Car",
      reason: "Short thrilling desert buggy session"
    },
    {
      item: "Jeep Safari",
      reason: "Desert driving through dunes to the Bedouin village"
    },
    {
      item: "Bedouin Village",
      reason: "Visit traditional camp to learn about Bedouin lifestyle"
    },
    {
      item: "Camel Ride",
      reason: "Short traditional camel ride through the desert"
    },
    {
      item: "Sunset View",
      reason: "Watch the sunset from a panoramic mountain viewpoint"
    },
    {
      item: "Dinner",
      reason: "Bedouin BBQ open buffet served under the stars"
    },
    {
      item: "Drinks",
      reason: "Unlimited water and soft drinks during evening program"
    },
    {
      item: "Evening Show",
      reason: "Tanoura dance, belly dancing, and fire show performance"
    },
    {
      item: "Safety",
      reason: "Professional desert guides lead all driving convoys"
    },
    {
      item: "Equipment",
      reason: "Helmets provided for the Quad Bike session"
    }
  ],

  description:
    "Experience an unforgettable desert adventure in Hurghada featuring quad biking, Jeep safari, camel ride, Bedouin village visit, sunset views, BBQ dinner, and live entertainment under the stars."
},
 {
  title: "City Tours",
  image: "/images/itinerary/city.jpg",
  price: 15,
  pickupTimes: ["3:00PM-4:00pm"],
  currency: "€",

  highlights: [
    "City Tour Hurghada (4:00 PM - 9:00 PM)",
    "Panoramic View - Visit the highest point in Hurghada for photos",
    "Old Sheraton Panorama - Sea view",
    "Hurghada Marina - Stroll among luxurious yachts",
    "Fish Market - Experience live local marine life",
    "El Mina Mosque - Islamic architectural masterpiece",
    "The Old Town (El Dahar) - Explore the charm of the past",
    "Saint Shenouda Church - Historical landmarks",
    "Fruit & Vegetable Market - Traditional local market tour",
    "Learn the history of Hurghada from fishing village to city",
    "Safe and comfortable journey with skilled driver"
  ],

  moreDetails: [
    {
      item: "Panoramic View",
      reason: "Visit the highest point in Hurghada for stunning photos"
    },
    {
      item: "Old Sheraton Panorama",
      reason: "Enjoy the most beautiful sea view"
    },
    {
      item: "Hurghada Marina",
      reason: "A relaxing walk among luxurious yachts"
    },
    {
      item: "Fish Market",
      reason: "Visit the bustling local fish market by the port"
    },
    {
      item: "El Mina Mosque",
      reason: "Visit the largest and most beautiful mosque in the city"
    },
    {
      item: "Coptic Church (Saint Shenouda)",
      reason: "Explore the stunning architecture of St. Shenouda Church"
    },
    {
      item: "The Old Town (El Dahar)",
      reason: "Experience the traditional fruit & vegetable market"
    },
    {
      item: "History",
      reason: "Learn how Hurghada grew from a fishing village into a modern city"
    },
    {
      item: "Shopping Stops",
      reason: "Quality time at authorized papyrus and perfume galleries"
    },
    {
      item: "Journey",
      reason: "Air-conditioned vehicle with professional driver all day"
    }
  ],

  included: [
    "Pick-up & Drop-off (Round-trip transfer from your hotel)",
    "Professional guide",
    "Skilled driver",
    "Air-conditioned vehicle",
    "Entry to El Mina Mosque",
    "Entry to Coptic Church",
    "Panoramic photo stop",
    "City tour transportation"
  ],

  excluded: [
    "Personal shopping (souvenirs, spices, clothing)",
    "Meals (Lunch or Dinner - can be added upon request)",
    "Extra museum fees (Sand City or Mini Egypt if not in route)",
    "Tipping / gratuities (optional)",
    "Personal expenses",
    "Food & drinks"
  ],

  description: "Discover the beauty, history, and culture of Hurghada on this guided evening city tour including marina, mosque, church, markets, panoramic views, and Old Town exploration."
},
 {
  title: "Golf",
  image: "/images/itinerary/golf.jpg",
  price: 55,
  pickupTimes: ["10:00am"],
  currency: "€",

  extraInfo: [
    "Free Cancellation: Cancel up to 24 hours in advance for a full refund.",
    "Reserve now & pay later: Keep your travel plans flexible — book your spot and pay nothing today."
  ],

  highlights: [
    "Reserve now, pay later",
    "Duration: 3 hours",
    "Group Size: Max 6 (English/Arabic)",
    "Minimum Handicap (HCP) 36",
    "Pre-booked tee times for smooth flow of play",
    "World-class championship courses (e.g., Steigenberger or El Gouna)",
    "Scenic views of green fairways and blue lagoons",
    "Suitable for all skill levels (High-handicappers & Pros)",
    "Professional staff & marshals monitoring the course",
    "Clubhouse access (lounge & restaurant areas)",
    "Water & refreshments available on course",
    "Dress code required (Collar shirts & golf shoes/sneakers)",
    "Not suitable for Pregnancy / Over 95 years old"
  ],

  moreDetails: [
    {
      item: "Payment",
      reason: "Reserve now, pay later"
    },
    {
      item: "Duration",
      reason: "3 hours"
    },
    {
      item: "Group Size",
      reason: "Max 6 (English/Arabic)"
    },
    {
      item: "Requirement",
      reason: "Minimum Handicap (HCP) 36"
    },
    {
      item: "Tee Time",
      reason: "Pre-booked slots to ensure a smooth flow of play"
    },
    {
      item: "Courses",
      reason: "World-class courses designed by international architects (Steigenberger or El Gouna)"
    },
    {
      item: "Scenic Views",
      reason: "Stunning landscapes combining green fairways and blue lagoons"
    },
    {
      item: "Skill Levels",
      reason: "Suitable for both high-handicappers and professional players"
    },
    {
      item: "Safety",
      reason: "Professional staff and marshals monitoring the course"
    },
    {
      item: "Clubhouse Access",
      reason: "Entry to lounge and restaurant areas"
    },
    {
      item: "Dress Code",
      reason: "Strict golf attire required (Collar shirts and golf shoes/sneakers)"
    },
    {
      item: "Not Suitable For",
      reason: "Pregnancy / Over 95 years old"
    }
  ],

  included: [
    "Round-trip hotel transfers",
    "Green fees (9-hole or 18-hole championship course)",
    "Access to practice driving range",
    "Range token",
    "Free trolley",
    "Locker rooms (showers & lockers)",
    "Clubhouse access"
  ],

  excluded: [
    "Equipment rental (clubs & professional sets available for rent)",
    "Golf cart / personal caddy services",
    "Private pro lessons (PGA professional)",
    "Tipping (optional)",
    "Food & drinks",
    "Transport"
  ],

  description:
    "Enjoy a premium golf experience at a world-class championship course with scenic lagoon views, professional supervision, and full clubhouse access. Perfect for both experienced golfers and improving players."
},
{
  title: "Massage + spa",
  image: "/images/itinerary/spa.jpg",
  price: 40,
  pickupTimes: ["Based On Appointment"],
  currency: "€",
  duration: "2hrs",

  highlights: [
    "Hurghada Hammam & Massage",
    "Main Services: Steam, Jacuzzi, Exfoliation, & 45-min Massage",
    "Choice of Aromatherapy, Thai, or Swedish massage",
    "Turkish Bath (Steam, Sauna & Hammam)",
    "Peeling & Foam traditional body scrub",
    "Private Group Only",
    "Certified male & female therapists",
    "High hygiene standards & fresh towels provided",
    "Not Wheelchair Accessible"
  ],

  moreDetails: [
    {
      item: "Main Services",
      reason: "Steam, Jacuzzi, Exfoliation, & 45-min Massage"
    },
    {
      item: "Massage Types",
      reason: "Choice of Aromatherapy, Thai, or Swedish massage"
    },
    {
      item: "Turkish Bath",
      reason: "Access to Steam room, Sauna, and Hammam"
    },
    {
      item: "Peeling & Foam",
      reason: "Traditional body scrub and foam massage"
    },
    {
      item: "Sauna & Jacuzzi",
      reason: "Full access to hot tub and relaxation zones"
    },
    {
      item: "Skin Care",
      reason: "Face mask and specialized treatments included in some packages"
    },
    {
      item: "Expert Therapists",
      reason: "Certified male and female massage professionals"
    },
    {
      item: "Welcome Drink",
      reason: "Herbal tea or refreshments served upon arrival"
    },
    {
      item: "Privacy",
      reason: "Dedicated rooms for couples or private female/male sections"
    },
    {
      item: "Ambience",
      reason: "Calming music, aromatic scents, and professional environment"
    },
    {
      item: "Safety",
      reason: "High hygiene standards and fresh towels provided"
    },
    {
      item: "Type",
      reason: "Private Group Only"
    },
    {
      item: "Accessibility",
      reason: "Not Wheelchair Accessible"
    }
  ],

  included: [
    "Round-trip hotel transfers",
    "Turkish Bath (Steam, Sauna, Hammam)",
    "Full body massage (45–60 minutes)",
    "Peeling & foam treatment",
    "Jacuzzi access",
    "Locker rooms & towels",
    "Welcome drink"
  ],

  excluded: [
    "Extra medical or beauty treatments (e.g., Botox)",
    "Take-home products (oils, creams, skincare)",
    "Personal items (swimwear must be brought by guest)",
    "Tipping (optional)",
    "Not Wheelchair Accessible"
  ],

  description:
    "Relax and rejuvenate with a complete Hurghada Hammam & Spa experience including Turkish bath, peeling & foam, Jacuzzi, and professional full-body massage in a calm and private environment."
},
  {
  title: "Tattoo",
  image: "/images/itinerary/tattoo.jpg",
  price: 28,
  pickupTimes: ["Based On Oppointment"],
  currency: "€",

  highlights: [
    "Strict adherence to highest international hygiene and sterilization standards",
    "Handpicked elite guest artists specializing in creative Arabic calligraphy and Oriental symbolism",
    "Custom design consultation before tattoo session",
    "Permanent, Semi-Permanent, or Temporary Henna options",
    "Internationally certified, skin-safe pigments",
    "Professional stencil design preparation",
    "Pain management guidance for maximum comfort",
    "Cover-up service for old tattoos",
    "Premium 'Aftercare Kit' with natural desert-inspired oils for tattoo healing"
  ],

  moreDetails: [
    {
      item: "Consultation",
      reason: "Meeting with the artist to discuss design, size, and placement"
    },
    {
      item: "Tattoo Types",
      reason: "Permanent, Semi-Permanent, or Temporary Henna options available"
    },
    {
      item: "Custom Designs",
      reason: "Ability to create a unique piece based on your idea"
    },
    {
      item: "Design Preparation",
      reason: "Printing and applying stencil professionally to the skin"
    },
    {
      item: "Artist Expertise",
      reason: "Talented artists specializing in fine line, realism, Arabic calligraphy, and more"
    },
    {
      item: "Inks",
      reason: "Use of internationally certified, skin-safe pigments"
    },
    {
      item: "Sterile Equipment",
      reason: "High-quality, single-use needles and inks"
    },
    {
      item: "Hygiene",
      reason: "Strict sterilization and clean professional studio environment"
    },
    {
      item: "Pain Management",
      reason: "Guidance throughout the process to ensure maximum comfort"
    },
    {
      item: "Safety Briefing",
      reason: "Instructions on how to properly care for your new tattoo"
    },
    {
      item: "Aftercare Guide",
      reason: "Detailed list of Dos and Don'ts for proper healing"
    },
    {
      item: "Touch-ups",
      reason: "Future color refresh sessions available (usually extra cost)"
    }
  ],

  included: [
    "Consultation with artist",
    "Custom stencil design preparation",
    "Use of sterile single-use equipment",
    "Certified skin-safe pigments",
    "Premium Aftercare Kit",
    "Aftercare instructions guide"
  ],

  excluded: [
    "Studio transfers (unless arranged as VIP service)",
    "Future touch-up sessions",
    "Optional tipping for the artist"
  ],

  description:
    "Get a professionally designed tattoo in a sterile studio environment with certified artists, custom designs, premium inks, and full aftercare support for a safe and unforgettable experience."
},



  {
  title: "Limousine + Taxi",
  image: "/images/itinerary/limouse.jpg",
  price: 15,
  currency: "€",
  pickupTimes: ["On Request (24/7)"],

  highlights: [
    "Professional representative with personalized sign and luggage assistance",
    "100% On-time guarantee; drivers arrive 15 minutes early",
    "Modern, fully air-conditioned vehicles (Standard Sedan, Family Van, Luxury Business Class)",
    "City Taxi option (Classic Orange & Blue taxis for quick trips)",
    "Airport transfers with extra luggage space",
    "Pre-booking available for airport & long-distance trips",
    "Intercity private travel (Cairo, Luxor, Marsa Alam)",
    "Complimentary High-speed Wi-Fi, bottled mineral water, and mobile charging ports",
    "Professional, multilingual licensed drivers",
    "Monitored trips for safety and reliability",
    "Transparent all-inclusive fixed rates (Tolls included)",
    "24/7 customer support availability"
  ],

  moreDetails: [
    {
      item: "Meet & Greet",
      reason: "A professional representative awaits you with a personalized sign and full luggage assistance"
    },
    {
      item: "Punctuality",
      reason: "100% On-time guarantee; drivers arrive 15 minutes before scheduled pickup"
    },
    {
      item: "Premium Fleet",
      reason: "Modern, fully air-conditioned vehicles (Standard Sedan, Family Van, Luxury Business Class)"
    },
    {
      item: "City Taxi",
      reason: "Classic Orange & Blue taxis available for short and quick city trips"
    },
    {
      item: "Airport Transfers",
      reason: "Specialized service with extra luggage space and smooth airport pickup/drop-off"
    },
    {
      item: "Intercity Travel",
      reason: "Private long-distance trips to Cairo, Luxor, or Marsa Alam"
    },
    {
      item: "Onboard Comfort",
      reason: "Complimentary High-speed Wi-Fi, bottled mineral water, and mobile charging ports"
    },
    {
      item: "Expert Drivers",
      reason: "Licensed, multilingual drivers with knowledge of all city and intercity routes"
    },
    {
      item: "Safety",
      reason: "Monitored trips and professional driving standards"
    },
    {
      item: "Fixed Pricing",
      reason: "Pre-agreed, transparent all-inclusive rates with no hidden fees"
    },
    {
      item: "Customer Support",
      reason: "24/7 availability for assistance and bookings"
    }
  ],

  included: [
    "Door-to-door pickup and drop-off",
    "Personalized Meet & Greet",
    "Full luggage assistance",
    "Professional licensed driver",
    "Air-conditioned vehicle",
    "High-speed Wi-Fi",
    "Bottled mineral water",
    "Mobile charging ports",
    "Pre-agreed fixed rates",
    "Tolls included"
  ],

  excluded: [
    "Extra unplanned stops during the trip (may incur additional fees)",
    "Extended waiting time (e.g., malls, restaurants)",
    "Specific parking fees at private marinas or malls",
    "Optional tipping for the driver"
  ],

  description:
    "Reliable 24/7 limousine and taxi services offering airport transfers, city rides, and intercity travel with professional drivers, fixed transparent pricing, and premium onboard comfort."
},
]
,

    included: [ "Guide", "Meals", "Transport"],
    excluded: ["Flights", "Tips"],
    reviews: ["⭐⭐⭐⭐ Great cultural experience!", "⭐⭐⭐⭐⭐ Loved it!"],
   
  },
];
