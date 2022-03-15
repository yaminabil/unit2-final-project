const { append } = require("express/lib/response");
const React = require("react");
const DefaultLayout =require("../Default");



class Login extends React.Component {
    render(){
        // let divMessage = React.createElement("h1",{className:"div-message"});
        const message =this.props ;
        const recipes = this.props.recipes;
        console.log(message);
        return (
            <DefaultLayout
             title="Login" 
             urlBack="/recipes" 
             number={recipes.length}>
               

             <form action="/recipes/user/check" method="POST">
                 <ul>

                <li> UserName    : <input name="name"/> </li>
                <li> Password : <input name="password"  type="password"/> </li>
                <li> <input type="submit" value="login"/> </li>
                 
                 {
                     message && <h1>{message.message}</h1>
                 }
                 </ul>
             </form>

             <h1> If You don't have an account create <a href="/recipes/user/new"> here</a></h1>
             
                 
             

            </DefaultLayout>

        )
    }
}

module.exports =Login; 