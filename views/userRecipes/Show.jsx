const React = require ("react");
const UserLayout = require("../UserLayout");




class Show extends React.Component {
    render () {
        const {recipe} = this.props;
        const {user} = this.props; 
        return (
        <UserLayout 
        title = {`${recipe.name}`} 
        urlTo = {`/recipes/user/${recipe.user}/logout`}
        icon ={"https://t4.ftcdn.net/jpg/04/52/97/77/360_F_452977789_d2lgKqXb3ZeXGxw25uNg82ObxzVGyRt6.jpg"} 
        subTitle={"Your Previous Dishes :"} 
        myStyle={user.fav} 
        imageSrc= {user.image} 
        urlBack = {`/recipes/user/${recipe.user}`}
       
        >


<div id="show-div" style={{ color :`${user.fav}`}} >
              
              <ul>
                 
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

             <p   style={{ color :`${user.fav}`}} > Click <a href={`/recipes/user/recipe/${recipe._id}/edit`}>here</a> if you want to edit ! </p>

               
               
               
               <form action={`/recipes/user/recipe/${recipe._id}?_method=DELETE`} method="POST">

              <p  style={{ color :`${user.fav}`}} >  Click <input  type="submit" value = "delete" /> if you want to delete ! </p>

               </form>
              

        </UserLayout>)
    }
}

module.exports = Show ;