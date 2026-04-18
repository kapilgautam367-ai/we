const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

let bookings = [];

// ✈️ BOOKING SYSTEM
app.post("/book",(req,res)=>{
    bookings.push(req.body);
    console.log("NEW BOOKING:", req.body);
    res.json({msg:"Booking saved"});
});

// 📊 ADMIN VIEW
app.get("/admin",(req,res)=>{
    res.json(bookings);
});

app.listen(3000,()=>{
    console.log("Business system running on http://localhost:3000");
});