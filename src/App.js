import './App.css';
import Footer from './pages/Footer';
import Homepage from './pages/Homepage';
import Navbar from './pages/Navbar';
import Service from './pages/Service';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Homepage></Homepage>
     <br></br>
     <Service></Service>
     <br></br>

        <Footer></Footer>
         </div>
  );
}

export default App;
