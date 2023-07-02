const path = require("path");

require("dotenv").config({ path: ".env" });

// server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT;

const menuRoutes = require("./routes/menu");
const orderRoutes = require("./routes/order");
const userRoutes = require("./routes/user");
const bookingRoutes = require("./routes/booking");
const cartOrderRoutes = require("./routes/cartOrder");

const app = express();

app.use(express.json()); // Parse JSON bodies
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res, next) => {
  res.send("Hello");
  next();
});

app.use(express.static(path.join(__dirname, "../client/build")));

// Routes
app.use("/menus", menuRoutes);
app.use("/orders", orderRoutes);
app.use("/users", userRoutes);
app.use("/cartorders", cartOrderRoutes);
app.use("/bookings", bookingRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log("Connected to database. Listening at", port);
    });
  })
  .catch((error) => {
    console.log(error);
  });
