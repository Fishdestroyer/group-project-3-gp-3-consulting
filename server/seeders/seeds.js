

const faker = require("faker");

const db = require("../config/connection");
const { Review, User } = require("../models");

db.once("open", async () => {
  //await Review.deleteMany({});
  await User.deleteMany({});


  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);


  //let createdReviews = [];
 // for (let i = 0; i < 100; i += 1) {
  //  const reviewText = faker.lorem.words(Math.round(Math.random() * 20) + 1);


    //const UserIndex = Math.floor(Math.random() * Users.ops.length);
    //const { username, _id: userId } = Users.ops[UserIndex];


    //const createdThought = await Thought.create({ thoughtText, username });   const createdReview = await Review.create({ reviewText, username });

    //const updatedUser = await User.updateOne(
    //  { _id: userId },
    //  { $push: { Reviews: createdReview._id } }
   // );

   // createdReviews.push(createdReview);
  //}

  console.log("all done!");
  process.exit(0);
});
