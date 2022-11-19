// IMPORT PATH
const path = require("path");

// IMPORT EXPRESS
const express = require("express");

// IMPORT MORGAN TO LOG REQUEST AND RESPONSE
const morgan = require("morgan");

// IMPORT FAVICON
const favicon = require("serve-favicon");

// IMPORT CORS
const cors = require("cors");

// IMPORT DOTENV MODULE TO CONNECT TO OUR CONFIGURATION FILE
const dotenv = require("dotenv");

// IMPORT MONGOOSE TO CONNECT TO OUR DATABASE
const mongoose = require("mongoose");

// IMPORT ROUTERS
const userRouter = require("./routes/api/users");
const dishRouter = require("./routes/api/dishes");

// Connect to our config file
dotenv.config();

// Create a variable that represent our database
const DB = mongoose
  .connect(
    process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD),
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB CONNECTION SUCCESSFUL!");
  });

// CREATE A VARIABLE TO HOLD OUR EXPRESS METHODS
const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use(cors());

// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
// app.use(express.static(path.join(__dirname, "public")));

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./../frontend", "public", "index.html"));
// });

app.use("/api/users", userRouter);
app.use("/api/dishes", dishRouter);

app.all("*", (request, response) => {
  response.send("Undefined route");
});

// LISTEN FOR CYCLE
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server started on port ${process.env.PORT}...`);
});
