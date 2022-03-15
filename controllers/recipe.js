const { Route } = require("express");
const express = require("express");
const { append } = require("express/lib/response");
const { route } = require("express/lib/router");
const Recipe = require("../models/recipe");




const router = express.Router();

router.get ("/seed" , (req,res)=>{

    // const recipes = [
    //     {
    //         name:"pizza",
    //         meal:"launch",
    //         tools:"oven",
    //         ingredients:"tomatoes",
    //         imageSrc:"https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg",
            
             
    //     },//1
    //     {
    //         name:"dolma",
    //         meal:"launch",
    //         tools:"oven",
    //         ingredients:"tomatoes",
    //         imageSrc:"https://www.unicornsinthekitchen.com/wp-content/uploads/2019/08/Dolma-feature-image-500x500.jpg",
             
    //     },//2
    //     {
    //         name:"cheese-cake",
    //         meal:"launch",
    //         tools:"oven",
    //         ingredients:"tomatoes",
    //         imageSrc:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/12/9/0/FNK_Cheesecake_s4x3.jpg.rend.hgtvcom.616.462.suffix/1387411272847.jpeg",
             
    //     },//3
    //     {
    //         name:"salad",
    //         meal:"launch",
    //         tools:"oven",
    //         ingredients:"tomatoes",
    //         imageSrc:"https://cdn.loveandlemons.com/wp-content/uploads/2021/04/green-salad-500x375.jpg",
             
    //     },//4
    //     {
    //         name:"omlets",
    //         meal:"launch",
    //         tools:"oven",
    //         ingredients:"tomatoes",
    //         imageSrc:"https://img-global.cpcdn.com/recipes/ed6933b940de1203/1200x630cq70/photo.jpg",
             
    //     },//5
    //     {
    //         name:"pizza",
    //         meal:"launch",
    //         tools:"oven",
    //         ingredients:"tomatoes",
    //         imageSrc:"https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg",
             
    //     },//6
    //     {
    //         name:"pizza",
    //         meal:"launch",
    //         tools:"oven",
    //         ingredients:"tomatoes",
    //         imageSrc:"https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg",
             
    //     },//7
    //     {
    //         name:"pizza",
    //         meal:"launch",
    //         tools:"oven",
    //         ingredients:"tomatoes",
    //         imageSrc:"https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg",
             
    //     }//8
        
       
    // ]; 

    // Recipe.deleteMany({} , (err)=>{res.redirect("/recipes");})

    Recipe.deleteMany({} )
    .then((data)=>{
        Recipe.create(recipes).then((data)=>{
            res.json(data);
        })
    }).catch((error)=>{
        res.status(400).send(error);})
})

//i n d u  c  e s


//index 



router.get("/" , (req,res)=>{

 
    
    console.log("big test ==============> "+ res.body);

    Recipe.find({user:"622f760c5fc1f8a3e512ad9d"}).then((foundRecipes)=>{
       
        res.render("recipes/Index.jsx" , {
            recipes:foundRecipes,
            // info:req.params.id
         
        })

    }).catch((error)=>{
        res.status(400).send(error);
    })
})



//new

router.get("/new" ,(req,res)=> {

    Recipe.find({user:"622f760c5fc1f8a3e512ad9d"}).then((foundRecipes)=>{
       
        res.render("recipes/New.jsx" , {
            recipes:foundRecipes
        });

    }).catch((error)=>{
        res.status(400).send(error);
    })
})

    


//create
router.post("/",(req,res)=>{
    // let ob2 = {
        
    //     name:req.body.name,
    //     meal:req.body.meal,
    //     tools:req.body.tools,
    //     ingredients:req.body.ingredients,
    //     imageSrc:req.body.imageSrc,
    //     cookMethod:req.body.cookMethod,
    //     cookFault:req.body.cookFault,
    //     user:"public"
    // }
    req.body.user="622f760c5fc1f8a3e512ad9d"
    
    
    Recipe.create(req.body ,(err,createdRecipe)=>{
        if(err){

        }else {
            res.redirect("/recipes");
        }
    })
})

