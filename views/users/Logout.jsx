const React = require ("react"); 
const UserLayout = require("../UserLayout");



class Logout extends React.Component {
    render () {
        const user = this.props.user;
        return(       
        <UserLayout 
        title = {"are you sure you want to log out ?"} 
        myStyle={user.fav} 
        icon ={"https://t4.ftcdn.net/jpg/04/52/97/77/360_F_452977789_d2lgKqXb3ZeXGxw25uNg82ObxzVGyRt6.jpg"}
        urlTo= {`/recipes/user/${user._id}/logout`}  
        imageSrc= {user.image} 
        urlProfile={`/recipes/user/${user._id}/newrecipe`}
        
        urlBack = {`/recipes/user/${user._id}`}
        >
         
         <form action={`/recipes/user/${user._id}?_method=PUT`} method="POST" >
            
              
                <input type="submit" value="yes" style={{color:`${user.fav}`}} />
             
             
            
         </form>

         <form action={`/recipes/user/${user._id}`}   method="GET"> 

         <input type="submit" value="no" style={{color:`${user.fav}`}} />

         </form>
         {/* <li><a href={`/recipes/user/${user._id}`} > no </a></li>  */}
         
  
                

  

       
           

         </UserLayout>

        )
    }
}

module.exports = Logout ;