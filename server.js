require("dotenv").config();
const express = require("express");
const mongoose =require("mongoose");
const morgan =require("morgan");
const methodOverride = require("method-override");
const path = require("path");
const recipesController = require("./controllers/recipe");









// create out app 

const app = express();


// set the engine 

app.engine ("jsx" ,require("express-react-views").createEngine());
app.set("views engine","jsx") ;


// 
app.use(morgan("tiny"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));


//Routes
app.use("/recipes",recipesController);
app.get ("/",(req,res) =>{
    res.send("your server is runing ..... you better catch it ");

})





//server listener 
const PORT = process.env.PORT;
app.listen(PORT , ()=> {
    console.log(`now listening on port ${PORT}`) ;
})


