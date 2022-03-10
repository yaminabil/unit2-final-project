const React = require("react");
const DefaultLayout = require("../Default");



class Edit extends React.Component {
    render(){
        const {recipe} = this.props;
        return(
            <DefaultLayout title={`Edit ${recipe.name}`}>
                <a href={`/recipes/${recipe._id}`}>Go back to show route</a>
             <form action={`/recipes/${recipe._id}?_method=PUT`} method="POST">
                  <ul id="ul-form">

                 <li>Name: <input className="name" type="text" name="name" value={recipe.name} /><br /></li> 
                 <li>Meal: 
                   <ul>
                  <div class="form-check">
                 {recipe.meal === "breakfast" ?
                 <input class="form-check-input" type="radio" name="meal" id="exampleRadios1" value="breakfast" checked/> :
                 <input class="form-check-input" type="radio" name="meal" id="exampleRadios1" value="breakfast" /> 
                 }

                 <label class="form-check-label" for="exampleRadios1">
                    breakfast
                  </label>
                </div>
                
                <div class="form-check">
                {recipe.meal ==="lunch" ?
                  <input class="form-check-input" type="radio" name="meal" id="exampleRadios2" value="lunch" checked/>  :
                  <input class="form-check-input" type="radio" name="meal" id="exampleRadios2" value="lunch" />
                }
                  <label class="form-check-label" for="exampleRadios2">
                  lunch
                 </label>
                </div>
               <div class="form-check"> 
               {recipe.meal === "dinner" ?
                   <input class="form-check-input" type="radio" name="meal" id="exampleRadios3" value="dinner" checked /> :
                   <input class="form-check-input" type="radio" name="meal" id="exampleRadios3" value="dinner"  /> 

               }
                   <label class="form-check-label" for="exampleRadios3">
                     dinner
                   </label>
                  </div> 
                  </ul>
                  </li> 
                  <li>Tools:<br />
                 <textarea type="text" name="tools" value={recipe.tools}/> <br /></li> 
                 <li> Ingrediends : <br />
                 <textarea  type="text" name="ingredients" value={recipe.ingredients}/> <br /></li> <br/>

                 <li>
                     
                     
                     Insert Image url here :<br /> <input id="urlInput" name="imageSrc" value={recipe.imageSrc}/> 
                     

                     </li> <br/><br/><br/>


                     

                      <li>
                          <h3> How did you cook it ? </h3>
                      <textarea  name="cookMethod" value={recipe.cookMethod}/>
                      </li>
                      <li>
                          <h3>  What went bad ? </h3>
                      <textarea name="cookFault" value={recipe.cookFault} />
                      </li>
                      
                      

                 <li><input type="submit"/></li>


                
                 </ul>
                 
              </form>

            </DefaultLayout>

        )
    }
}
module.exports=Edit ;