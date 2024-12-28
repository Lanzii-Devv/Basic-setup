const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 2300;
const anpath = path.join(__dirname, "FrontEnd");

app.use(express.static(anpath));
app.use(express.json());
app.use(cors({
    origin:"*"
}));

app.get("/jiezel", (req, res)=>{
    console.log("hgrdtyr");
    res.send("Jiezel");
});

app.listen(port, ()=>{
    console.log("server is running");
});