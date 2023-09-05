import Carousel from "@comp/Carousel/Carousel";
import Category from "./Homes/components/Category/Category";
import Footer from "./Footer/Footer";
import SliderMain from "./SliderMain";
import { useEffect } from "react";

export default function HomePage() {
  async function reloadSdkFb() {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/vi_VN/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }
  useEffect(() => {
    reloadSdkFb();
  }, []);
  return (
    <div>
      <Carousel />
      <Category />
      <SliderMain />
      {/* <div
        className="fb-comments"
        data-href="https://d416-58-187-191-113.ngrok-free.app"
        data-width="1024"
        data-numposts="5"
      ></div>
      <div
        className="fb-comments"
        data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
        data-width="1024"
        data-numposts="5"
      ></div> */}
      <Footer />
    </div>
  );
}
