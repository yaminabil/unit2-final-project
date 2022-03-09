const React = require("react");
const DefaultLayout =require("../Default.jsx");
const chunk =require("../../functions/function");
const { urlencoded } = require("express");



class Index extends React.Component {


  

    render(){
        const recipes = this.props.recipes;
        console.log ("test =>>> " );
        // console.log(chunk(recipes,4));
        let arrData = chunk(recipes,3) ; // split out data to small arrays of length of 3 to use the data 

    

        
        return (
            <DefaultLayout title = "Welcome To MyCookBook" >
    
            <h2>Previous Dishes:</h2>
            <div className="total"> 
            <a href="/recipes/new"> <div className="plus"></div> </a>
            
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
    }
}

module.exports = Index;


/*
   <div className="container">
                           <div className="row">
                             <div className="col">
                             
                                1 
                              </div>
                             <div className="col">
                                2 
                             </div>
                             <div className="col">
                                3
                             </div>
                             <div className="col">
                                4
                             </div>
                          </div>
                              <div className="row">
                                <div className="col">
                                  1 
                                </div>
                                <div className="col">
                                  2 
                                </div>
                                 <div className="col">
                                  3 
                                </div>
                                <div className="col">
                                  4
                                </div>
                              </div>
                            </div> */