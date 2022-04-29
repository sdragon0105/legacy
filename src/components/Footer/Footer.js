import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <p>P2E Analytics | Your GameFi Hub</p>
      <Link to="/legal" className="disableLink">
        <strong className="footerPrivacy">Legal Disclaimer</strong>
      </Link>
    </footer>
  );
}

export default Footer;
