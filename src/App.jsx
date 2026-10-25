
import {createRoutesFromElements, Route, createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomeIndex from './pages/home/Homeindex';
import ShopIndex from './pages/shop/Shopindex';
import RootLayout from './components/layout/RootLayout'
import ErrorIndex from './components/common/ErrorIndex';
import Loginindex from './pages/login/Loginindex';
import Cartindex from './pages/cart/Cartindex';
import Registration from './pages/registration/Registration';
import DashboardIndex from './pages/dashboard/DashboardIndex';
import DashboardLayout from './components/layout/DashboardLayout';
import DownloadIndex from './pages/downloads/DownloadIndex';
import OthersIndex from './pages/others/OthersIndex';
import ProfileIndex from './pages/profile/ProfileIndex';
import ContactIndex from './pages/contact/ContactIndex';
import CheckoutIndex from './pages/checkout/CheckoutIndex';




const routes = createRoutesFromElements(
  <Route>
  <Route element={<RootLayout/>}>
    <Route index element={<HomeIndex/>} />
   <Route path='/shop' element={<ShopIndex/>} />
   <Route path='/cart' element={<Cartindex/>} />
   <Route path='/login' element={<Loginindex/>}/>
   <Route path='/registration' element={<Registration/>}/>
   <Route element={<DashboardLayout/>}>
       <Route path='/dashboard' element={<DashboardIndex/>}/>
       <Route path='/profile' element={<ProfileIndex/>}/>
       <Route path='/download' element={<DownloadIndex/>}/>
       <Route path='/others' element={<OthersIndex/>}/>
   </Route>
   <Route path='/contacts' element={<ContactIndex/>}/>
   <Route path='/checkout' element={<CheckoutIndex/>}/>
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
