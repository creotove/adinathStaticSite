const express = require("express");
const morgan = require("morgan");
const path = require("path");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();

//dotenv conig
dotenv.config();
//Database connection
connectDB();

//Body Parser
app.use(express.json());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

app.use(
  cors(
    (origin = "*"),
    (methods = "GET,HEAD,PUT,PATCH,POST,DELETE"),
    (allowedHeaders = "Content-Type,Authorization"),
    (credentials = true)
  )
);

//Morgan for logging
app.use(morgan("dev"));

//routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/masterAdmin", require("./routes/masterAdminRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/retailer", require("./routes/retailerRoutes"));
app.use("/api/v1/test", require("./routes/testRoute"));

if (process.env.NODE_MODE === "production") {
  app.use("/", express.static(path.join(__dirname, "frontEnd", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontEnd/build", "index.html"));
  });
}

//port
const port = process.env.PORT || 8080;
//listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
