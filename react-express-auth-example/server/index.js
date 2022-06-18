import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import crypto from "crypto";
const app = express();
const authTokens = {};

import { USER_DATA, ORDER_DATA } from "./mockDb.js";

// inspired by: https://github.com/jkasun/stack-abuse-express-authentication

const generateAuthToken = () => {
  return crypto.randomBytes(30).toString("hex");
};

const getUserByCredentials = ({ email, password }) => {
  return USER_DATA.find((user) => {
    if (!password) {
      // only look for email if no password is passed
      return user.email === email;
    }
    return user.email === email && password === user.password;
  });
};

const getOrderListByIds = (orderIds) => {
  return orderIds.map((id) => {
    return ORDER_DATA.find((order) => id === order.id);
  });
};

// to support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use((req, res, next) => {
  const authToken = req.cookies["AuthToken"];
  req.user = authTokens[authToken];
  next();
});

// Login endpoint
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log("req.body", req.body);

  // IMPORTANT: Passwords should be encrypted for DB requests
  // Mock/Example implementation only
  const user = getUserByCredentials({ email, password });
  console.log("user", user);

  if (user) {
    const authToken = generateAuthToken();

    authTokens[authToken] = email;

    res.cookie("AuthToken", authToken);
    res.status(200).send("OK");
    return;
  } else {
    res.status(401).send("Unauthorized");
  }
});

// Logout endpoint
app.get("/logout", (req, res) => {
  if (req.user) {
    res.clearCookie("AuthToken");
    res.status(200).send("User logged out.");
  } else {
    res.status(401).send("Unauthorized");
  }
});

// protected routes
app.get("/profile", (req, res) => {
  console.log("req.user", req.user);
  if (req.user) {
    const user = getUserByCredentials({ email: req.user });
    console.log("user", user);
    res.json({ data: user });
  } else {
    res.status(401).send("Unauthorized");
  }
});

app.get("/orders", (req, res) => {
  console.log("req.user", req.user);
  if (req.user) {
    const user = getUserByCredentials({ email: req.user });
    const orders = getOrderListByIds(user.orders);
    res.json({ data: [...orders] });
  } else {
    res.status(401).send("Unauthorized");
  }
});

app.listen(3000);
