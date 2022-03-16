const React = require("react");
const DefaultLayout =require("../Default.jsx");
const chunk =require("../../functions/function");




class Index extends React.Component {

    render(){
        

        
        const recipes = this.props.recipes;
        const arrOfData = recipes;

     
        
   
        
        // console.log ("test =>>> " + this.props.userId );
       
        
      
        console.log("big testtttt ======>>>>>"+ chunk(recipes,3));

        let arrData = chunk(arrOfData,3) ; // split out data to small arrays of length of 3 to use the data 
    
    
  

        if(arrOfData.length > 3) {

            return (
                <DefaultLayout 
                title = {`Welcome To MyCookBook`} 
                urlTo={"/recipes/user/login"}  
                icon= {"https://iconape.com/wp-content/files/jf/369922/png/369922.png"} 
                urlBack="/recipes"
                number={recipes.length}
                >
        
                 <h2>Shared Plates :</h2>
                 <div className="total"> 
                 <a href={`/recipes/new`}> <div className="plus"></div> </a>  
    
    
                 <div className="container">
                    
                    {  
                       
                      arrData.map ((Element)=>(
                          
                          <div className="row" >
                              {
                                 Element.map((data)=>(
                                     
                                     
                                     <a className="col"  href={`/recipes/${data._id}`} style={{
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
                                     
                            
                    
                
                </DefaultLayout>
    
            )
        } else  {
                return (
                    <DefaultLayout
                     title = {`Welcome To MyCookBook `}
                     urlTo={"/recipes/user/login"}  
                      icon= {"https://iconape.com/wp-content/files/jf/369922/png/369922.png" } 
                      >
            
                     <h2>Shared Plates :</h2>
                     <div className="total">
                     <a href={`/recipes/new`}> <div className="plus"></div> </a>  
                     <div className="container"> 
                     <div className="row" >
                         {
                         arrData.map((Element)=>
                             (
                             <a className="col" href={`/recipes/${Element._id}`} style ={{
                                backgroundImage:`url( "${Element.imageSrc}")` ,
                                backgroundSize:"cover"
                             }}>
                                 {Element.name}
    
                             </a>
                             
    
                          ) )
                     }</div>
                     </div>
                     </div>
                     </DefaultLayout>
                )
        }
                     
    
    }}
module.exports = Index;


