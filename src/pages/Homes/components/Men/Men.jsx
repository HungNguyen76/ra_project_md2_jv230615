import './Men.scss'
import { useEffect } from "react";
import { convertToVND } from '@mieuteacher/meomeojs';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '@rtk/product.slice';
import NikeModal from '@comp/Modals/NikeModal';

export default function Men() {
  const listProductByGender = useSelector(
    (store) => store.productStore.listProducts
  );
  // console.log("🚀 ~ file: Men.jsx:12 ~ Men ~ listProductByGender:", listProductByGender)

  const dispatch = useDispatch();
  const { type } = useParams();
  // console.log("🚀 ~ file: Men.jsx:16 ~ Men ~ gender:", type)

  useEffect(() => {
    dispatch(productActions.filterProductByGender(type));
  }, [type]);

  return (
    <section className="popular" id="popular">
      <div className="heading">
        <h3>All Product For Men</h3>
      </div>

      <div className="box-container">
        {listProductByGender.map((item) => (
          <div className="box" key={item.id}>
            <a href="#" className="fas fa-heart"></a>
            <div className="image">
              <NikeModal nike={item}></NikeModal>
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
              <div className="price">
                <span>{convertToVND(item.price)}</span>
              </div>
              {/* <a className="btn">add to cart</a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
