import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Hero from "./components/Hero";
import About from "./pages/About";
import Basket from "./pages/Basket";
import Contacts from "./pages/Contacts";
import Drop from "./pages/Drop";
import Footer from "./components/Footer";
import Sign from "./pages/Sign";
import Sale from "./pages/Sale";
import React from "react";
import {Route, Routes} from "react-router-dom";
import NoPage from "./pages/NoPage";



function App() {
  return (
      <>
          <Header/>
          <Routes>
              <Route path="/hero" element={<Hero/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
              <Route path="/drop" element={<Drop/>}/>
              <Route path="/sale" element={<Sale/>}/>
              <Route path="/sign" element={<Sign/>}/>
              <Route path="/basket" element={<Basket/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="*" element={<NoPage/>}/>

          </Routes>
<Footer/>

      </>

  );
}


export default App;
