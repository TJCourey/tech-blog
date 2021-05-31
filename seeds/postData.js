const { Post, User } = require("../models");

const postdata = [
  {
    title: "Finding a career in the tech field",
    content: "It will be rough but stick to it",
    user_id: 2,
  },
  {
    title: "The dangers of over working",
    content:
      "All work and no play make Jack a dull boy All work and no play make Jack a dull boy All work and no play make Jack a dull boy All work and no play make Jack a dull boy All work and no play make Jack a dull boy",
    user_id: 1,
  },
  {
    title: "JS in a nutshell",
    content:
      "Javascript, or JS for short, is a programming language that has a lot of modules that can be used for both front end and back end development",
    user_id: 2,
  },
  {
    title: "Hammering through homework",
    content: "Do your home work as quickly and violently as possible",
    user_id: 3,
  },
];

const seedPost = () => Gallery.bulkCreate(postdata);

module.exports = seedPost;
