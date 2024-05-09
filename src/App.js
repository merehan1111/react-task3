


import './App.css';
import Home from './components/Home/home';
import About from './components/about/about';
import Skills from './components/Skils/Skils';
import Portfoli from './components/Portfol/Portfol';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import ContactUs from './pages/ContactUs/ContactUs';
import AboutUs from './pages/AboutUs/AboutUs';
import NotFound from './pages/NotFound/NotFound';
import Products from './pages/products/Products';
import ProductDetails from './pages/productDetails/ProductDetails';
import AddProduct from './components/AddProduct/AddProduct';
import DeleteProduct from './components/DeleteProduct/DeleteProduct';
import Todos from './components/Todos/Todos';
import Movies from './pages/movies/Movies';
import MovieDetails from './pages/movieDetails/movieDetails';

function App() {
  return (
    <div>
      <Home/>
     <About/>
     <Skills/>
     <Portfoli/>
     <Login/>
     <Todos/>
     <Header/>
     <Routes>
      <Route path='/contactus' element={<ContactUs/>}></Route>
      <Route path='/aboutus' element={<AboutUs/>}></Route>
      <Route path='/product' element={<Products/>}>
        <Route index element={<AddProduct/>}/>
        <Route path='add' element={<AddProduct/>}/>
        <Route path='delete' element={<DeleteProduct/>}/>
      </Route>
      <Route path='/productDetails/:id' element={<ProductDetails/>}></Route>
      <Route path='/movie' element={<Movies/>}></Route>
      <Route path='/movie/:id' element={<MovieDetails/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
     </Routes>
     
    </div>
  );
}

export default App;
