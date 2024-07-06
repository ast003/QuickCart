import './App.css'
import { Route, Routes, BrowserRouter,useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
import SignIn from './Pages/Signin'
function App() {
  return(<div>
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
</div>
);
}

const Layout = () => {
const location = useLocation();

return (
<>
  {location.pathname !== '/signin' && location.pathname !== '/' && <Navbar />}
  <Routes>
    <Route path='/' element={<LoginSignup />} />
    <Route path='/signin' element={<SignIn />} />
    <Route path='/shop' element={<Shop />} />
    <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />} />
    <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />} />
    <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
    <Route path='/product' element={<Product />}>
      <Route path=':productId' element={<Product />} />
    </Route>
    <Route path='/cart' element={<Cart />} />
  </Routes>
  {location.pathname !== '/signin' && location.pathname !== '/' && <Footer />}
</>
);
};

export default App;
