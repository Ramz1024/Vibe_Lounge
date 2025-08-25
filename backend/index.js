const express = require("express");
const http = require("http");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config(); // Load .env variables

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
  });

// Routes
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const chatRoutes = require("./routes/chatRoutes");

app.use("/", userRoutes); // user routes (register, login)
app.use("/admin", adminRoutes); // admin routes
app.use("/chat", chatRoutes); // chat routes

// Base test route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Socket io setup
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Handling different connections
io.on("connection", (socket) => {
  // on connection
  console.log("A user connected: ", socket.id);

  socket.on("join_room", (room) => {
    // on joining room
    socket.join(room);
    console.log(`User ${socket.id} joined in room ${room}`);
  });

  socket.on("disconnect", () => {
    // on exit
    console.log("User disconnected:", socket.id);
  });
});

// Start server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
