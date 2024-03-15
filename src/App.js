import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import ListadoVehiculos from "./components/listadoVehiculos";

export default function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/vehiculos" element={<ListadoVehiculos/>}/>
        </Routes>
      </BrowserRouter>
      <hr></hr>
      <Footer></Footer>
    </div>
  );
}