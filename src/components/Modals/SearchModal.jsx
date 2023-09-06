import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./SearchModal.scss";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "@rtk/product.slice";
// import { convertToVND } from '@mieuteacher/meomeojs';
import { useNavigate } from "react-router-dom";
import NikeModal from "./NikeModal";

function SearchModal() {
  const [show, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const userLoginStore = useSelector((store) => store.userLoginStore);

  const productStore = useSelector((store) => store.productStore);

  const [timeOutTarget, setTimeOutTarget] = useState(null);

  const handleChange = (e) => {
    clearTimeout(timeOutTarget); // hủy các timeout đã được đặt trước đó

    setTimeOutTarget(
      setTimeout(() => {
        if (!userLoginStore.loading) {
          if (e.target.value != "") {
            setShowSearch(true);
            dispatch(productActions.searchProductByName(e.target.value));
          }
          if (e.target.value == "") {
            setShowSearch(false);
          }
        }
      }, 1000)
    );
  };

  return (
    <>
      <Button
        variant="light"
        onClick={handleShow}
        size="sm"
        className="search-btn-container"
      >
        <div id="search-btn" className="fas fa-search search-btn"></div>
      </Button>

      <Modal show={show} onHide={handleClose} size="xl" fullscreen="xxl-down">
        <Modal.Header closeButton>
          <Modal.Title>
            <input
              onChange={(e) => handleChange(e)}
              className="input-search"
              type="text"
              placeholder="Search Nike"
              autoFocus
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body-container">
            <div className="category">
              <h2>Category</h2>
              <p
                onClick={() => {
                  navigate("/product/jordan");
                  handleClose();
                }}
              >
                Jordan
              </p>
              <p
                onClick={() => {
                  navigate("/product/lifestyle");
                  handleClose();
                }}
              >
                Lifestyle
              </p>
              <p
                onClick={() => {
                  navigate("/product/football");
                  handleClose();
                }}
              >
                Football
              </p>
              <p
                onClick={() => {
                  navigate("/product/basketball");
                  handleClose();
                }}
              >
                Basketball
              </p>
              <p
                onClick={() => {
                  navigate("/product/running");
                  handleClose();
                }}
              >
                Running
              </p>
            </div>
            <div className="search-render">
              <h3>Suggested Products</h3>
              <div className="search-nike-container">
                {showSearch ? (
                  productStore.searchData?.map((nike) => (
                    <>
                      <div className="nike-container">
                        <div className="nike-image">
                          <NikeModal nike={nike} />
                        </div>
                        <div className="nike-infor">
                          <p>{nike.name}</p>
                          <p>{nike.price}</p>
                        </div>
                      </div>
                    </>
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SearchModal;
