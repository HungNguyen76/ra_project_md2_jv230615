import Navbar from "@comp/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import LazyLoad from '@comp/LazyLoad';

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
          <Route path="/login" element={LazyLoad(() => import("@/pages/Login/Login"))()}/>
          <Route path="/register" element={LazyLoad(() => import("@/pages/Register/Register"))()}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
