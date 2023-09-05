import { useEffect, useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./NikeModal.scss";
import { convertToVND } from "@mieuteacher/meomeojs";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { userLoginActions } from "@rtk/userLogin.slice";
import { cartsActions } from "@rtk/cart.slice";

function NikeModal({ nike }) {
  // async function reloadSdkFb() {
  //   if (window.FB) {
  //     window.FB.XFBML.parse();
  //   }
  //   (function (d, s, id) {
  //     var js,
  //       fjs = d.getElementsByTagName(s)[0];
  //     if (d.getElementById(id)) return;
  //     js = d.createElement(s);
  //     js.id = id;
  //     js.src = "https://connect.facebook.net/vi_VN/sdk.js";
  //     fjs.parentNode.insertBefore(js, fjs);
  //   })(document, "script", "facebook-jssdk");
  // }
  // useEffect(() => {
  //   reloadSdkFb();
  // }, []);
  const modalRef = useRef(null);
  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    const handleModalExit = () => {
      if (modalRef.current) {
        modalRef.current.classList.remove("modal-fade-enter");
        modalRef.current.classList.add("modal-fade-exit");
      }
    };
    const handleModalEnter = () => {
      if (modalRef.current) {
        modalRef.current.classList.add("modal-fade-enter");
      }
    };
    if (show) {
      handleModalEnter();
    } else {
      handleModalExit();
    }
  }, [show]);
  const notify = () => {
    toast.success("Add To Cart success!", {
      position: "top-center",
    });
  };

  const dispatch = useDispatch();
  const userLoginStore = useSelector((store) => store.userLoginStore);

  useEffect(() => {
    dispatch(userLoginActions.checkTokenLocal(localStorage.getItem("token")));
  }, []);

  function addToCart(buyItem) {
    if (localStorage.getItem("token")) {
      let carts = [];
      let flag = false;
      carts = userLoginStore.userInfor?.carts?.slice().map((item) => {
        if (item.productId == buyItem.productId) {
          let temp = { ...item };
          temp.quantity += buyItem.quantity;
          flag = true;
          return temp;
        }
        return item;
      });
      if (!flag) {
        carts?.push(buyItem);
      }
      dispatch(
        userLoginActions.updateCart({
          userId: userLoginStore.userInfor?.id,
          carts: {
            carts: carts,
          },
        })
      );
      return;
    }
    // chưa đăng nhập

    if (localStorage.getItem("carts")) {
      // đã từng có giỏ hàng
      let carts = JSON.parse(localStorage.getItem("carts"));
      let flag = false;
      carts.map((item) => {
        if (item.productId == buyItem.productId) {
          item.quantity += buyItem.quantity;
          flag = true;
        }
        return item;
      });
      if (!flag) {
        carts.push(buyItem);
      }
      dispatch(cartsActions.updateCartLocal(carts));
      localStorage.setItem("carts", JSON.stringify(carts));
    } else {
      // chưa từng có
      let carts = [buyItem];
      dispatch(cartsActions.updateCartLocal(carts));
      localStorage.setItem("carts", JSON.stringify(carts));
    }
  }
  return (
    <div>
      <Button variant="light" onClick={handleShow} className="detail-btn">
        <img src={nike.url} alt="" />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        className="modal-container"
        size="xl"
        transitionDuration={1000}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="product-container">
          <div className="product-img">
            <img src={nike.url} alt="" />
          </div>
          <div className="product-detail">
            <h5>{nike.name}</h5>

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

                <button onClick={() => setQuantity(quantity + 1)}>
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>

              <div>
                <span style={{ fontSize: "18px" }}>
                  {convertToVND(nike.price * quantity)}
                </span>
              </div>
            </div>
            <div
              className="fb-like"
              data-href="https://82f1-171-240-254-238.ngrok-free.app/"
              data-width="150"
              data-layout="button_count"
              data-action="like"
              data-size="small"
              data-share="true"
            ></div>
            <Button
              onClick={() => {
                handleClose();
                notify();
                addToCart({
                  productId: nike.id,
                  quantity: quantity,
                  url: nike.url,
                  name: nike.name,
                  price: nike.price,
                });
              }}
              className="addToCart-btn"
            >
              Add to cart
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      <Toaster />
    </div>
  );
}

export default NikeModal;
