import CartItem from "./components/CartItem";
import "./Cart.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartItemLocal from "./components/CartItemLocal";

export default function Cart() {
  const [cartsLocal, setCartsLocal] = useState(() =>
    JSON.parse(localStorage.getItem("carts"))
  );
  console.log("cartsLocal:", cartsLocal)
  const userLoginStore = useSelector((store) => store.userLoginStore);

  const [cartData, setCartData] = useState(
    userLoginStore.userInfor?.carts || []
  );

  useEffect(() => {
    if (userLoginStore.userInfor != null) {

        let carts = [...userLoginStore.userInfor.carts]
        setCartData(carts)
    }
}, [userLoginStore.userInfor])

  return (
    <section className="shopping-cart-container">
      <div className="products-container">
        <h3 className="title">Your Cart</h3>
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
              />
            ))
          )}
        </div>
      </div>
      <div className="cart-total">
        <div className="box">
          <h3 className="subtotal">
            subtotal: <span>0</span>
          </h3>
          {cartsLocal ? (
            <Link to="/login" className="btn">
              proceed to checkout
            </Link>
          ) : (
            <Link tp="/checkout" className="btn">
              proceed to checkout
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
