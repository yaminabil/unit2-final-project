const mongoose = require ("./connection");

const {Schema , model} =mongoose ;


const recipeSchema = new Schema ({
    name:String,
    meal:String,
    tools:String,
    ingredients:String,
    imageSrc:String
},
{
    timestamps:true
})

const Recipe = model("Recipe",recipeSchema);
module.exports = Recipe;