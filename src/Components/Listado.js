import React, { Component } from 'react';
import axios from 'axios';


class Listado extends Component {
    state = { 
        personas:[],

    } 
    componentDidMount(){

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const personas = response.data;
            //console.log(users)
            this.setState({personas});
        })


    }

     
    render() { 
        return (
                <div>
                    
                    <p>Component listado</p>
                        <ul>
                            {this.state.personas.map(user => user.name)}
                            {this.state.personas.map(user =>
                                <li>{user.name}</li> )}


                        </ul>

                </div>


        );
    }
}
 
export default Listado;