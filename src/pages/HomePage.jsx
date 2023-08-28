import Carousel from "@comp/Carousel/Carousel";
import Category from "./Homes/components/Category/Category";
import Footer from "./Footer/Footer";
import SliderMain from "./SliderMain";

export default function HomePage() {
  return (
    <div>
        <Carousel />
        <Category />
        <SliderMain />
        <Footer />
    </div>
  )
}
