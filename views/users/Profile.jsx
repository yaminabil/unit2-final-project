const { use } = require("express/lib/application");
const React = require ("react");
const UserLayout =require ("../UserLayout");




class Profile extends React.Component {
    render(){
        const user = this.props.user;
        let noPicture = "https://images.squarespace-cdn.com/content/v1/51239e9ae4b0dce195cba126/1556466683303-K5V354MR8E4W0YOOT21G/Question-mark-face.jpg"
        return(
        <UserLayout 
        title = {`Profile`}
        urlTo= {`/recipes/user/${user._id}/logout`} 
        icon={"https://t4.ftcdn.net/jpg/04/52/97/77/360_F_452977789_d2lgKqXb3ZeXGxw25uNg82ObxzVGyRt6.jpg"} 
        subTitle={`${user.name}`} 
        myStyle={user.fav}
        imageSrc= {user.image} 
        urlProfile={`/recipes/user/${user._id}/profile`}
        urlBack = {`/recipes/user/${user._id}`}
        >

           <div className="div-photo" style={{ backgroundImage :`url("${user.image}")`,border: `solid ${user.fav}`  }}>
             
            </div>

        </UserLayout>
           
        )
    }
}
module.exports=Profile;