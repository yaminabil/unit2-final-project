const React = require("react");
const DefaultLayout =require("../Default")


class Show extends React.Component {
    render(){
        const recipe = this.props.recipe ;
        return(
            
            <DefaultLayout title ={`${recipe.name}`} >

              <div id="show-div">
              
              <ul>
                  <a href="/recipes">Go back to your food collection</a>
              <li>Date this dish was made is : {recipe.createdAt.toLocaleDateString()}</li> <br />
              <li>The meal : {recipe.meal}</li>  <br />
              <li>The tools was used : {recipe.tools} </li><br />
              <li>The ingredients was used : {recipe.ingredients}</li> <br />
              <div               style={{
                                    backgroundImage:`url( "${recipe.imageSrc}")` ,
                                    backgroundSize:"cover",
                                    backgroundRepeat:"no-repeat",
                                    width:500,
                                    height:500,
                                    borderRadius:10
                                    }}>  </div>

                                    
               </ul>
               <div className="vl"></div>
               <div className="cook-method">
                   <div>
                   <h1>How did you cook it ?</h1>
                  <p>{recipe.cookMethod}</p>
                  </div>
                  <div>
                  <h1>what went bad ?</h1>
                  <p>{recipe.cookFault}</p>
                  </div>
                  
              </div>

               </div>
               <br/>

               Click <a href={`/recipes/${recipe._id}/edit`}>here</a> if you want to edit !

               
               
               
               <form action={`/recipes/${recipe._id}?_method=DELETE`} method="POST">

               Click <input  type="submit" value = "delete" /> if you want to delete !

               </form>
              

            </DefaultLayout>
            

        )
    }
}


module.exports = Show;

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, illo! Quibusdam voluptate ut veniam quos nostrum sint eveniet at ex! Laboriosam ipsam laborum, sit nihil minima error omnis? Fugiat, qui?</p>