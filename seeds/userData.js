const { user } = require("../models");

const userdata = [
  {
    name: "TJ Courey",
    email: "tj@tj.com",
    password: "123password",
  },
  {
    name: "Jon Gregory",
    email: "jon@jon.com",
    password: "password123",
  },
  {
    name: "Same Roberson",
    email: "sam@sam.com",
    password: "12password3",
  },
];

const seedUsers = () => Painting.bulkCreate(userdata);

module.exports = seedUsers;
