import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoginActions } from "@rtk/userLogin.slice";
import { randomId, convertToUSD } from "@mieuteacher/meomeojs";
import { cartsActions } from "@rtk/cart.slice";

export default function CartItemLocal({ nike }) {
  console.log("nike in CartLocal:", nike)
  const [quantity, setQuantity] = useState(nike.quantity);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userLoginActions.checkTokenLocal(localStorage.getItem("token")));
  },[]);

  function handleDeleteProduct(productId) {
    dispatch(cartsActions.deleteItemInCart(productId));
  }

  return (
    <div className="box" key={randomId()}>
      <i
        className="fas fa-times"
        onClick={() => handleDeleteProduct(nike.productId)}
      ></i>
      <img src={nike.url} alt="" />
      <div className="content">
        <h3>{nike.name}</h3>
        <span>quantity: </span>
        <div className="quantity-container">
          <div>
            <button
              onClick={() => {
                if (quantity > 1) {
                  {
                    setQuantity(quantity - 1);
                    dispatch(
                      cartsActions.updateItemInCart({
                        ...nike,
                        quantity: quantity - 1,
                      })
                    );
                  }
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
                {
                  setQuantity(quantity + 1);
                  dispatch(
                    cartsActions.updateItemInCart({
                      ...nike,
                      quantity: quantity + 1,
                    })
                  );
                }
              }}
            >
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>
        </div>
        <br />
        <span> price : </span>
        <span className="price"> {convertToUSD(nike.price)} </span>
      </div>
    </div>
  );
}
