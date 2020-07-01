// ====== DEPENDENCIES ======
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

// ====== MIDDLEWARE ======
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// ====== ROUTES ======
app.use(routes)

// ====== DATABASE ======
mongoose.connect(process.env.MONGODB_URI || "mongodb://user1:password1@ds261817.mlab.com:61817/heroku_bc2chltk");


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
