
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Header from './components/Shared Pages/Header/Header';
import Footer from './components/Shared Pages/Footer/Footer';
import Blogs from './components/Pages/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
<Header></Header>
   <Routes>
     <Route path="/" element={<Home></Home>}></Route>
     <Route path="/home" element={<Home></Home>}></Route>
     <Route path="/blogs" element={<Blogs></Blogs>}></Route>
     <Route path="/blogs" element={<Blogs></Blogs>}></Route>
     <Route path="/blogs" element={<Blogs></Blogs>}></Route>
     <Route path="*" element={<NotFound></NotFound>}></Route>


   </Routes>
   <Footer></Footer>
    </div>
  );
}

export default App;
