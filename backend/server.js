require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const projectRoutes = require("./routes/project");
const app = express();
const bodyParser = require("body-parser");
MONGO_URI= "mongodb+srv://Create_Project:20011997@cluster0.v8xz1pd.mongodb.net/project?retryWrites=true&w=majority"

app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );
  // middleware
  app.use(express.json());
  
  mongoose.set("strictQuery", true);
  // routes
  
  app.use("/api/project", projectRoutes);
  
  // connect to db
  
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      // listen for requests
      app.listen(process.env.PORT, () => {
        console.log("connected to db & listening on port", process.env.PORT);
      });
    })
    .catch((error)=>{
        console.log(error);
    })

    