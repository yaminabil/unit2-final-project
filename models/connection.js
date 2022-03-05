require("dotenv").config();
const mongoose = require("mongoose");

// connection data base 



const DATABASE_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT;

const CONFIG = {
    useNewUrlParser : true,
    useUnifiedTopology:true
}

// establish conection 

mongoose.connect(DATABASE_URL,CONFIG);



// open events

mongoose.connection 
.on("open",()=> console.log("you're inside the bulding "))
.on("close",()=> console.log("you're outside the building"))
.on("error",(error)=> console.log(error)) ;


module.exports = mongoose;