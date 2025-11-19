import './App.css'
import Header from './assets/Header'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './assets/Home'
import About from './assets/About'
import Cartitems from './assets/Cartitems'
import Footer from './assets/Footer'
import Signin from './assets/Signin'
import Signup from './assets/Signup'
import PrivateRoute from './assets/PrivateRoute'
import Dashboard from './user/Dashboard'
import AdminRoutes from './assets/AdminRoutes'
import Admindashboard from './admin/Admindashboard'
import Forgotpass from './assets/Forgotpass'
import CreateCategory from './admin/CreateCategory'
import Products from './admin/Products'
import Users from './admin/Users'
import CreateProduct from './admin/createProduct'
import UpdateProduct from './admin/UpdateProduct'
import Search from './assets/Search'
import Profile from './user/Profile'
import Orders from './user/Orders'

function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Header/>
      
      <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/cartitems' element={<Cartitems/>}/>
      
      <Route path='/dashboard' element={<PrivateRoute/>}>
      <Route path='user' element={<Dashboard/>}/>
      <Route path='user/profile' element={<Profile/>}/>
      <Route path='user/orders' element={<Orders/>}/>

      </Route>
      

      <Route path='/dashboard' element={<AdminRoutes/>}>
      <Route path='admin' element={<Admindashboard/>}/>
      <Route path='admin/categories' element={<CreateCategory/>}/>
      <Route path='admin/CreateProduct' element={<CreateProduct/>}/> 
      <Route path='admin/UpdateProduct/:slug' element={<UpdateProduct/>}/>  
 
      <Route path='admin/products' element={<Products/>}/>
      <Route path='admin/users' element={<Users/>}/>


      </Route>

<Route path='/forgotpass' element={<Forgotpass/>}/>
<Route path='/search' element={<Search/>}/>


      </Routes>
       <Footer/>
      </BrowserRouter>
     
    </div>
  )
}

export default App
