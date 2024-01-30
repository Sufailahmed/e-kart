
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';

function App() {
  return (
    <div className="App">
  

   <Header/>

     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/wishlist' element={<Wishlist/>}/>


    
     </Routes>
     <Footer/>
 
   
     
    </div>
  );
}

export default App;
