const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const topicRoutes = require("./routes/topicRoutes");
const taskRoutes = require("./routes/taskRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const progressRoutes = require("./routes/progressRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use(authRoutes);
app.use(topicRoutes);
app.use(taskRoutes);
app.use(dashboardRoutes);
app.use("/api/progress", progressRoutes);

app.get("/", (req, res) => {
  res.send("Hello Backend");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});