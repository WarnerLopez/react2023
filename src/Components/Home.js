import React, { Component } from 'react';

import axios from 'axios';
import uno from '../assets/img1.jpg';
import dos from '../assets/img2.jpg';
import tres from '../assets/img3.jpg';


class Home extends Component {
     componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(data=> {
            console.log(data)
        })
    }
    
    
    state = {  } 
    render() { 
        return (
          <div className='container'>
            <div class="jumbotron">
            <h1 class="display-4">Hello, world!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </div>
          
            <div class="card-group mt-5">
              <div class="card ">
              <img className='imgcard' src={uno}/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div class="card">
            <img className='imgcard' src={dos}/>
              
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div class="card">
            <img className='imgcard' src={tres}/>
              
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
    </div>
    </div>
        );
    }
}
 
export default Home;
