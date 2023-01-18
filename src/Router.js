import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


//componentes
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Listado from './Components/Listado'
import Formulario from './Components/Formulario';
import Error from './Components/Error';
import Cursos from './Components/Cursos';

class Router extends Component {
   
    render() { 
        return (
            
            <BrowserRouter>


                <Navbar></Navbar>
                    <Route exact  path="/" component={Home}></Route>
                    <Route exact path="/List" component={Listado}></Route>
                    <Route exact path="/Form" component={Formulario}></Route>
                    {/* <Route exact path="/*" component={Error}></Route> */}
                    <Route exact path="/Cursos" component={Cursos}></Route>

                <Footer></Footer>
            
            </BrowserRouter>

        );
    }
}
 
export default Router;
