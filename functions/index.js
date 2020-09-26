const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HU67DKO9K55QrSCABJc6lllpOBqde5NXtjWxoHWLDZl8kCSjfABb9YxRIxkuhF4WfkzkbiVawUL8HwzyOSuClfa00yKzhqZYb"
);

//API

//APP CONFIG
const app = express();

//MIDDLEWARE
app.use(cors({ origin: true }));
app.use(express.json());

//API ROUTES
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  //OK
  response.status(201).send({ clientSecret: paymentIntent.client_secret });
});

//LISTEN COMMANDS
exports.api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
