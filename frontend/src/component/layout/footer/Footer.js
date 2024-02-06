import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/appstore.png";
import logo from "../../../images/Mainlogo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <img src={logo} alt="Mainlogo" />
        <p>Premium Quality is our priority</p>
        <p>Copyrights 2024 &copy; Ganesh</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.youtube.com/channel/UCUgJ2IAjrDxxrgrY9NRlSMA">
          Instagram
        </a>
        <a href="https://www.youtube.com/channel/UCUgJ2IAjrDxxrgrY9NRlSMA">
          Youtube
        </a>
        <a href="https://www.youtube.com/channel/UCUgJ2IAjrDxxrgrY9NRlSMA">
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
