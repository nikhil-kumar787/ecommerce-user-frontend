import React, { useEffect, useState } from "react";
import "./style.css";
import amazonlogo from "../../images/amazon3.jpg";
// import goldenStar from '../../images/logo/golden-star.png';
import { IoIosArrowDown, IoIosCart, IoIosSearch } from "react-icons/io";
import {
  Modal,
  MaterialInput,
  MaterialButton,
  DropdownMenu,
} from "../MaterialUI";
import { Link } from "react-router-dom";
import { signout } from "../../actions";
import { useDispatch, useSelector } from "react-redux";


const Header = (props) => {
  const [loginModal, setLoginModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signout());
  };

  useEffect(() => {
    if (auth.authenticate) {
      setLoginModal(false);
    }
  }, [auth.authenticate]);

  const renderLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={<a className="fullName">{auth.user.fullName}</a>}
        menus={[
          { label: "Your Account", href: "", icon: null },
          { label: "Your Prime Membership", href: "", icon: null },
          { label: "Your Subscription", href: "", icon: null },
          {
            label: " Your Orders",
            href: `/account/orders`,
            icon: null,
          },
          { label: "Your Wishlist", href: "", icon: null },
          { label: "Your Prime Video", href: "", icon: null },
          // { label: "Coupons", href: "", icon: null },
          // { label: "Rewards", href: "", icon: null },
          // { label: "Notifications", href: "", icon: null },
          // { label: "Gift Cards", href: "", icon: null },
          { label: "Logout", href: "", icon: null, onClick: logout },
        ]}
      />
    );
  };

  const renderNonLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={
          <a
            className="loginButton"
            onClick={() => {
              setLoginModal(true);
            }}
            href='login'
          >
            Hello,Sign In
          </a>
        }
        menus={[
          { label: "Your Account", href: "", icon: null },
          { label: "Your Orders", href: "", icon: null },
          {
            label: "Your Wishlist",
            href: `/account/orders`,
            icon: null,
            onClick: () => {
              !auth.authenticate && setLoginModal(true);
            },
          },
          { label: "Your Subscription", href: "", icon: null },
          { label: "Your Prime Membership", href: "", icon: null },
          { label: "Your Prime Video", href: "", icon: null },
        ]}
        firstMenu={
          <div className="firstmenu">
            <span>New Customer?</span>
            <a
              onClick={() => {
                setLoginModal(true);
               
              }}
              style={{ color: "#2874f0" }}
            >
              Sign Up
            </a>
          </div>
        }
      />
    );
  };

  return (
    <div className="header">
    
      <div className="subHeader">
        <div className="logo">
          <a href="">
            <img src={amazonlogo} className="logoimage" alt="" />
          </a>
          <a style={{ marginTop: "-10px" }}>
            {/* <img src={goldenStar} className="goldenStar" alt="" /> */}
          </a>
        </div>
        <div
          style={{
            padding: "0 10px",
          }}
        >
          <div className="searchInputContainer">
            <input
              className="searchInput"
              placeholder={"search for products, brands and more"}
            />
            <div className="searchIconContainer">
              <IoIosSearch
                style={{
                  color: "#2874f0",
                }}
              />
            </div>
          </div>
        </div>
        <div className="rightMenu">
        {auth.authenticate ? renderLoggedInMenu() : renderNonLoggedInMenu()}
          {/* <DropdownMenu
            menu={
              <a className="loginButton" onClick={() => setLoginModal(true)}>
                <Link to='login' style={{ color: "#fff" }}>
                Hello,SignIn
                </Link>
                
              </a>
            }
            menus={[
              { label: "Your Account", href: "", icon: null },
              { label: "Your Orders", href: "", icon: null },
              { label: "Your Wishlist", href: "", icon: null },
              { label: "Your Subscription", href: "", icon: null },
              { label: "Your Prime Membership", href: "", icon: null },
              { label: "Your Prime Video ", href: "", icon: null },
            ]}
            
            firstMenu={
              <div className="firstmenu">
                <span>New Customer?</span>

                <a href="/register" style={{ color: "#2874f0" }}>
                  Sign Up
                </a>
              </div>
            }
          /> */}
          <DropdownMenu
            menu={
              <a className="more">
                <span>More</span>
                <IoIosArrowDown />
              </a>
            }
            menus={[
              { label: "Create a Wish List", href: "", icon: null },
              { label: "Find a wish List", href: "", icon: null },
              { label: "24x7 Customer Care", href: "", icon: null },
              { label: "Advertise", href: "", icon: null },
              { label: "Download App", href: "", icon: null },
            ]}
          />
          <div>
            <a className="cart">
              <IoIosCart />
              <span style={{ margin: "0 10px" }}>Cart</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