//show 
router.get("/:id" , async (req,res)=> {

   const recipes = await  Recipe.find ({user:"622f760c5fc1f8a3e512ad9d"});
    
    Recipe.findById(req.params.id, (err,foundRecipe)=>{
        if(err){

        } else {
            res.render("recipes/Show.jsx",{
                recipe :foundRecipe,
                recipes
            })
        }
    })
})


// edit 

router.get("/:id/edit",async (req,res)=>{

    const recipes = await  Recipe.find ({user:"622f760c5fc1f8a3e512ad9d"});

    Recipe.findById(req.params.id,(err,foundRecipe)=>{
        if(err){

        } else {
            res.render("recipes/Edit.jsx" ,{
                recipe:foundRecipe,
                recipes

            })
        }

    })
    
})



//update route 

router.put("/:id" ,(req,res)=>{
    Recipe.findByIdAndUpdate (req.params.id, req.body, {new:true}, (err,updatedRecipe)=>{
        if(err){

        }else{
            res.redirect(`/recipes/${updatedRecipe._id}`) ;
        }
    })
})

//delete route 
router.delete("/:id" ,(req,res) => {

    Recipe.findByIdAndDelete(req.params.id , (err,deletedRecipe)=>{
        if(err){
            res.status(400).send(err);
        } else {
            res.redirect("/recipes");
        }
    })
})





// user routes 
////////////////////////////
//user model///////////////
///////////////////////////




const User = require("../models/user");


router.get("/user",(req,res)=>{
    res.send("hello");
})

//login route 

router.get("/user/login",async(req,res)=>{
    const recipes = await  Recipe.find ({user:"622f760c5fc1f8a3e512ad9d"});
    res.render("users/Login.jsx" , {
        recipes
    })
})

//new route 
router.get("/user/new",async (req,res)=>{
    const recipes = await  Recipe.find ({user:"622f760c5fc1f8a3e512ad9d"});
    res.render("users/New.jsx" , {
        recipes

    });
})
//create route 

router.post ("/user",(req,res)=>{
    req.body.connected = false;
    
    User.create(req.body , (err,createdUser)=>{
        if(err){

        } else {
            res.redirect("/recipes/user/login");
        }
    })
})

//login check 

router.post("/user/check" , async (req,res)=>{
    req.body.connected = false;
    const recipes = await  Recipe.find ({user:"622f760c5fc1f8a3e512ad9d"});
    
    User.findOne( {name:req.body.name } , (err,foundUser) => {
       
        if (!foundUser) {
            let message ='user not found !'
            res.render("users/Login.jsx" ,  {
                 message,
                 recipes });
            
            console.log("nooooooooo");
        } else if (foundUser && req.body.password !== foundUser.password) {
            let message ='uncorrect password!'
            res.render("users/Login.jsx" , {
            message ,
            recipes })
            console.log("nooooooooo");
           

        } else {
            foundUser.connected = true;

            User.findByIdAndUpdate (foundUser._id ,foundUser, {new:true},(err,updatedUser) =>{

                if(err) {
                    res.send(err);

                } else {

                    res.redirect(`/recipes/user/${updatedUser._id}`);

                    
                
                    
                }

            })
            
        }
    })


   
})


// index route 


router.get("/user/:id" , async (req,res)=>{

    let user = await User.findById (req.params.id) ;
    


    Recipe.find({user:req.params.id} , (err,foundRecipes) =>{ 
        if(err){
            res.send(err);
        } else {
            res.render("users/Index.jsx",{
                user,
                recipes:foundRecipes

            })
        }


    })
   
       
            
})         
            


//new route for user new recipes 


router.get( "/user/:id/newrecipe" , (req,res)=> {


    User.findById(req.params.id , (err,foundUser) => {
        if(err) {
            res.send(err);

        } else {
            res.render ("users/NewRecipe.jsx" , {
               user : foundUser
            })

        }
    })
  
})

//create route for  user recipes 

