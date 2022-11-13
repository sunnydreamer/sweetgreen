// IMPORT REACT
import React from "react";

// ADDITIONAL IMPORTS
import { Link } from "react-router-dom";
import * as userService from "../utilities/users-service";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";

// CREATE COMPONENT
const Navbar = ({ user, setUser, setPage, page, cart }) => {
  // console.log(user);
  // Create a function responsible for loggin the user out
  const handleLogOut = (e) => {
    // Call the logout function
    userService.logOut();

    // Set the user back to null
    setUser(null);
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <svg width="166" height="24" tabIndex="-1">
            <path
              d="M154.176 2.91429H150.772V18.4903H154.176V7.35772C155.04 6.08914 156.57 5.19429 158.332 5.19429C160.667 5.19429 162.254 6.63772 162.254 8.97257V18.4903H165.659V8.30743C165.659 4.98857 163.266 2.65371 159.573 2.65371C157.293 2.65371 155.39 3.60686 154.18 5.22171V2.91429H154.176ZM140.589 5.05029C142.982 5.05029 144.655 6.46286 145.176 9.00343H136.091C136.581 6.49029 138.254 5.05029 140.589 5.05029ZM140.647 18.8091C144.426 18.8091 147.196 16.8171 148.204 13.5017H144.858C144.107 15.3463 142.608 16.3577 140.675 16.3577C137.963 16.3577 136.118 14.4823 135.943 11.28H148.636V10.6457C148.636 5.50971 145.118 2.62629 140.644 2.62629C135.943 2.62629 132.508 5.74286 132.508 10.7314C132.515 15.6651 135.888 18.8091 140.647 18.8091ZM122.418 5.05029C124.811 5.05029 126.484 6.46286 127.005 9.00343H117.919C118.41 6.49029 120.083 5.05029 122.418 5.05029ZM122.476 18.8091C126.254 18.8091 129.024 16.8171 130.032 13.5017H126.686C125.935 15.3463 124.437 16.3577 122.503 16.3577C119.791 16.3577 117.947 14.4823 117.772 11.28H130.464V10.6457C130.464 5.50971 126.947 2.62629 122.472 2.62629C117.772 2.62629 114.336 5.74286 114.336 10.7314C114.34 15.6651 117.717 18.8091 122.476 18.8091ZM108.515 2.91429H105.11V18.4903H108.515V7.848C109.523 6.08914 111.686 5.39657 113.822 5.74286V2.62629C111.429 2.50971 109.639 3.54857 108.515 5.50971V2.91429ZM94.3787 13.6731C91.7833 13.6731 89.8804 12.1714 89.8804 9.46286C89.8804 6.66514 91.7558 5.136 94.3787 5.136C97.005 5.136 98.877 6.66514 98.877 9.46286C98.8804 12.1749 96.9741 13.6731 94.3787 13.6731ZM90.1958 18.4903H86.9353C87.7444 22.2411 90.9158 24 95.1844 24C99.453 24 102.309 22.0389 102.309 19.0663C102.309 16.7314 100.608 15.6617 98.0096 14.9417C100.663 14.1909 102.165 12.1131 102.165 9.37371C102.165 7.87543 101.647 6.54514 100.752 5.47886C101.503 5.30743 102.282 5.27657 103.06 5.42057V2.54057C101.414 2.48229 100.176 3.03086 99.2233 4.09714C97.869 3.20229 96.165 2.68457 94.3478 2.68457C89.8187 2.68457 86.589 5.45486 86.589 9.37714C86.589 14.5406 90.9158 15.7509 95.0713 16.704C98.3318 17.4549 99.0244 18.2057 99.0244 19.2994C99.0244 20.5406 98.0713 21.5794 95.1296 21.5794C92.5924 21.576 90.861 20.6537 90.1958 18.4903ZM80.7364 14.1051V5.45143H85.6393V2.91429H80.7364V0H77.3627V2.91429H73.4096V5.45143H77.3627V14.712C77.3627 17.3074 78.7478 18.6069 82.2073 18.6069C83.2461 18.6069 84.3433 18.4903 85.6393 18.144V15.6617C84.5147 15.9497 83.6473 16.0354 82.9581 16.0354C81.0244 16.0389 80.7364 15.3463 80.7364 14.1051ZM65.013 5.05029C67.4061 5.05029 69.0793 6.46286 69.6004 9.00343H60.5147C61.005 6.49029 62.6781 5.05029 65.013 5.05029ZM65.0713 18.8091C68.8496 18.8091 71.6198 16.8171 72.6278 13.5017H69.2816C68.5307 15.3463 67.0324 16.3577 65.0987 16.3577C62.3867 16.3577 60.5421 14.4823 60.3673 11.28H73.0598V10.6457C73.0598 5.50971 69.5421 2.62629 65.0678 2.62629C60.3673 2.62629 56.9318 5.74286 56.9318 10.7314C56.9353 15.6651 60.3124 18.8091 65.0713 18.8091ZM46.8416 5.05029C49.2347 5.05029 50.9078 6.46286 51.429 9.00343H42.3433C42.8301 6.49029 44.5033 5.05029 46.8416 5.05029ZM46.8998 18.8091C50.6781 18.8091 53.4484 16.8171 54.4564 13.5017H51.1101C50.3593 15.3463 48.861 16.3577 46.9273 16.3577C44.2153 16.3577 42.3707 14.4823 42.1958 11.28H54.8884V10.6457C54.8884 5.50971 51.3707 2.62629 46.8964 2.62629C42.1958 2.62629 38.7604 5.74286 38.7604 10.7314C38.7638 15.6651 42.1376 18.8091 46.8998 18.8091ZM30.3981 18.4903H33.861L38.2153 2.91429H35.0713L32.0987 14.4514L28.725 2.91429H25.725L22.4061 14.28L19.4644 2.91429H16.1181L20.5033 18.4903H23.9661L27.1684 7.24114L30.3981 18.4903ZM8.39013 18.8091C12.5147 18.8091 15.3981 16.7897 15.3981 13.9337C15.3981 7.76229 3.86099 10.4434 3.86099 6.92571C3.86099 5.77029 5.07127 4.96457 7.35127 4.96457C9.83356 4.96457 11.4176 5.94514 12.0244 8.08114H15.2267C14.5067 4.56343 11.6507 2.59886 7.38213 2.59886C3.17184 2.59886 0.572987 4.47429 0.572987 7.29943C0.572987 13.2994 12.1101 10.5291 12.1101 14.28C12.1101 15.4903 10.9547 16.4434 8.35927 16.4434C5.76384 16.4434 4.11813 15.3189 3.56956 12.9806H0.339844C1.06327 16.8754 4.03242 18.8091 8.39013 18.8091Z"
              fill="rgba(0, 71, 60, 1)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              tabIndex="-1"
            ></path>
          </svg>
        </Link>
      </div>
      <div className="navItems">
        <div className="navItem">
          <Link
            to="/featured"
            style={{ textDecoration: "none", color: "black" }}
            onClick={() => {
              page === true ? setPage(false) : setPage(true);
            }}
          >
            Featured
          </Link>
        </div>
        <div className="navItem">
          <Link
            to="/warmbowls"
            style={{ textDecoration: "none", color: "black" }}
            onClick={() => {
              page === true ? setPage(false) : setPage(true);
            }}
          >
            Warm Bowls
          </Link>
        </div>
        <div className="navItem">
          <Link
            to="/salads"
            style={{ textDecoration: "none", color: "black" }}
            onClick={() => {
              page === true ? setPage(false) : setPage(true);
            }}
          >
            Salads
          </Link>
        </div>

        <div className="navItem">
          <Link
            to="/sides"
            style={{ textDecoration: "none", color: "black" }}
            onClick={() => {
              page === true ? setPage(false) : setPage(true);
            }}
          >
            Sides
          </Link>
        </div>
        <div className="navItem">
          <Link
            to="/dessert"
            style={{ textDecoration: "none", color: "black" }}
            onClick={() => {
              page === true ? setPage(false) : setPage(true);
            }}
          >
            Dessert
          </Link>
        </div>
        <div className="navItem">
          <Link
            to="/beverages"
            style={{ textDecoration: "none", color: "black" }}
            onClick={() => {
              page === true ? setPage(false) : setPage(true);
            }}
          >
            Beverages
          </Link>
        </div>
      </div>
      <div className="dropdown">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            MENU
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Featured</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Warm Bowls</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Salads</Dropdown.Item>

            <Dropdown.Item href="#/action-4">Sides</Dropdown.Item>
            <Dropdown.Item href="#/action-5">Dessert</Dropdown.Item>
            <Dropdown.Item href="#/action-6">Beverages</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="navRight">
        {user && user.currentUser.isAdmin ? (
          <>
            <div className="orderCenterBtn">Orders</div>
          </>
        ) : (
          <>
            <div className="cart">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/checkout"
              >
                <img
                  className="cartImg"
                  src="https://webiconspng.com/wp-content/uploads/2016/11/bag_basket_buy_cart_luggage_shopping_suitcase_icon_1540167.png"
                  alt=""
                />
              </Link>
              <div className="cartCount">
                {Object.values(cart).reduce((a, b) => a + b.quantity, 0)}
              </div>
            </div>
          </>
        )}

        <span style={{ paddingLeft: "10px" }}>
          {user ? user.newUser?.name || user.currentUser?.name : ""}
        </span>
        {user ? (
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to=""
            onClick={() => {
              return handleLogOut();
            }}
          >
            Log Out
          </Link>
        ) : (
          <Link style={{ textDecoration: "none", color: "black" }} to="/login">
            LogIn
          </Link>
        )}
      </div>
    </nav>
  );
};

// EXPORT COMPONENT
export default Navbar;
