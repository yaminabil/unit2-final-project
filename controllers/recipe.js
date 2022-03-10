const express = require("express");
const { render } = require("express/lib/response");
const Recipe = require("../models/recipe");


const router = express.Router();

router.get ("/seed" , (req,res)=>{

    const recipes = [
        {
            name:"pizza",
            meal:"launch",
            tools:"oven",
            ingredients:"tomatoes",
            imageSrc:"https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg",
            
             
        },//1
        {
            name:"dolma",
            meal:"launch",
            tools:"oven",
            ingredients:"tomatoes",
            imageSrc:"https://www.unicornsinthekitchen.com/wp-content/uploads/2019/08/Dolma-feature-image-500x500.jpg",
             
        },//2
        {
            name:"cheese-cake",
            meal:"launch",
            tools:"oven",
            ingredients:"tomatoes",
            imageSrc:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/12/9/0/FNK_Cheesecake_s4x3.jpg.rend.hgtvcom.616.462.suffix/1387411272847.jpeg",
             
        },//3
        {
            name:"salad",
            meal:"launch",
            tools:"oven",
            ingredients:"tomatoes",
            imageSrc:"https://cdn.loveandlemons.com/wp-content/uploads/2021/04/green-salad-500x375.jpg",
             
        },//4
        {
            name:"omlets",
            meal:"launch",
            tools:"oven",
            ingredients:"tomatoes",
            imageSrc:"https://img-global.cpcdn.com/recipes/ed6933b940de1203/1200x630cq70/photo.jpg",
             
        },//5
        {
            name:"pizza",
            meal:"launch",
            tools:"oven",
            ingredients:"tomatoes",
            imageSrc:"https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg",
             
        },//6
        {
            name:"pizza",
            meal:"launch",
            tools:"oven",
            ingredients:"tomatoes",
            imageSrc:"https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg",
             
        },//7
        {
            name:"pizza",
            meal:"launch",
            tools:"oven",
            ingredients:"tomatoes",
            imageSrc:"https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg",
             
        }//8
        
       
    ]; 

    Recipe.deleteMany ({}).then((data)=>{
        Recipe.create(recipes).then((data)=>{
            res.json(data);
        })
    }).catch((error)=>{
        res.status(400).send(error);})
})


//index 
router.get ("/" , (req,res)=>{
    Recipe.find({}).then((foundRecipes)=>{
        res.render("recipes/Index.jsx" , {
            recipes:foundRecipes
        })

    }).catch((error)=>{
        res.status(400).send(error);
    })
})

//new
router.get("/new" ,(req,res)=> {
    res.render("recipes/New.jsx");
})


//create
router.post("/",(req,res)=>{
    Recipe.create(req.body ,(err,createdRecipe)=>{
        if(err){

        }else {
            res.redirect("/recipes");
        }
    })
})

//show 
router.get("/:id" , (req,res)=> {
    Recipe.findById(req.params.id, (err,foundRecipe)=>{
        if(err){

        } else {
            res.render("recipes/Show.jsx",{
                recipe :foundRecipe
            })
        }
    })
})

router.get("/:id/edit",(req,res)=>{
    Recipe.findById(req.params.id,(err,foundRecipe)=>{
        if(err){

        } else {
            res.render("recipes/Edit.jsx" ,{
                recipe:foundRecipe

            })
        }

    })
    
})

//update route 

router.put("/:id" ,(req,res)=>{
    Recipe.findByIdAndUpdate(req.params.id,req.body, {new:true}, (err,updatedRecipe)=>{
        if(err){

        }else{
            res.redirect(`/recipes/${updatedRecipe._id}`) ;
        }
    })
})


module.exports=router;