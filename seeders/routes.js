import mongoose from "mongoose";
import Route from "../models/Route.js";

mongoose.connect("mongodb://localhost:27017/travlog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const routes = [
  {
    title: "Barcelona",
    description: "Barcelona city tour",
    user_id: "63fb65a6be7f54fe9dea340c",
    upvotes: [],
    downvotes: [],
    rating: 0,
    city: "Barcelona",
    map: "https://www.google.com/maps/dir/?api=1&origin=41.3851,2.1734&destination=41.4036,2.1744&travelmode=walking",
    route_description: [
      {
        lat: 41.3851,
        lng: 2.1734,
        place_id: "ChIJ5TCOcRaYpBIRCmZHTz37sEQ",
      },
      {
        lat: 41.389,
        lng: 2.1693,
        place_id: "ChIJv5M5IVmYpBIRf5WwCy6ZD5o",
        description: "",
        time: "",
        duration: 3600,
        placeType: [
          "park",
          "tourist_attraction",
          "point_of_interest",
          "establishment",
        ],
      },
      {
        lat: 41.3951,
        lng: 2.1626,
        place_id: "ChIJC8WIdDuYpBIR-EH6xaoA-bw",
        description: "",
        time: "",
        duration: 3600,
        placeType: [
          "shopping_mall",
          "pharmacy",
          "movie_theater",
          "gym",
          "parking",
          "supermarket",
          "grocery_or_supermarket",
          "clothing_store",
          "health",
          "food",
          "point_of_interest",
          "store",
          "establishment",
        ],
      },
      {
        lat: 41.3985,
        lng: 2.1616,
        place_id: "ChIJ7VWp_vuYpBIRr1e3WyvT9fY",
        description: "",
        time: "",
        duration: 3600,
        placeType: [
          "hospital",
          "doctor",
          "health",
          "point_of_interest",
          "establishment",
        ],
      },
      {
        lat: 41.4036,
        lng: 2.1744,
        place_id: "ChIJraS7GjeYpBIR-DXkMfD8nq4",
        description: "",
        time: "",
        duration: 3600,
        placeType: ["shopping_mall", "point_of_interest", "establishment"],
      },
    ],
    duration: 24240,
    comments: [],
  },
  {
    title: "Tokyo",
    description: "Tokyo",
    user_id: "63fb65a6be7f54fe9dea3415",
    upvotes: [],
    downvotes: [],
    rating: 0,
    city: "Tokyo",
    map: "https://www.google.com/maps/dir/?api=1&origin=35.66968230632612%2C139.75878143310547&destination=35.66968230632612%2C139.75878143310547&waypoints=35.68571468146346%2C139.7510528564453%7C35.68412575532558%2C139.76587390899658&travelmode=walking",
    route_description: [
      {
        lat: 35.66968230632612,
        lng: 139.75878143310547,
        place_id: "ChIJXXO_NcWLGGARk-7Wd5Yhn6E",
      },
      {
        lat: 35.68571468146346,
        lng: 139.7510528564453,
        place_id: "ChIJZdpE6cmLGGARZpRnZfT8TJw",
        description: "",
        time: "",
        duration: 3600,
        placeType: ["shopping_mall", "point_of_interest", "establishment"],
      },
      {
        lat: 35.68412575532558,
        lng: 139.76587390899658,
        place_id: "ChIJ9UvHI8GLGGARAdUzk1Ik2_k",
        description: "",
        time: "",
        duration: 3600,
        placeType: [
          "park",
          "tourist_attraction",
          "point_of_interest",
          "establishment",
        ],
      },
    ],
    duration: 7200,
    comments: [],
  },
  {
    title: "Beach Day in Miami",
    description: "Spend a day at the beach in Miami",
    user_id: "63fb65a6be7f54fe9dea3414",
    upvotes: [],
    downvotes: [],
    rating: 0,
    city: "Miami",
    map: "https://www.google.com/maps/dir/?api=1&origin=25.77718625345095%2C-80.1290512084961&destination=25.784819557354086%2C-80.13194052410127&waypoints=25.775077432114447%2C-80.12922954559326%7C25.780783178369285%2C-80.13489198684692&travelmode=walking",
    route_description: [
      {
        lat: 25.77718625345095,
        lng: -80.1290512084961,
        place_id: "ChIJ5U6GUC2x2YgR3UOKKvJ7Z1Y",
      },
      {
        lat: 25.775077432114447,
        lng: -80.12922954559326,
        place_id: "ChIJIQlfvVu22YgRtjK4KV4iJxA",
        description: "",
        time: "",
        duration: 3600,
        placeType: [
          "park",
          "tourist_attraction",
          "point_of_interest",
          "establishment",
        ],
      },
      {
        lat: 25.780783178369285,
        lng: -80.13489198684692,
        place_id: "ChIJBZsLTBC22YgRsKsX4MDsru4",
        description: "",
        time: "",
        duration: 3600,
        placeType: ["park", "point_of_interest", "establishment"],
      },
      {
        lat: 25.784819557354086,
        lng: -80.13194052410127,
        place_id: "ChIJwVhAFei22YgRn6veoKb_G_E",
        description: "",
        time: "",
        duration: 3600,
        placeType: ["park", "point_of_interest", "establishment"],
      },
    ],
    duration: 15000,
    comments: [],
  },
  {
    title: "Berlin",
    description: "Berlin",
    user_id: "63fb65a6be7f54fe9dea340d",
    upvotes: [],
    downvotes: [],
    rating: 0,
    city: "Berlin",
    map: "https://www.google.com/maps/dir/?api=1&origin=52.520008%2C13.404954&destination=52.498854%2C13.437729&waypoints=52.516105%2C13.376437%7C52.524305%2C13.395722%7C52.516800%2C13.391287&travelmode=walking",
    route_description: [
      {
        lat: 51.509865,
        lng: -0.118092,
        place_id: "ChIJdd4hrwug2EcRmSrV3Vo6llI",
        description: "",
        time: "",
        duration: 3600,
        placeType: ["point_of_interest", "establishment"],
      },
      {
        lat: 51.506597,
        lng: -0.080143,
        place_id: "ChIJrTLr-Gyu2EcRi-kYs7dMebQ",
        description: "",
        time: "",
        duration: 3600,
        placeType: ["point_of_interest", "establishment"],
      },
      {
        lat: 51.507174,
        lng: -0.127219,
        place_id: "ChIJZQf-3KYZdkgRrwJLPNHZlZY",
        description: "",
        time: "",
        duration: 3600,
        placeType: ["point_of_interest", "establishment"],
      },
      {
        lat: 51.513845,
        lng: -0.0983506,
        place_id: "ChIJdQlr6u0DdkgR_T0N1Jx1Ixo",
        description: "",
        time: "",
        duration: 3600,
        placeType: ["point_of_interest", "establishment"],
      },
    ],
    duration: 14400,
    comments: [],
  },
  {
    title: "Hiking in Yosemite",
    description: "A scenic hike through Yosemite National Park",
    user_id: "63fb65a6be7f54fe9dea340e",
    upvotes: [],
    downvotes: [],
    rating: 0,
    city: "Yosemite National Park",
    map: "https://www.google.com/maps/dir/?api=1&origin=37.8651016,-119.5383299&destination=37.731803,-119.637766&waypoints=37.746007,-119.576843|37.792518,-119.523944&travelmode=walking",
    route_description: [
      {
        lat: 37.8651016,
        lng: -119.5383299,
        place_id: "ChIJ13QwaJF7loARKzdcz-Z-7eo",
      },
      {
        lat: 37.746007,
        lng: -119.576843,
        place_id: "ChIJJQYKjTnTloARjqjKbyc0oPY",
        description: "Vernal Fall",
        time: "",
        duration: 120,
        placeType: [
          "park",
          "tourist_attraction",
          "point_of_interest",
          "establishment",
        ],
      },
      {
        lat: 37.792518,
        lng: -119.523944,
        place_id: "ChIJ6UfJ6UZ5loARv5sbWAcNwYY",
        description: "Nevada Fall",
        time: "",
        duration: 120,
        placeType: ["park", "point_of_interest", "establishment"],
      },
      {
        lat: 37.731803,
        lng: -119.637766,
        place_id: "ChIJYznFvIDcloAR7pFgnf6BNyU",
        description: "Glacier Point",
        time: "",
        duration: 120,
        placeType: [
          "park",
          "tourist_attraction",
          "point_of_interest",
          "establishment",
        ],
      },
    ],
    duration: 21600,
    comments: [],
  },
];

// Add 10 more routes based on your input
// User ids: [63fb65a6be7f54fe9dea340d, 63fb65a6be7f54fe9dea340c, 63fb65a6be7
Route.deleteMany({}, function (err) {
  if (err) {
    console.log(err);
  } else {
    // Create new users
    Route.create(routes, function (err, createdRoutes) {
      if (err) {
        console.log(err);
      } else {
        console.log(`${createdRoutes.length} users have been created.`);
      }
      // Close the Mongoose connection
      mongoose.connection.close();
    });
  }
});
