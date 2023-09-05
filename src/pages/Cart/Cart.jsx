import "./Cart.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./components/CartItem";
import CartItemLocal from "./components/CartItemLocal";
import { convertToVND } from "@mieuteacher/meomeojs";
import { userLoginActions } from "@rtk/userLogin.slice";

export default function Cart() {
  const [cartsLocal, setCartsLocal] = useState(() =>
    JSON.parse(localStorage.getItem("carts"))
  );

  const cartsLocalStore = useSelector((store) => store.cartsLocalStore);

  const userLoginStore = useSelector((store) => store.userLoginStore);

  const [cartData, setCartData] = useState(
    userLoginStore.userInfor?.carts || []
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userLoginActions.checkTokenLocal(localStorage.getItem("token")));
  }, []);

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

  const nikeSubTotalLocal = cartsLocalStore.reduce((total, nike) => {
    return total + nike.price * nike.quantity;
  }, 0);

  return (
    <section className="shopping-cart-container">
      <div className="products-container">
        <h3 className="title">Your Cart</h3>
        {cartsLocal?.length !== 0 ? (
          <div className="box-container">
            {cartsLocal
              ? cartsLocalStore?.map((cart) => (
                  <CartItemLocal
                    key={cart.productId}
                    nike={cart}
                    setSubTotal={(newSubTotal) => setSubTotal(newSubTotal)}
                    cartData={cartData}
                    setCartData={setCartData}
                  />
                ))
              : cartData?.map((cart) => (
                  <CartItem
                    key={cart.productId}
                    nike={cart}
                    cartData={cartData}
                    setCartData={setCartData}
                    setSubTotal={(newSubTotal) => setSubTotal(newSubTotal)}
                  />
                ))}
          </div>
        ) : (
          <p className="title">There is no item in your bag</p>
        )}
      </div>
      <div className="cart-total">
        <div className="box">
          <h3 className="subtotal">
            subtotal:{" "}
            <span>
              {cartsLocal
                ? convertToVND(nikeSubTotalLocal)
                : convertToVND(subTotal)}
            </span>
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
