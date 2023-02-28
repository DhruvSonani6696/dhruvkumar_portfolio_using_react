import React, { useState } from "react";
import {FaBars} from "react-icons/fa";
import { Link } from "react-router-dom";
// import mainLogo from "./src/assests/logo.png";
import myLogo from "../../assets/logo.png";
import {HiX} from 'react-icons/hi'
import "./styles.scss";

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT ME",
    to: "/about",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "RESUME",
    to: "/resume",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
];
const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <p className="navbar__container__logo__brand">Dhruvkumar Sonani</p>
            {/* <img src={myLogo} alt="" /> */}
          </Link>
          {/* <Navbar.Brand href="/">Brand link</Navbar.Brand> */}
        </div>
        
          <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""} `}>
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu_item">
              <Link
                className="navbar__container__menu_item__links"
                to={item.to}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
            {
                toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>
            }
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// @media only screen and (max-width : 768px){
//     .navbar__container__menu{
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         width: 100%;
//         position: absolute;
//         top: 80px;
//         left: -110%;
//         opacity: 1;
//         transition: all 0.5s ease;

//         &.active{
//             background: #181818;
//             left: 0px;
//             opacity: 1;
//         }

//         &__item{
//             border-bottom: 1px solid #282828;
//             margin: 0px;
//             padding: 20px 0px; 
//         }
//     }











