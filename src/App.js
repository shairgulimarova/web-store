import {Routes,Route} from "react-router-dom";
import  About from './Pages/About/About';
import Woman from './Pages/Woman/Woman'; 
import Children from './Pages/Children/Children';
import Man from './Pages/Man/Man';
import Register from './Pages/Register/Register'; 
import Shopping from './Pages/Shopping/Shopping';
import Login from './Pages/Login/Login';


import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import './App.scss';

function App() {
  return (
    <div className="app">
      <header>
        <Navbar/>
      </header>
      <main>
        <Routes>
          <Route index='/' element={<About/>}/>
          <Route path='woman' element={<Woman/>}/>
          <Route path='man' element={<Man/>}/>
          <Route path='children' element={<Children/>}/>
          <Route path='profile' element={<Register/>}/>
          <Route path="shopping" element={<Shopping/>}/>
          <Route path='login' element={<Login/>}/>

        </Routes>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
