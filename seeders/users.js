import mongoose from "mongoose";
import db from "../config/database.js";

import User from "../models/User.js";

// Connect to the MongoDB server
mongoose.connect("mongodb://localhost:27017/travlog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const users = [
  {
    name: "John Smith",
    email: "johnsmith@example.com",
    password: "abcd1234",
    birthday: "1990-01-01",
    sex: "male",
    nationality: "American",
  },
  {
    name: "Jane Doe",
    email: "janedoe@example.com",
    password: "abcd1234",
    birthday: "1985-05-12",
    sex: "female",
    nationality: "Canadian",
  },
  {
    name: "Bob Johnson",
    email: "bobjohnson@example.com",
    password: "abcd1234",
    birthday: "1980-07-28",
    sex: "male",
    nationality: "British",
  },
  {
    name: "Emma Williams",
    email: "emmawilliams@example.com",
    password: "abcd1234",
    birthday: "1995-03-02",
    sex: "female",
    nationality: "Australian",
  },
  {
    name: "Michael Brown",
    email: "michaelbrown@example.com",
    password: "abcd1234",
    birthday: "1988-06-20",
    sex: "male",
    nationality: "French",
  },
  {
    name: "Emily Davis",
    email: "emilydavis@example.com",
    password: "abcd1234",
    birthday: "1992-09-15",
    sex: "female",
    nationality: "German",
  },
  {
    name: "Jacob Miller",
    email: "jacobmiller@example.com",
    password: "abcd1234",
    birthday: "1986-11-05",
    sex: "male",
    nationality: "Italian",
  },
  {
    name: "Amanda Wilson",
    email: "amandawilson@example.com",
    password: "abcd1234",
    birthday: "1990-02-12",
    sex: "female",
    nationality: "Spanish",
  },
  {
    name: "Joshua Moore",
    email: "joshuamoore@example.com",
    password: "abcd1234",
    birthday: "1989-04-22",
    sex: "male",
    nationality: "Mexican",
  },
  {
    name: "Ashley Taylor",
    email: "ashleytaylor@example.com",
    password: "abcd1234",
    birthday: "1991-08-17",
    sex: "female",
    nationality: "French",
  },
];

User.deleteMany({}, function (err) {
  if (err) {
    console.log(err);
  } else {
    // Create new users
    User.create(users, function (err, createdUsers) {
      if (err) {
        console.log(err);
      } else {
        console.log(`${createdUsers.length} users have been created.`);
      }
      // Close the Mongoose connection
      mongoose.connection.close();
    });
  }
});
