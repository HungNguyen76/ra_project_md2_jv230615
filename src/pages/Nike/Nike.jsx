import './Nike.scss'
import { useEffect } from "react";
import { convertToVND } from '@mieuteacher/meomeojs';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '@rtk/product.slice';


export default function ListProduct() {
  const listProductStore = useSelector((store) => store.productStore.listProducts);


  const dispatch = useDispatch()
  const { type } = useParams()

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
                <span> ({item.stock}) </span>
              </div>
              <div className="price"><span>{convertToVND(item.price)}</span></div>
              {/* <a className="btn">add to cart</a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
