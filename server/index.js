const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const multer = require("multer");
const path=require("path");
const cors=require('cors');
const http =require ("http");


dotenv.config(); //to use env


app.use(cors());



mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Connected to MongoDB");
});

app.use("/images",express.static(path.join(__dirname,"public/images")));


app.get("/", (req, res) => {
  res.send("user root");
});

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));




const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name); 
  },
});

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploaded successfully.");
  } catch (err) {
    // console.log(err);
  }
});

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);


const server = http.createServer(app);
server.listen(process.env.PORT || 8800, () => {
  console.log("Backend server running");
});


module.exports=app;