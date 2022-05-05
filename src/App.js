
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Header from './components/Shared Pages/Header/Header';
import Footer from './components/Shared Pages/Footer/Footer';
import Blogs from './components/Pages/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import Gallery from './components/Pages/Home/Gallery/Gallery';
import RequireAuth from './components/Firebase/RequireAuth';
import Packages from './components/Pages/Packages/Packages';
import AddProducts from './components/Pages/Add Products/AddProducts';
import Details from './components/Pages/Details/Details';
import ManageInventories from './components/Pages/Manage Inventories/ManageInventories';
import MyOrders from './components/Pages/My Orders/MyOrders';


function App() {
  return (
    <div>
<Header></Header>
   <Routes>
     <Route path="/" element={<Home></Home>}></Route>
     <Route path="/home" element={<Home></Home>}></Route>
     <Route path="/addProducts" element={<AddProducts></AddProducts>}></Route>
     <Route path="/gallery" element={<Gallery></Gallery>}></Route>
     <Route path="/login" element={<Login></Login>}></Route>
     <Route path="/packages" element={<Packages></Packages>}></Route>
     <Route path="/manageInventories" element={<ManageInventories></ManageInventories>}></Route>
     <Route path="/vegetable/:id" element={
       <RequireAuth><Details></Details></RequireAuth>
     }></Route>
     <Route path="/myOrders" element={<MyOrders></MyOrders>}></Route>
     <Route path="/register" element={<Register></Register>}></Route>
     <Route path="/blogs" element={<Blogs></Blogs>}></Route>
     <Route path="*" element={<NotFound></NotFound>}></Route>
   </Routes>
   <Footer></Footer>
    </div>
  );
}

export default App;
