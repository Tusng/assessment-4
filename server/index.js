const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const controller = require('./controller')

app.get("/api/compliment", controller.getCompliment);

//Feature Fortune
app.get("/api/fortune", controller.getFortune);

//Fearture get a random baby girl name
app.get("/api/babyGirl", controller.getBabyName);

//Fearture get a random inspirational quote
app.get("/api/inspiration", controller.getInspirationalQuote);

//Fearture get a random soccer team
app.get("/api/soccerTeam", controller.getSportTeam);

//Feartire create a client profile
app.post("/api/client", controller.createClient);

app.listen(4000, () => console.log("Server running on 4000"));
