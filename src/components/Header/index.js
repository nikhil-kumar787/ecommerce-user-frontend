import React, { useState } from "react";
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


const Header = (props) => {
  const [loginModal, setLoginModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <DropdownMenu
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
          />
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
