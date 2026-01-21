import React from "react";
import { FaRegCopyright } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./footer.scss"
function Footer() {
  return (
    <>
    <div className="footer-link-container">
   

<Link to="/datenschutz" className="footer-link">Datenschutz</Link>
<Link to="/impressum" className="footer-link">Impressum</Link>

    </div>
    <div className="text-center footer">
      2025 - <FaRegCopyright /> All rights reserved
    </div></>
  );
}

export default Footer;
