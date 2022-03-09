const React = require("react");
const DefaultLayout =require("../Default")



class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="New Dish"> 
              
              <h2>create your new dish :</h2>
              <form action="/recipes" method="POST">
                  <ul>

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
                 <li> Ingrediends : <br />
                 <textarea  type="text" name="ingredients" /> <br /></li> 

                 <li>
                     
                     
                     Insert Image url here : <input id="urlInput" name="imageSrc"/> 
                     

                     </li>

                 <li><input type="submit"/></li>


                
                 </ul>
              </form>
              

            </DefaultLayout>
        )
    }
}

module.exports=New;


