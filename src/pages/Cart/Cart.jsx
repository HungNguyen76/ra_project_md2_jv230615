import CartItem from "./components/CartItem";
import "./Cart.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartItemLocal from "./components/CartItemLocal";
import { convertToVND } from "@mieuteacher/meomeojs";

export default function Cart() {
  const [cartsLocal, setCartsLocal] = useState(() =>
    JSON.parse(localStorage.getItem("carts"))
  );
  const userLoginStore = useSelector((store) => store.userLoginStore);

  const [cartData, setCartData] = useState(
    userLoginStore.userInfor?.carts || []
  );

  useEffect(() => {
    if (userLoginStore.userInfor != null) {
      let carts = [...userLoginStore.userInfor.carts];
      setCartData(carts);
    }
  }, [userLoginStore.userInfor]);

  const nikeSubTotal = cartData.reduce((total, nike) => {
    return total + nike.price * nike.quantity;
  }, 0);
  const [subTotal, setSubTotal] = useState(nikeSubTotal);

  return (
    <section className="shopping-cart-container">
      <div className="products-container">
        <h3 className="title">Your Cart</h3>
        {cartData.length !== 0 ? (
          <div className="box-container">
            {cartsLocal ? (
              <CartItemLocal />
            ) : (
              cartData?.map((cart) => (
                <CartItem
                  key={cart.productId}
                  nike={cart}
                  cartData={cartData}
                  setCartData={setCartData}
                  setSubTotal={(newSubTotal) => setSubTotal(newSubTotal)}
                />
              ))
            )}
          </div>
        ) : (
          <p className="title">There is no item in your bag</p>
        )}
      </div>
      <div className="cart-total">
        <div className="box">
          <h3 className="subtotal">
            subtotal: <span>{convertToVND(subTotal)}</span>
          </h3>
          {cartsLocal ? (
            <Link to="/login" className="btn">
              proceed to checkout
            </Link>
          ) : (
            <Link to="/checkout" className="btn">
              proceed to checkout
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
