const React = require("react");
const DefaultLayout =require("../Default");


class New extends React.Component {
    render(){
        const {recipes} = this.props ;
        return(
            <DefaultLayout 
            title = "Create your account" 
             urlBack= "/recipes/user/login"
             number = {recipes.length}>
                <h1>Enter Your Info :</h1>
               
                
                <form action="/recipes/user" method="POST">
                    <ul>
               <li>  UserName    : <input  name="name"/> </li><br />
               <li> Password : <input  name="password"/> </li><br />
               <li> what's your favorite color :<input name="fav" /> </li> <br />
               <li>Your photo URL :<input name="image"/> </li>
               <li>  <input type="submit" value="Create"/></li> 
                 </ul>

             </form>
                

            </DefaultLayout>

        )
    }
}
module.exports= New;