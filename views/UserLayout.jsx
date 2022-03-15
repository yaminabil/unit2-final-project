const React = require ("react");










class UserLayout extends React.Component {

    render(){
        return (
            <html lang="en">
                <head>
                    <meta charSet='UTF-8'/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <title> myCookBook website </title>
                    

                    <link rel="stylesheet" 
                    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
                    integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" 
                    crossOrigin="anonymous">
                    </link>

                    
                      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100&display=swap" rel="stylesheet"/>
                   

                   

                    {/* <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
                    /> */}
                    {/* <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"
                        
                    /> */}
                
                    <script defer
                    src="https://code.jquery.com/jquery-3.6.0.min.js"
                    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
                    crossOrigin="anonymous"
                    ></script>
                    {/* OUR CSS AND JS */}
                    <link rel="stylesheet" href="/styles.css" />
                    
                    <script defer src="js/app.js"></script>
                    
                       
                </head>





                <body>
                    <header>
                    
                        <h1 className="title" style= {{color : `${this.props.myStyle}` }} > 
                        <a href={this.props.urlBack}> <img className="log-icon"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHXZLoQucVboBLCvYOTC_cfNIx8jC9BmuUA&usqp=CAU"/> </a> 

                        <div className="titleLogo"> <img id="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsLGgcPEcNqr86AEUMHMNImlJ7kpZunomhygtQp-lW2hBJOxrRarlb_ZYToB-hAqINqmc&usqp=CAU"/>
                        </div> 

                        <div className="titleText">{this.props.title}</div> 

                        <div style={{ display:"flex" , flexDirection:"row"}}>
                       
                        <a href={this.props.urlTo}> 
                        <img className="log-icon" 
                        src={this.props.icon} title="log out" >
                        </img>
                        </a>
                         
                       
                       
                        <a href= {this.props.urlProfile} >
                            <div  
                            className="profile-picture" 
                            style={{ backgroundImage :`url("${this.props.imageSrc}")` ,border :`solid ${this.props.myStyle}`   }}  
                            title="profile" />
                        </a>
                        
                        
                        
                       
                       
                       
                        
                       
                        </div>
                         
                       
                        
                        
                       

                        </h1>
                    </header>
                    <main  >
                    <h2 style= {{color: `${this.props.myStyle}`}}  > {this.props.subTitle} </h2>
                    {this.props.children}
                     
                                 
                    </main>



                    <footer>
                       <h1 style={{ color:`${this.props.myStyle}` }} >Have fun</h1>

                      

                      
                      
                    </footer>
                </body>



            </html>
        )
    }

}

module.exports = UserLayout;


// src="https://media.istockphoto.com/vectors/chef-avatar-flat-icon-flat-vector-illustration-symbol-design-element-vector-id1208588953?k=20&m=1208588953&s=170667a&w=0&h=p-l_yUL13OYpAM63ibGFENLcSxEzYiOCTwLL_sHfoW4="

