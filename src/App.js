import logo from './logo.svg';
import './App.css';
//importaciones
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      
      <Footer></Footer>
        
     
    </div>
  );
}

export default App;
