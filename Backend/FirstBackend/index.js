import dotenv from "dotenv";
dotenv.config();
import express from "express";
import AuthRouter from "/src/routers/auth.route.js"
import PublicRouter from "/src/routers/public.route.js"

const app = express();

app.use("/auth", AuthRouter);
app.use("/public", PublicRouter);


app.get("/", (req, res) => {
  console.log("Default Get API Hit");
  res.json({ message: "Welcome to my first backend Project" });
});

app.port("/register", (req, res) => {
  res.json({ message: "login successfull"});
});

app.port("/logout", (req, res) => {
  res.json({ message: "logout successful"});
});

app.port("/register", (req, res) => {
  res.json({ message: "logout sucessfull"});
});

app.port("/register", (req, res) => {
  res.json({ message: "login sucessfull"});
});
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server Started on port:", port);
});
