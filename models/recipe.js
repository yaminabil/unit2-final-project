const mongoose = require ("./connection");

const {Schema , model} =mongoose ;


const recipeSchema = new Schema ({
    name:String,


})

const Recipe = model("Recipe",recipeSchema);
module.exports = Recipe;