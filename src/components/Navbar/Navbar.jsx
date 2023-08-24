import logo from "@img/nike.png";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userLoginActions } from "../../stores/slices/userLogin.slice";
export default function Navbar() {
  const userLoginStore = useSelector((store) => store.userLoginStore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userLoginActions.checkTokenLocal(localStorage.getItem("token")));
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>

          <div>
            <Link className="navbar-brand mt-2 mt-lg-0" to="/">
              <img src={logo} height={15} alt="MDB Logo" loading="lazy" />
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Mens
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Womens
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Child
                </a>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <form className="d-flex input-group w-auto">
              <input
                type="search"
                className="form-control rounded m-1"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              {/* <span className="input-group-text border-0" id="search-addon">
                <i className="fas fa-search" />
              </span> */}
            </form>

            <a className="link-secondary me-3" href="#">
              <i className="fas fa-shopping-cart" />
            </a>
            {/* Notifications */}
            <div className="dropdown">
              <a
                className="link-secondary me-3 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bell" />
                <span className="badge rounded-pill badge-notification bg-danger">
                  1
                </span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Some news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            {/* Avatar */}
            <div className="dropdown">
              <Link
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                to=""
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                {userLoginStore.userInfor == null ? (
                  <i className="fas fa-user link-secondary me-3"></i>
                ) : (
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/fir-demo-f297f.appspot.com/o/images%2FMinhu.jpeg?alt=media&token=0a3fc676-099e-4653-9db0-74451a59a24a"
                    className="rounded-circle"
                    height={25}
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />
                )}
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    My profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <Link className="dropdown-item" to="/login">
                    {userLoginStore.userInfor == null ? "Login" : "Logout"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
