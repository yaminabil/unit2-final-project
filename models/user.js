const mongoose = require("mongoose");
const { useRef } = require("react/cjs/react.production.min");
const Schema =mongoose.Schema;
const model = mongoose.model;


const userSchema = new Schema ({
    name:String,
    password:String,
    fav:String,
    image:String,
    connected:Boolean,
    recipes: [{type: Schema.Types.ObjectId, ref: "Recipe"}]
},
{
    timestamps:true
}
)

const User = model("User",userSchema);
module.exports = User;

