const React = require("react");


class Index extends React.Component {
    render(){
        const recipes = this.props.recipes;
        return (
            <h1>this is the index page</h1>

        )
    }
}

module.exports = Index;