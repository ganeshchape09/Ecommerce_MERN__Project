import React from "react";
import { ReactNavbar } from "overlay-navbar";
import { FaUserCircle, FaSearch, FaShoppingCart } from "react-icons/fa";
import logo from "../../../images/Mainlogo.png";

function Header() {
  return (
    <ReactNavbar
      burgerColor="#3090e5"
      burgerColorHover="#125a98"
      logo={logo}
      logoWidth="20vmax"
      navColor1="white"
      logoHoverSize="10px"
      logoHoverColor="#3090e5"
      link1Text="Home"
      link2Text="Products"
      link3Text="Contact"
      link4Text="About"
      link1Url="/"
      link2Url="/products"
      link3Url="/contact"
      link4Url="/about"
      link1Size="1.3vmax"
      link1Color="rgba(35, 35, 35,0.8)"
      nav1justifyContent="flex-end"
      nav2justifyContent="flex-end"
      nav3justifyContent="flex-start"
      nav4justifyContent="flex-start"
      link1ColorHover="#3090e5"
      link1Margin="2vmax"
      profileIconColor="rgba(35, 35, 35,0.8)"
      searchIconColor="rgba(35, 35, 35,0.8)"
      cartIconColor="rgba(35, 35, 35,0.8)"
      profileIconColorHover="#3090e5"
      searchIconColorHover="#3090e5"
      cartIconColorHover="#3090e5"
      cartIconMargin="1vmax"
      profileIcon={true}
      ProfileIconElement={FaUserCircle}
      searchIcon={true}
      SearchIconElement={FaSearch}
      cartIcon={true}
      CartIconElement={FaShoppingCart}
    />
  );
}

export default Header;
