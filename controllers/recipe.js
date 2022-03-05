const express = require("express");
const Recipe = require("../models/recipe");


const router = express.Router();

router.get ("/seed" , (req,res)=>{

    const recipes = [
        {
            name:"pizza"
        },
        {
            name:"dolma"
        }
    ]; 

    Recipe.deleteMany ({}).then((data)=>{
        Recipe.create(recipes).then((data)=>{
            res.json(data);
        })
    }).catch((error)=>{
        res.status(400).send(error);})
})



router.get ("/" , (req,res)=>{
    Recipe.find({}).then((foundRecipes)=>{
        res.render("recipes/Index.jsx" , {
            recipes:foundRecipes
        })

    }).catch((error)=>{
        res.status(400).send(error);
    })
})

module.exports=router;