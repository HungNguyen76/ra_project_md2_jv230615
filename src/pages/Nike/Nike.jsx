// import { useSelector } from "react-redux";
import './Nike.scss'
import api from "@api";
import { useEffect, useState } from "react";
import { convertToVND } from '@mieuteacher/meomeojs';
import jordan1 from '@img/product/jordan/jordan1.webp'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '@rtk/product.slice';
// import jordan1 from '@img/product/jordan/jordan1.webp'
// import jordan1 from '@img/product/jordan/jordan1.webp'
// import jordan1 from '@img/product/jordan/jordan1.webp'

export default function ListProduct() {
  const listProductStore = useSelector((store) => store.productStore.listProducts);

  console.log("🚀 ~ file: Nike.jsx:15 ~ ListProduct ~ listProductStore:", listProductStore)

  const [listProduct, setListProduct] = useState([])
  const dispatch = useDispatch()
  const { type } = useParams()
  //  console.log("🚀 ~ file: Nike.jsx:16 ~ ListProduct ~ type:", type)
   useEffect(() => {
    async function fetchData() {
      const res = await api.product.findAllProducts();
      setListProduct(res.data)
      // dispatch(productActions.findAllProducts())
    }
    fetchData();
  }, []);

  useEffect(() => {
    dispatch(productActions.filterProductByType(type))
  }, [type])

  return (
    <section className="popular" id="popular">
      <div className="heading">
        <h3>Popular Jordan For Men</h3>
      </div>

      <div className="box-container">
        {listProductStore.map((item) => (
          <div className="box" key={item.id}>
            <a href="#" className="fas fa-heart"></a>
            <div className="image">
              <img src={item.url} />
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
              <a className="btn">add to cart</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
