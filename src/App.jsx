import Navbar from "@comp/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import LazyLoad from "@comp/LazyLoad";
import "./App.css";
// import { useEffect } from "react";

function App() {

  // async function reloadSdkFb() {
  //   if (window.FB) {
  //     window.FB.XFBML.parse();
  //   }
  //   (function (d, s, id) {
  //     var js,
  //       fjs = d.getElementsByTagName(s)[0];
  //     if (d.getElementById(id)) return;
  //     js = d.createElement(s);
  //     js.id = id;
  //     js.src = "https://connect.facebook.net/vi_VN/sdk.js";
  //     fjs.parentNode.insertBefore(js, fjs);
  //   })(document, "script", "facebook-jssdk");
  // }
  // useEffect(() => {
  //   reloadSdkFb();
  // }, []);
  return (
    <div className="App">
      <div className="navbar_container">
        <div className="navbar_contents">
          <Navbar />
        </div>
      </div>
      <div className="app_container">
        <Routes>
          <Route
            path="/"
            element={LazyLoad(() => import("@/pages/HomePage"))()}
          />
          <Route
            path="/login"
            element={LazyLoad(() => import("@/pages/Login/Login"))()}
          />
          <Route
            path="/cart"
            element={LazyLoad(() => import("@/pages/Cart/Cart"))()}
          />
          <Route
            path="/register"
            element={LazyLoad(() => import("@/pages/Register/Register"))()}
          />
           <Route
            path="/checkout"
            element={LazyLoad(() => import("@/pages/Checkout/Checkout"))()}
          />
          <Route
            path="/gender/:type"
            element={LazyLoad(() =>
              import("@/pages/Homes/components/Men/Men")
            )()}
          />
          <Route
            path="/product/:type"
            element={LazyLoad(() => import("@/pages/Nike/Nike"))()}
          />
          <Route
            path="/product/:type"
            element={LazyLoad(() => import("@/pages/Nike/Nike"))()}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
