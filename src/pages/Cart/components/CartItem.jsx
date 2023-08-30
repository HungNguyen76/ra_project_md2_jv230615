import { useEffect, useState } from "react";
import { convertToVND, randomId } from '@mieuteacher/meomeojs';
import { useDispatch, useSelector } from "react-redux";
import { userLoginActions } from "@rtk/userLogin.slice";

export default function CartItem({ nike, cartData, setCartData }) {
  const [quantity, setQuantity] = useState(nike.quantity);

  const dispatch = useDispatch();

  const userLoginStore = useSelector((store) => store.userLoginStore);

  useEffect(() => {
    dispatch(userLoginActions.checkTokenLocal(localStorage.getItem("token")));
  }, []);

  return (
    <div className="box" key={randomId()}>
      <i
        className="fas fa-times"
        onClick={() => handleDeleteProduct(nike.productId)}
      ></i>
      <img src={nike.url} alt="" />
      <div className="content">
        <h3>{nike.name}</h3>
        <span> quantity : </span>
        <div className="quantity-container">
          <div>
            <button
              onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                }
              }}
            >
              <span className="material-symbols-outlined">remove</span>
            </button>

            <span className="quantity" style={{ fontSize: "18px" }}>
              {quantity}
            </span>

            <button
              onClick={() => {
                setQuantity(quantity + 1);
              }}
            >
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>
        </div>
        <br />
        <span> price : </span>
        <span className="price"> {convertToVND(nike.price)} </span>
      </div>
    </div>
  );
}