router.post("/user/:id",(req,res)=>{
    

    Recipe.create(req.body ,(err,createdRecipe)=>{
        if(err){
            res.send(err);

        } else {

            
            User.findByIdAndUpdate(req.params.id , { $addToSet: { recipes: createdRecipe._id } },{new:true},(err,updatedUser) => {
                if(err) {
                    res.send(err);

                } else {

        
                    res.redirect(`/recipes/user/${req.params.id}`);

                }
            })
            
            
            let ob = {
                id:createdRecipe._id,
                name:createdRecipe.name,
                meal:createdRecipe.meal,
                tools:createdRecipe.tools,
                ingredients:createdRecipe.ingredients,
                imageSrc:createdRecipe.imageSrc,
                cookMethod:createdRecipe.cookMethod,
                cookFault:createdRecipe.cookFault,
                user:req.params.id
            }

            Recipe.findByIdAndUpdate(createdRecipe._id , ob ,{new:true} ,(err , updatedRecipe)=>{
                if(err){
                    res.send(err)
                }

            })

           
            
           
        }
    })
})

// create = method (post) , update =method (put) , delete = method (delete)


//edit connection 

router.get("/user/:id/logout" , async (req,res)=>{
    let user = await User.findById(req.params.id);
    res.render("users/Logout.jsx",{user} );
   

})

/// log out  Update

router.put ("/user/:id" , async (req,res)=>{

  let user = await User.findById(req.params.id);
     user.connected = false ;

    
    User.findByIdAndUpdate(req.params.id,user ,{new:true},(err,updatedUser)=>{
        if(err){
            res.send(err);
        }else {
            res.redirect("/recipes/user/login");
        }
    } )
})

// show route for user profile 

router.get ("/user/:id/profile" , (req,res) =>{
    User.find({ _id: {$ne: "622f760c5fc1f8a3e512ad9d"}}  , (err,foundUsers) => {
        if(err) {
            res.send(err) ; 
        }else {
            User.findById (req.params.id).then((foundUser)=>{
                res.render("users/Profile.jsx",{
                    user:foundUser,
                   users:foundUsers  } );
            }).catch((err)=>{
                res.send(err);
            })

        }
    })
   
    
})

//show route for recipe for user 


router.get("/user/recipe/:id"  , async (req,res)=> {
    


   

    Recipe.findById (req.params.id , (err,foundRecipe) =>{
        if(err) {
            res.send(err);
        } else { 
              User.findById (foundRecipe.user, (err,foundUser)=>{
                  if (err) {
                      res.send(err);

                  } else {
                    res.render ("userRecipes/Show.jsx" , {
                        recipe  :foundRecipe,
                        user : foundUser
                    })
                  }

            }) ;
            
          
        }
        
    })

     
  


   
})


//delete route for user's recipe 


router.delete("/user/recipe/:id" , (req,res) => {

    Recipe.findById (req.params.id , (err,foundRecipe) => {
     if(err) {
         res.send(err);
     }else { 
         User.findById (foundRecipe.user , (err, foundUser) => {
             if(err) {
                 res.send(err); 
             }else { 
                 Recipe.deleteOne(foundRecipe).then(()=> {
                     res.redirect(`/recipes/user/${foundUser._id}`) ;
                 })
             }
         })
     }
    })
})

// edit route for user's recipe 


router.get ("/user/recipe/:id/edit" , (req,res) =>{

    Recipe.findById (req.params.id , (err,foundRecipe) => {
        if(err) {
            res.send(err);
        }else { 
            User.findById (foundRecipe.user , (err, foundUser) => {
                if(err) {
                    res.send(err); 
                }else { 
              
                    res.render ( "userRecipes/Edit.jsx" ,{
                        user:foundUser,
                        recipe:foundRecipe
                    })
                
                }
            })
        }
    })
    
})


// update route for user's recipes 



