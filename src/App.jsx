
import {createRoutesFromElements, Route, createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomeIndex from './pages/home/Homeindex';
import ShopIndex from './pages/shop/Shopindex';
import RootLayout from './components/layout/RootLayout'
import ErrorIndex from './components/common/ErrorIndex';
import Loginindex from './pages/login/Loginindex';
import Cartindex from './pages/cart/Cartindex';



const routes = createRoutesFromElements(
  <Route>
  <Route element={<RootLayout/>}>
    <Route index element={<HomeIndex/>} />
   <Route path='/shop' element={<ShopIndex/>} />
   <Route path='/cart' element={<Cartindex/>} />
   <Route path='/login' element={<Loginindex/>}/>
  </Route>
    <Route path='*' element={<ErrorIndex/>} />
  </Route>
);

const router = createBrowserRouter(routes);

function App() {
  

  return (
   <RouterProvider router={router} />
  )
}

export default App
