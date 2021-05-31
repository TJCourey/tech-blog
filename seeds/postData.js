const { Post } = require("../models");

const postdata = [
  {
    title: "Printemps",
    content: "April 20, 2021 07:00:00",
    user_id: 2,
  },
  {
    title: "Sommer",
    content: "June 22, 2021 09:00:00",
    user_id: 1,
  },
  {
    title: "Herfst",
    content: "September 23, 2021 08:30:00",
    user_id: 2,
  },
  {
    title: "Hammering through homework",
    content: "Do you home work as quickly and violently as possible",
    user_id: 3,
  },
];

const seedPost = () => Gallery.bulkCreate(postdata);

module.exports = seedPost;
