const express = require("express");
const morgan = require("morgan"); 
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

//connect to mongoDB
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const dbURI = process.env.CONNECTIONUSER;
mongoose
  .connect(dbURI, connectionParams)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

//blog route
app.use("/blogs", blogRoutes);

//404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
