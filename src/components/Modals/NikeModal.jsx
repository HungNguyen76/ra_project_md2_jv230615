import { useEffect, useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./NikeModal.scss";
import { convertToVND } from "@mieuteacher/meomeojs";
import toast, { Toaster } from "react-hot-toast";

function NikeModal({ nike }) {
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
                  <span class="material-symbols-outlined">remove</span>
                </button>

                <span className="quantity" style={{ fontSize: "18px" }}>
                  {quantity}
                </span>

                <button onClick={() => setQuantity(quantity + 1)}>
                  <span class="material-symbols-outlined">add</span>
                </button>
              </div>

              <div>
                <span style={{ fontSize: "18px" }}>
                  {convertToVND(nike.price * quantity)}
                </span>
              </div>
            </div>
            <Button
              onClick={() => {
                handleClose();
                notify()
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
