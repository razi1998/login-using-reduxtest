
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors=require("cors")
const dburl =
"mongodb+srv://admin:admin@cluster0.zvzgs.mongodb.net/projectDB?retryWrites=true&w=majority";

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.use(cors())
app.use(bodyParser.json())

mongoose
  .connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((res) => {
    console.log("Could not connect to database");
    process.exit();
  });

const UserSchema = mongoose.Schema(
  {
    name:"",
    email:"",
    password:"",
    role:""
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

app.get("/user", (req, res) => {
  User.find()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.send({
        message: " error ",
      });
    });
});

app.post("/user", (req, res) => {
  console.log("posting data")
  const user = new User({
    
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
  });
  console.log(user)
  user
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({
        message: "Unable to add the user",
      });
    });
});


app.listen(4000, () => {
  console.log("App Starting on port 4000");
});















