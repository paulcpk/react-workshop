const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const crypto = require("crypto");
const app = express();
const authTokens = {};

// inspired by: https://github.com/jkasun/stack-abuse-express-authentication

// mock DB
const users = [
  // This user is added to the array to avoid creating new user on each restart
  {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@gmail.com",
    password: "Test123",
  },
];

const getHashedPassword = (password) => {
//   const sha256 = crypto.createHash("sha256");
//   const hash = sha256.update(password).digest("base64");
//   return hash;
    // Mock implementation
    return password
};

const generateAuthToken = () => {
  return crypto.randomBytes(30).toString("hex");
};

// to support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use((req, res, next) => {
  const authToken = req.cookies["AuthToken"];
  req.user = authTokens[authToken];
  next();
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = getHashedPassword(password);

  const user = users.find((u) => {
    return u.email === email && hashedPassword === u.password;
  });

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

// protected route
app.get("/profile", (req, res) => {
  if (req.user) {
    res.json({
      user: {
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@gmail.com",
      },
    });
  } else {
    res.status(401).send("Unauthorized");
  }
});

app.listen(3000);
