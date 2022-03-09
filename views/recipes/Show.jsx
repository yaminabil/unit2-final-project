const React = require("react");
const DefaultLayout =require("../Default")


class Show extends React.Component {
    render(){
        const recipe = this.props.recipe ;
        return(
            <DefaultLayout title ={`${recipe.name}`}>
               
            </DefaultLayout>

        )
    }
}


module.exports = Show;