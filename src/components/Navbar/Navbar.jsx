import logo from "@img/nike.png";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { userLoginActions } from "../../stores/slices/userLogin.slice";
export default function Navbar() {
  const userLoginStore = useSelector((store) => store.userLoginStore);
  const [isLogin, setIsLogin] = useState(
    () => localStorage.getItem("token") || null
  );
  const [avatarImg, setAvatarImg] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const checkIsLogin = () => {
    const token = localStorage.getItem("token");
    setIsLogin(token);
  };
  useEffect(() => {
    checkIsLogin();
  }, []);
  const handleLogout = () => {
    if (window.confirm("Bạn có muốn đăng xuất không?")) {
      localStorage.removeItem("token");
      dispatch(userLoginActions.logOut());
      navigate("/login");
    }
  };
  useEffect(() => {
    checkIsLogin();
  }, [userLoginStore]);

  useEffect(() => {
    if (userLoginStore.userInfor === null) {
      setAvatarImg("");
    } else {
      setAvatarImg(userLoginStore.userInfor.avatar);
    }
  }, [userLoginStore.userInfor?.avatar]);

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
                <Link className="nav-link" to="/gender/men">
                  Mens
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gender/women">
                  Womens
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gender/child">
                  Child
                </Link>
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
            </form>

            <Link className="link-secondary me-3" to="/cart">
              <i className="fas fa-shopping-cart" />
            </Link>
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
                  <div className="avatarBox">
                    <span>
                      Xin chào,{" "}
                      {`${userLoginStore.userInfor.userName
                        .toUpperCase()
                        .charAt(0)}${userLoginStore.userInfor.userName.slice(
                        1
                      )}`}
                    </span>
                    <img
                      src={avatarImg}
                      className="rounded-circle"
                      height={25}
                      alt="Black and White Portrait of a Man"
                      loading="lazy"
                    />
                  </div>
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
                  {isLogin ? (
                    <Link className="dropdown-item" to="/" onClick={handleLogout}>
                      Logout
                    </Link>
                  ) : (
                    <Link className="dropdown-item" to="/login">
                      Login
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