router.put ("/user/recipe/:id" , (req,res)=> {

    Recipe.findById (req.params.id , (err,foundRecipe) => {
        if(err) {
            res.send(err);
        }else { 
            User.findById (foundRecipe.user , (err, foundUser) => {
                if(err) {
                    res.send(err); 
                }else { 
              Recipe.findByIdAndUpdate (req.params.id ,req.body,{new:true},(err,updatedRecipe) => {
                  if(err) {
                      res.send (err) ; 
                  }else {
                      res.redirect(`/recipes/user/${foundUser._id}`)
                  }
              }) ; 
                
                
                }
            })
        }
    })

})

// edit route for profile  


router.put ("/user/:id/profile" , (req,res)=>{

      let ob = {
          name: req.body.name ,
          password : req.body.password,
          fav :req.body.fav ,
          image:req.body.image,
          connected:true
      }
    console.log (req.body);
    User.findByIdAndUpdate ( req.params.id, ob ,{new:true} , (err,updatedUser) => {
        console.log (updatedUser);
        res.redirect (`/recipes/user/${req.params.id}/profile`)
    })
})


// delete profile    // in order to delete any profile we have to delete first all the recipes and then delete the profile

router.delete ("/user/:id/profile" , (req,res) => {
    Recipe.deleteMany ({user :req.params.id} , (err,deletedRecipes)=> { 
        if(err) {
            res.send(err);

        }else {
            User.findOneAndDelete( {_id:req.params.id} , (err,deletedUser)=> {

                res.redirect(`/recipes/user/login`);

            })
            
        }
    })
})







//////////messsages /////////////////////////

const Message = require("../models/message");

router.get ("/user/:id1/profile/:id2/message" , (req,res)=> {

    User.findById (req.params.id1 , (err,foundUser1) =>{
        if(err) {
            res.send(err);
        }else { 
            User.findById (req.params.id2 , (err,foundUser2)=> {
                if(err) {
                    res.send(err);
                } else { 
                    res.render ("messages/New.jsx" , {
                        user1 : foundUser1,
                        user2:foundUser2
                    });

                } })
        
    }
  
})
})


//new message 

router.post ("/user/:id1/profile/:id2" ,  (req,res) => {
     


 let ob = {
     content : req.body.content,
     user1 : req.params.id1,
     user2 :req.params.id2

 }
    Message.create(ob , (err,createdMessage)=> {
        if(err) {
            res.send(err);
                } else { 
           
    User.findByIdAndUpdate (req.params.id1 , { $addToSet: { messages: createdMessage._id } },{new:true}, (err,updatedUser) =>{
                if(err){
                    res.send(err);
                       } else {
                          console.log("teste1");
                          console.log(updatedUser) ;

     User.findByIdAndUpdate ( req.params.id2 ,{ $addToSet: { messages: createdMessage._id } },{new:true}, (err,updatedUser2) =>{
          if(err) {
                        res.send(err) ;
                    }else {
                        console.log("teste2");
                        console.log(updatedUser2) ;
                        res.redirect (`/recipes/user/${req.params.id1}/profile`);
                       
                    }
                    
                })
            } 

        })
       }
    })

})




    





module.exports=router;



/// function 





// User.findById (req.params.id , (err,foundUser)=> {
//     if(err){
//         res.send(err);
//     }else{
//        const arrData =[];



      
//        //////////////////start//////////////////////////////

//        if(foundUser.recipes.length === 0){
//            res.render('users/Index.jsx',{
//                user:foundUser,
//                arrOfData: arrData
//            })

//        }else{

//        for(let i = 0 ; i < foundUser.recipes.length ; i++) {// start
//            // console.log("hello there can you see me  ===============> " + recipe);
//            Recipe.findById (foundUser.recipes[i] ).then((foundRecipe)=>{
//              arrData.push(foundRecipe);

            


//              if (i===foundUser.recipes.length-1){ // do not render unless this conndition is satisfied  the reason why i did it this  because the render is faster than my loop collecting the data

//                console.log(arrData.length);
//                res.render('users/Index.jsx',{
//                    user:foundUser,
//                    arrOfData: arrData
//                })
               
//              }
             
             
               
//            }).catch((error) => {  res.status(400).send(error);})
//        }

//    }

      
   
          

        


//        ///////////////////end/////////////////////////////

//     }
// }); 


