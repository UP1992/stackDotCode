import './App.css';
import { CartProvider } from './context/cartContext';
import { Route ,BrowserRouter as Router, Routes } from "react-router-dom";
import AdminDashboard from './components/AdminDashboard';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route  path= '/admin' element={<AdminDashboard/>}/>
          <Route path='/home' element={<Home />} />
          <Route path='/cart' element={ <Cart/>} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
