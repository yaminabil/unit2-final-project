const React = require("react");
const DefaultLayout =require("../Default")



class New extends React.Component {
    render() {
        const recipes = this.props.recipes;
        return (
            <DefaultLayout 
            title="New Dish" 
            urlBack="/recipes"
            number={recipes.length}

            > 
              
              <h2>Create Your Plate :</h2>

              <form action={`/recipes`} method="POST">
                  <ul className="ul-form">

                 <li>Name: <input className="name" type="text" name="name" /><br /></li> 
                 <li>Meal:
                   <ul>
                  <div class="form-check">
                 <input class="form-check-input" type="radio" name="meal" id="exampleRadios1" value="breakfast" checked />
                 <label class="form-check-label" for="exampleRadios1">
                    breakfast
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="meal" id="exampleRadios2" value="lunch"/> 
                  <label class="form-check-label" for="exampleRadios2">
                  lunch
                 </label>
                </div>
               <div class="form-check"> 
                   <input class="form-check-input" type="radio" name="meal" id="exampleRadios3" value="dinner" />
                   <label class="form-check-label" for="exampleRadios3">
                     dinner
                   </label>
                  </div> 
                  </ul>
                  </li> 
                  <li>Tools:<br />
                 <textarea type="text" name="tools"/> <br /></li> 
                 <li> Ingredients : <br />
                 <textarea  type="text" name="ingredients" /> <br /></li> <br/>

                 <li>
                     
                     
                     Insert Image url here :<br /> <input id="urlInput" name="imageSrc"/> 
                     

                     </li> <br/><br/><br/>


                     

                      <li>
                          <h3> How did you cook it ? </h3>
                      <textarea  name="cookMethod"/>
                      </li>
                      <li>
                          <h3>  What went bad ? </h3>
                      <textarea name="cookFault" />
                      </li>
                      
                      

                 <li><input type="submit"/></li>


                
                 </ul>
                 
              </form>


              

            </DefaultLayout>
        )
    }
}

module.exports=New;


