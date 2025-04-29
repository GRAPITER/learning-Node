const express = require("express");
const port = 3000;
const app = express();

// Middleware is a function that has access to the req, res, and next objects in the request-response cycle.

//  Middleware can:
// Execute any code.

// Modify the request (req) or response (res) objects.

// End the request-response cycle.

// Call the next() function to pass control to the next middleware.
const myFirstMiddleWare = (req, res, next) => {
  console.log(
    `${Date.now().toString()} from url  ${req.url} and method ${req.method}`
  );
  next();
};

app.use(myFirstMiddleWare);

app.get("/", (req, res) => {
  res.send("home");
});
app.get("/about", (req, res) => {
  res.send("about");
});

app.listen(port, () => {
  console.log("connected");
});
