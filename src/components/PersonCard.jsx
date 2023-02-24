import { Component } from "react";

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state={
            age:0
        };
    }
    render() { 
        const {firstName, lastName, hairColor}= this.props
        return (<div className="element">
            <h1>{firstName},{lastName}</h1>
            <p>Edad: {this.state.age}</p>
            <p>Color de cabello: {hairColor}</p>
            <button onClick={()=>{this.setState({age:(this.state.age + 1)})}}>Boton para agregar cumpleaños {firstName}</button>
        </div>);
    }
}
 
export default PersonCard;