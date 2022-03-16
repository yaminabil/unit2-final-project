const { text } = require("express");
const { use } = require("express/lib/application");
const React = require ("react");
const UserLayout =require ("../UserLayout");




class Profile extends React.Component {


    render(){
        const user = this.props.user;
        const users=this.props.users;
        const messages=    this.props.messages;
        const messagesSent = this.props.messagesSent;


        console.log( "test heyyyyyyyyy "+ messages ) ;
        console.log( "test heyyyyyyyyy "+ messagesSent);





      
        
    if ( messages  && messagesSent ) {



        return(
            
            
            <UserLayout 
            title = {`Profile`}
            urlTo= {`/recipes/user/${user._id}/logout`} 
            icon={"https://t4.ftcdn.net/jpg/04/52/97/77/360_F_452977789_d2lgKqXb3ZeXGxw25uNg82ObxzVGyRt6.jpg"} 
            
            myStyle={user.fav}
            imageSrc= {user.image} 
            urlProfile={`/recipes/user/${user._id}/profile`}
            urlBack = {`/recipes/user/${user._id}`}
            >
    
               <div className="div-photo" style={{ backgroundImage :`url("${user.image}")`,border: `solid ${user.fav}`  }}>
                 
                </div>
    
                <form action={`/recipes/user/${user._id}/profile?_method=DELETE`} method="POST">
    
                  <h4 style={{color :`${user.fav}`}} >  Click <input style={{color :`${user.fav}`}} type="submit" value = "delete" /> if you want to delete your profile ! </h4>
    
                   </form>
    
            
                <div className="hr" ></div>
                
                <div className="profile-info" style={{color :`${user.fav}`}} >
                
                    <div className="div-one" style={{border :`1px solid ${user.fav}` , width:"40%" , alignItems:"center"} } > 
                    <h1 style={{ textAlign : "center"}}>Info</h1>
                     <form  action={`/recipes/user/${user._id}/profile?_method=PUT`}  method="POST" >
                     <ul >
                        <li>  UserName    : <input  name="name" value={user.name}/> </li><br />
                        <li> Password : <input  name="password" value={user.password}  type="password"/> </li><br />
                        <li> your favorite color :<input name="fav" value={user.fav} /> </li> <br />
                        <li>Your photo URL :<input name="image" value={user.image}/> </li>
                        <li>  <input type="submit" value="Edit"/> </li> 
                    </ul>
    
                    
                    </form>
                   
    
                    
                  
                     
                     </div>
    
    
                     <div className="div-message"  style={{border :`1px solid ${user.fav}` , width:"40%" , alignItems:"center"} }>
                     <h1 style={{ textAlign : "center"}}>Messages</h1>
    
                    <div className="all-messages"> 
                    <div className="messages-received">
                    <ul>
                        <h4><u>received messages</u></h4>
    
                     {     messages.map( (message) => (
                            
    
                       
                            
           
                           
                             
                             <li> {message.name1} : {message.content}</li>
    
                                    ))
                   
                   }
                   </ul>
                   </div>
    
                   <div className="messages-sent">
                       <ul>
                       <h4>  <u>sent messages</u> </h4> 
                           {
    
                           messagesSent.map((message)=>(
                               <li>to {message.name2} : {message.content} </li>
                           ))
                           }
                       </ul>
    
                   </div>
    
                   </div>
    
    
    
                    
                    </div>

                    <div className="div-two">
    
                       <div className="connected-users">
    
                       {
                           users.map((OneUser)=>{
                               if(OneUser.connected === true) {
                               return (
                                   
                                <a href={`/recipes/user/${user._id}/profile/${OneUser._id}/message`}  >
                                <div  
                                className="profile-picture2" 
                                style={{ backgroundImage :`url("${OneUser.image}")` ,border :`solid ${OneUser.fav}` ,margin:"5px"  }}  
                                title="profile" />
                            </a>
                               )}
                           }) 
                       }
                       </div>
                       <div className="disconnected-users">
                           {
                       users.map((OneUser)=>{
                           if(OneUser.connected === false) {
                               return (
                                <a href={`/recipes/user/${user._id}/profile/${OneUser._id}/message`}  >
                                <div  
                                className="profile-picture2" 
                                style= {{ backgroundImage :`url("${OneUser.image}")` , border :`solid grey ` ,margin:"5px"  }}  
                                title="profile" > </div>
                                 </a>
                               )
                           }
                           })
                        }
                       </div>
                    </div>
    
                    
                    
                 </div>
                
    
    
            </UserLayout>
               
        )






    } else if ( !(messages)  && messagesSent ) {


        return(
            
            
            <UserLayout 
            title = {`Profile`}
            urlTo= {`/recipes/user/${user._id}/logout`} 
            icon={"https://t4.ftcdn.net/jpg/04/52/97/77/360_F_452977789_d2lgKqXb3ZeXGxw25uNg82ObxzVGyRt6.jpg"} 
            
            myStyle={user.fav}
            imageSrc= {user.image} 
            urlProfile={`/recipes/user/${user._id}/profile`}
            urlBack = {`/recipes/user/${user._id}`}
            >
    
               <div className="div-photo" style={{ backgroundImage :`url("${user.image}")`,border: `solid ${user.fav}`  }}>
                 
                </div>
    
                <form action={`/recipes/user/${user._id}/profile?_method=DELETE`} method="POST">
    
                  <h4 style={{color :`${user.fav}`}} >  Click <input style={{color :`${user.fav}`}} type="submit" value = "delete" /> if you want to delete your profile ! </h4>
    
                   </form>
    
            
                <div className="hr" ></div>
                
                <div className="profile-info" style={{color :`${user.fav}`}} >
                
                    <div className="div-one" style={{border :`1px solid ${user.fav}` , width:"40%" , alignItems:"center"} } > 
                    <h1 style={{ textAlign : "center"}}>Info</h1>
                     <form  action={`/recipes/user/${user._id}/profile?_method=PUT`}  method="POST" >
                     <ul >
                        <li>  UserName    : <input  name="name" value={user.name}/> </li><br />
                        <li> Password : <input  name="password" value={user.password}  type="password"/> </li><br />
                        <li> your favorite color :<input name="fav" value={user.fav} /> </li> <br />
                        <li>Your photo URL :<input name="image" value={user.image}/> </li>
                        <li>  <input type="submit" value="Edit"/> </li> 
                    </ul>
    
                    
                    </form>
                   
    
                    
                  
                     
                     </div>
    
    
                     <div className="div-message"  style={{border :`1px solid ${user.fav}` , width:"40%" , alignItems:"center"} }>
                     <h1 style={{ textAlign : "center"}}>Messages</h1>
    
                    <div className="all-messages"> 
                    <div className="messages-received">
                    <ul>
                    <h4><u>received messages</u></h4>
    
                   {     
                     <li> you have none </li>
                   
                   }
                   </ul>
                   </div>
    
                   <div className="messages-sent">
                       <ul>
                       <h4>  <u>sent messages</u> </h4> 
                           {
    
                           messagesSent.map((message)=>(
                               <li>to {message.name2} : {message.content}  </li>
                           ))
                           }
                       </ul>
    
                   </div>
    
                   </div>
    
    
    
                    
                    </div>
                    <div className="div-two">
    
                       <div className="connected-users">
    
                       {
                           users.map((OneUser)=>{
                               if(OneUser.connected === true) {
                               return (
                                   
                                <a href={`/recipes/user/${user._id}/profile/${OneUser._id}/message`}  >
                                <div  
                                className="profile-picture2" 
                                style={{ backgroundImage :`url("${OneUser.image}")` ,border :`solid ${OneUser.fav}` ,margin:"5px"  }}  
                                title="profile" />
                            </a>
                               )}
                           }) 
                       }
                       </div>
                       <div className="disconnected-users">
                           {
                       users.map((OneUser)=>{
                           if(OneUser.connected === false) {
                               return (
                                <a href={`/recipes/user/${user._id}/profile/${OneUser._id}/message`}  >
                                <div  
                                className="profile-picture2" 
                                style= {{ backgroundImage :`url("${OneUser.image}")` , border :`solid grey ` ,margin:"5px"  }}  
                                title="profile" > </div>
                                 </a>
                               )
                           }
                           })
                        }
                       </div>
                    </div>
    
                    
                    
                 </div>
                
    
    
            </UserLayout>
               
        )





            
    } else if ( messages && !(messagesSent) ) {



        return(
            
            
            <UserLayout 
            title = {`Profile`}
            urlTo= {`/recipes/user/${user._id}/logout`} 
            icon={"https://t4.ftcdn.net/jpg/04/52/97/77/360_F_452977789_d2lgKqXb3ZeXGxw25uNg82ObxzVGyRt6.jpg"} 
            
            myStyle={user.fav}
            imageSrc= {user.image} 
            urlProfile={`/recipes/user/${user._id}/profile`}
            urlBack = {`/recipes/user/${user._id}`}
            >
    
               <div className="div-photo" style={{ backgroundImage :`url("${user.image}")`,border: `solid ${user.fav}`  }}>
                 
                </div>
    
                <form action={`/recipes/user/${user._id}/profile?_method=DELETE`} method="POST">
    
                  <h4 style={{color :`${user.fav}`}} >  Click <input style={{color :`${user.fav}`}} type="submit" value = "delete" /> if you want to delete your profile ! </h4>
    
                   </form>
    
            
                <div className="hr" ></div>
                
                <div className="profile-info" style={{color :`${user.fav}`}} >
                
                    <div className="div-one" style={{border :`1px solid ${user.fav}` , width:"40%" , alignItems:"center"} } > 
                    <h1 style={{ textAlign : "center"}}>Info</h1>
                     <form  action={`/recipes/user/${user._id}/profile?_method=PUT`}  method="POST" >
                     <ul >
                        <li>  UserName    : <input  name="name" value={user.name}/> </li><br />
                        <li> Password : <input  name="password" value={user.password}  type="password"/> </li><br />
                        <li> your favorite color :<input name="fav" value={user.fav} /> </li> <br />
                        <li>Your photo URL :<input name="image" value={user.image}/> </li>
                        <li>  <input type="submit" value="Edit"/> </li> 
                    </ul>
    
                    
                    </form>
                   
    
                    
                  
                     
                     </div>
    
    
                     <div className="div-message"  style={{border :`1px solid ${user.fav}` , width:"40%" , alignItems:"center"} }>
                     <h1 style={{ textAlign : "center"}}>Messages</h1>
    
                    <div className="all-messages"> 
                    <div className="messages-received">
                    <ul>
                    <h4><u>received messages</u></h4>
    
                     {

                     messages.map((message)=>(
                      <li>to {message.name2} : {message.content}   </li>
                       )) 
                   
                     }
                   </ul>
                   </div>
    
                   <div className="messages-sent">
                       <ul>
                       <h4>  <u>sent messages</u> </h4> 
                           {
    
                           <li></li>

                           }
                       </ul>
    
                   </div>
    
                   </div>
    
    
    
                    
                    </div>
                    <div className="div-two">
    
                       <div className="connected-users">
    
                       {
                           users.map((OneUser)=>{
                               if(OneUser.connected === true) {
                               return (
                                   
                                <a href={`/recipes/user/${user._id}/profile/${OneUser._id}/message`}  >
                                <div  
                                className="profile-picture2" 
                                style={{ backgroundImage :`url("${OneUser.image}")` ,border :`solid ${OneUser.fav}` ,margin:"5px"  }}  
                                title="profile" />
                            </a>
                               )}
                           }) 
                       }
                       </div>
                       <div className="disconnected-users">
                           {
                       users.map((OneUser)=>{
                           if(OneUser.connected === false) {
                               return (
                                <a href={`/recipes/user/${user._id}/profile/${OneUser._id}/message`}  >
                                <div  
                                className="profile-picture2" 
                                style= {{ backgroundImage :`url("${OneUser.image}")` , border :`solid grey ` ,margin:"5px"  }}  
                                title="profile" > </div>
                                 </a>
                               )
                           }
                           })
                        }
                       </div>
                    </div>
    
                    
                    
                 </div>
                
    
    
            </UserLayout>
               
        )





        






    } else { 

        return (





        <UserLayout 
        title = {`Profile`}
        urlTo= {`/recipes/user/${user._id}/logout`} 
        icon={"https://t4.ftcdn.net/jpg/04/52/97/77/360_F_452977789_d2lgKqXb3ZeXGxw25uNg82ObxzVGyRt6.jpg"} 
        
        myStyle={user.fav}
        imageSrc= {user.image} 
        urlProfile={`/recipes/user/${user._id}/profile`}
        urlBack = {`/recipes/user/${user._id}`}
        >

           <div className="div-photo" style={{ backgroundImage :`url("${user.image}")`,border: `solid ${user.fav}`  }}>
             
            </div>

            <form action={`/recipes/user/${user._id}/profile?_method=DELETE`} method="POST">

              <h4 style={{color :`${user.fav}`}} >  Click <input style={{color :`${user.fav}`}} type="submit" value = "delete" /> if you want to delete your profile ! </h4>

               </form>

        
            <div className="hr" ></div>
            
            <div className="profile-info" style={{color :`${user.fav}`}} >
            
                <div className="div-one" style={{border :`1px solid ${user.fav}` , width:"40%" , alignItems:"center"} } > 
                <h1 style={{ textAlign : "center"}}>Info</h1>
                 <form  action={`/recipes/user/${user._id}/profile?_method=PUT`}  method="POST" >
                 <ul >
                    <li>  UserName    : <input  name="name" value={user.name}/> </li><br />
                    <li> Password : <input  name="password" value={user.password}  type="password"/> </li><br />
                    <li> your favorite color :<input name="fav" value={user.fav} /> </li> <br />
                    <li>Your photo URL :<input name="image" value={user.image}/> </li>
                    <li>  <input type="submit" value="Edit"/> </li> 
                </ul>

                
                </form>
               

                
              
                 
                 </div>


                 <div className="div-message"  style={{border :`1px solid ${user.fav}` , width:"40%" , alignItems:"center"} }>
                 <h1 style={{ textAlign : "center"}}>Messages</h1>

                <div className="all-messages"> 
                <div className="messages-received">
                <ul>
                <h4><u>received messages</u></h4>

                 {   
                 <li></li>
               
               }
               </ul>
               </div>

               <div className="messages-sent">
                   <ul>
                       <h4>  <u>sent messages</u> </h4> 
                       {
                           <li></li>

                    
                       }
                   </ul>

               </div>

               </div>



                
                </div>
                <div className="div-two">

                   <div className="connected-users">

                   {
                       users.map((OneUser)=>{
                           if(OneUser.connected === true) {
                           return (
                               
                            <a href={`/recipes/user/${user._id}/profile/${OneUser._id}/message`}  >
                            <div  
                            className="profile-picture2" 
                            style={{ backgroundImage :`url("${OneUser.image}")` ,border :`solid ${OneUser.fav}` ,margin:"5px"  }}  
                            title="profile" />
                        </a>
                           )}
                       }) 
                   }
                   </div>
                   <div className="disconnected-users">
                       {
                   users.map((OneUser)=>{
                       if(OneUser.connected === false) {
                           return (
                            <a href={`/recipes/user/${user._id}/profile/${OneUser._id}/message`}  >
                            <div  
                            className="profile-picture2" 
                            style= {{ backgroundImage :`url("${OneUser.image}")` , border :`solid grey ` ,margin:"5px"  }}  
                            title="profile" > </div>
                             </a>
                           )
                       }
                       })
                    }
                   </div>
                </div>

                
                
             </div>
            


        </UserLayout>
           





        )

    }

        
       
       
    }
}



module.exports=Profile;