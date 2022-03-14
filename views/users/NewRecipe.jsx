const React = require("react");
const UserLayout = require("../UserLayout");



class New extends React.Component {
    render() {

        const {user} = this.props; 
        return (
            <UserLayout title={`New Dish for ${user.name}`} 
            subTitle = "create your new dish :" 
            myStyle={{ color:`${user.fav}` }}
            imageSrc= {user.image} 
            icon={"https://t4.ftcdn.net/jpg/04/52/97/77/360_F_452977789_d2lgKqXb3ZeXGxw25uNg82ObxzVGyRt6.jpg"} 
            urlTo= {`/recipes/user/${user._id}/logout`} 
            > 
              
              

              <form action={`/recipes/user/${user._id}`} method="POST">
                  <ul id="ul-form"  style={{ color :`${user.fav}`}}>

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
                      
                      

                 <li ><input type="submit" value="Submit" style={{ color:`${user.fav}`}}/></li>


                
                 </ul>
                 
              </form>


              

            </UserLayout>
        )
    }
}

module.exports=New;


