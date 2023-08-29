import Navbar from "@comp/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import LazyLoad from '@comp/LazyLoad';
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="navbar_container">
        <div className="navbar_contents">
          <Navbar />
        </div>
      </div>
      <div className="app_container">
        <Routes>
          <Route path="/" element={LazyLoad(() => import("@/pages/HomePage"))()}/>
          <Route path="/login" element={LazyLoad(() => import("@/pages/Login/Login"))()}/>
          <Route path="/cart" element={LazyLoad(() => import("@/pages/Cart/Cart"))()}/>
          <Route path="/register" element={LazyLoad(() => import("@/pages/Register/Register"))()}/>
          <Route path="/gender/:type" element={LazyLoad(() => import("@/pages/Homes/components/Men/Men"))()}/>
          <Route path="/product/:type" element={LazyLoad(() => import("@/pages/Nike/Nike"))()}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
