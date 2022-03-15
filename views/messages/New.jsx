const React = require ("react");
const UserLayout = require("../UserLayout");


class New  extends React.Component {
    render(){
        const user1 =this.props.user1;
        const user2=this.props.user2;
        return(
            <UserLayout title = "New Message"
            urlTo={`/recipes/user/${user1._id}/logout`} 
            icon ={"https://t4.ftcdn.net/jpg/04/52/97/77/360_F_452977789_d2lgKqXb3ZeXGxw25uNg82ObxzVGyRt6.jpg"} 
            subTitle={`To ${user2.name} :`} 
            urlProfile={`/recipes/user/${user1._id}/profile`}
            urlBack = {`/recipes/user/${user1._id}/profile`}
            myStyle={user1.fav}
           imageSrc= {user1.image} 
            >
                    <form action= {`/recipes/user/${user1._id}/profile/${user2._id}`} method="POST">
                     <ul style={{ color : `${user1.fav}`}} >
                         <li>content :</li>
                         <li> <textarea name="content"/></li>
                         <li> <input type="submit" value="Send"   style={{ color : `${user1.fav}`}} /></li>

                    </ul> 
                    </form>
            
            </UserLayout>
        )
    }
}

module.exports = New ;