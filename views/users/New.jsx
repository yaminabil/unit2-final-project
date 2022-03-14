const React = require("react");
const DefaultLayout =require("../Default");


class New extends React.Component {
    render(){
        return(
            <DefaultLayout title = "Create your account">
                <h1>Enter Your Info :</h1>
                <a href="/recipes/user/login">go back to login page </a>
                
                <form action="/recipes/user" method="POST">
                    <ul>
               <li>  UserName    : <input  name="name"/> </li><br />
               <li> Password : <input  name="password"/> </li><br />
               <li> what's your favorit color :<input name="fav" /> </li> <br />
               <li>Your photo URL :<input name="image"/> </li>
               <li>  <input type="submit" value="Create"/></li> 
                 </ul>

             </form>
                

            </DefaultLayout>

        )
    }
}
module.exports= New;