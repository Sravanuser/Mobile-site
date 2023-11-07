import './App.css';
import Navbar from './Header-Footer/Navbar.jsx';
import Footer from './Header-Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  );
}

export default App;
