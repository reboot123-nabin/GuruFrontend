
import {BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import AboutUs from "./BodyComponent/AboutUs";
 import Body from './BodyComponent/Body';
import Charatable from "./BodyComponent/Chartable";
import Login from "./BodyComponent/Login";
import Footer from "./CommonComponent/Footer";
import Header from "./CommonComponent/Header";

import Registration from "./BodyComponent/Registration";
import Sponsor from "./BodyComponent/Sponsor";
function App() {
  return (
    <>


    <Header/>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Body/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/> 
          <Route path="/chartable" element={<Charatable/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Registration/>}/>
          <Route path="/sponsor" element={<Sponsor/>}/>
</Routes>
        
    </BrowserRouter>
<Footer/>
    </>
  );
}

export default App;
