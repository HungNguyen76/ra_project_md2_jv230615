// import { useSelector } from "react-redux";
import './Nike.scss'
import api from "@api";
import { useEffect, useState } from "react";
import { convertToVND } from '@mieuteacher/meomeojs';
import jordan1 from '@img/product/jordan/jordan1.webp'
// import jordan1 from '@img/product/jordan/jordan1.webp'
// import jordan1 from '@img/product/jordan/jordan1.webp'
// import jordan1 from '@img/product/jordan/jordan1.webp'

export default function ListProduct() {
  // const productStore = useSelector((store) => store.productStore);
  const [listProduct, setListProduct] = useState([])
   console.log("🚀 ~ file: Nike.jsx:8 ~ ListProduct ~ listProduct:", listProduct)
   useEffect(() => {
    async function fetchData() {
      const res = await api.product.findAllProducts();
      setListProduct(res.data)
    }
    fetchData();
  }, []);

  return (
    <section className="popular" id="popular">
      <div className="heading">
        <h3>Popular Jordan For Men</h3>
        {/* <h3></h3> */}
      </div>

      <div className="box-container">
        {listProduct.map((item) => (
          <div className="box" key={item.id}>
            <a href="#" className="fas fa-heart"></a>
            <div className="image">
              <img src={jordan1} />
              {/* <FoodModal food={food}></FoodModal> */}
            </div>
            <div className="content">
              <h5>{item.name}</h5>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                <span> (50) </span>
              </div>
              <div className="price">
                <span>{convertToVND(item.price)}</span>
                {/* <span>{item.price}</span> */}
              </div>
              {/* <a class="btn">add to cart</a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
