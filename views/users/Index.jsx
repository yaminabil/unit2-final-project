const React = require("react");
const UserLayout = require("../UserLayout");
const chunk =require("../../functions/function");





class Index extends React.Component {

    render(){
         const user = this.props.user;
         const  recipes = this.props.recipes;
         const arrOfData = recipes;
         let arrData = chunk(arrOfData,3);  // split out data to small arrays of length of 3 to use the data 

        //   console.log("big testttt ==================>"+ arrOfData +"<======================= big test" );
         

       if(arrOfData.length > 3) {

        return (
            <UserLayout
             title = {`Welcome To MyCookBook ${user.name}`} 
             urlTo={`/recipes/user/${user._id}/logout`} 
             icon ={"https://t4.ftcdn.net/jpg/04/52/97/77/360_F_452977789_d2lgKqXb3ZeXGxw25uNg82ObxzVGyRt6.jpg"} 
             subTitle={"Your Previous Dishes :"} 
             urlProfile={`/recipes/user/${user._id}/profile`}
             urlBack = {`/recipes/user/${user._id}/logout`}
             myStyle={user.fav}
            imageSrc= {user.image} 
             
            
            
             >
    
            
            
             <div className="total"> 
             <a href={`/recipes/user/${user._id}/newrecipe`}> <div className="plus"></div> </a>  


             <div className="container" >
                
                {  
                   
                  arrData.map ((Element)=>(
                      
                      <div className="row" >
                          {
                             Element.map((data)=>(
                                 
                                 
                                 <a className="col"  href={`/recipes/user/recipe/${data._id}`} 
                                 style={{
                                    backgroundImage:`url( "${data.imageSrc}")` ,
                                    backgroundSize:"cover"
                                    }}>
                                     
                                     
                                    
                                   {data.name} 
                                    
                                     
                                 </a>
                                 
                             ))

                          }

                      </div>
                      
                      


                  ))
                }
                </div> 

                                    






             
             </div>
                                 
                        
                
            
            </UserLayout>

        )
    } else  {
            return (
                <UserLayout 
                title = {`Welcome To MyCookBook ${user.name}`}
                urlTo= {`/recipes/user/${user._id}/logout`} 
                icon={"https://t4.ftcdn.net/jpg/04/52/97/77/360_F_452977789_d2lgKqXb3ZeXGxw25uNg82ObxzVGyRt6.jpg"} 
                subTitle={"Your Previous Dishes :"} 
                myStyle={user.fav}
                imageSrc= {user.image} 
                urlProfile={`/recipes/user/${user._id}/profile`}
                urlBack = {`/recipes/user/${user._id}/logout`}
                >
        
                 {/* <h2 style={{backgroundColor:"blueviolet"}}> Your Previous Dishes  :</h2> */}




                 <div className="total">
                 <a href={`/recipes/user/${user._id}/newrecipe`}> <div className="plus"></div> </a>  
                 <div className="container"> 
                 <div className="row" >
                     {
                     arrData.map((Element)=>
                         (
                         <a className="col" href={`/recipes/user/recipe/${Element._id}`} style ={{
                            backgroundImage:`url( "${Element.imageSrc}")` ,
                            backgroundSize:"cover"
                         }}>
                             {Element.name}

                         </a>
                         

                      ) )
                 }</div>
                 </div>
                 </div>
                 </UserLayout>
            )
    }
                 

}}

module.exports = Index;

