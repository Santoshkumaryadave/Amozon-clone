import './App.css';
import Footer from './component/footer/Footer';
import Navbar from './component/headder/Navbar';
import Main from './component/home/Main';
import Newnavbaar from './component/newnavbaar/NewNavbaar';
import { Routes, Route, } from "react-router-dom";
import Signin from './component/signout_signin/Signin';
import Signup from './component/signout_signin/Signup';
import Cart from './component/cart/Cart';
import Buynow from './component/buynow/Buynow';


function App() {
  return (
  
   <div className="App">
  <Navbar/>
  <Newnavbaar/>
  <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/cart/:id" element={<Cart />} />
        <Route path="/buynow" element={<Buynow />} />
  </Routes>
  <Footer/>

  </div>
 
  );
}

export default App;
