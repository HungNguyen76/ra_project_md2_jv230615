import { useEffect, useState } from "react";
import { convertToVND, randomId } from "@mieuteacher/meomeojs";
import { useDispatch, useSelector } from "react-redux";
import { userLoginActions } from "@rtk/userLogin.slice";
import "../Cart.scss";
export default function CartItem({ nike, setSubTotal, cartData, setCartData }) {
  
  const [quantity, setQuantity] = useState(nike.quantity);

  const dispatch = useDispatch();

  const userLoginStore = useSelector((store) => store.userLoginStore);

  useEffect(() => {
    dispatch(userLoginActions.checkTokenLocal(localStorage.getItem("token")));
  }, []);

  const handleDeleteProduct = (productId) => {
    let carts = userLoginStore.userInfor.carts;
    let updatedCart = carts.filter((cart) => cart.productId !== productId);
    setCartData(updatedCart);

    //tính tổng giá trị mới
    let updateSubTotal = updatedCart.reduce((total, nike) => {
      return total + nike.price * nike.quantity;
    }, 0);

    //cập nhật tổng giá tiền
    setSubTotal(updateSubTotal);

    dispatch(
      userLoginActions.updateCart({
        userId: userLoginStore.userInfor.id,
        carts: {
          carts: updatedCart,
        },
      })
    );
  };

  const handleChangeQuantity = (productCart) => {
    console.log("productCart:", productCart);
    let updatedCart = cartData.map((product) => {
      console.log("product:", product);
      if (product.productId === productCart.productId) {
        return productCart;
      } else {
        return product;
      }
    });
    setCartData(updatedCart);

    //Tính tổng giá trị mới
    let nikeSubTotal = updatedCart.reduce((total, nike) => {
      return total + nike.price * nike.quantity;
    }, 0);
    setSubTotal(nikeSubTotal);
    dispatch(
      userLoginActions.updateCart({
        userId: userLoginStore.userInfor.id,
        carts: {
          carts: updatedCart,
        },
      })
    );
  };
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
                  handleChangeQuantity({
                    ...nike,
                    quantity: quantity - 1,
                  });
                }
              }}
            >
              <span className="material-symbols-outlined">remove</span>
            </button>

            <span className="quantity">{quantity}</span>
            {/* <div
              className="fb-comments"
              data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
              data-width=""
              data-numposts="5"
            ></div> */}
            <button
              onClick={() => {
                setQuantity(quantity + 1);
                handleChangeQuantity({
                  ...nike,
                  quantity: quantity + 1,
                });
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
