const express = require("express");
const cors = require("cors");

const app = express();

// should be modified to accept request only from the gateway
app.use(cors());

// login
app.post("/login", (req, res) => {
  // verify user email and password
  res.json({
    access_token: {
      email: "xyz@example.com",
      id: "12345",
      roles: ["user"],
    },
  });
});

// login admin
app.post("/login-admin", (req, res) => {
  // verify user email and password
  res.json({
    access_token: {
      email: "xyz-admin@example.com",
      id: "67891",
      roles: ["user", "admin"],
    },
  });
});

// public
app.get("/public/:id", (req, res) => {
  res.json({ id: req.params.id, message: "this api is public" });
});

// all users and admin
app.get("/user/:id", (req, res) => {
  res.json({
    userId: req.headers["x-userid"],
    id: req.params.id,
    message: "this api is private [user, admin] ",
  });
});

// only admin
app.get("/admin/:id", (req, res) => {
  res.json({
    userId: req.headers["x-userid"],
    id: req.params.id,
    message: "this api is private [admin]",
  });
});

// ping
app.get("/", (req, res) => {
  res.json({ message: "demo server is working.." });
});

app.listen(4000, () => {
  console.log("Express server is running on port 4000");
});
