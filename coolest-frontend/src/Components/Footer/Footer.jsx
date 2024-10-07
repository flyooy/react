import React from "react";
import "./Footer.css"; // Стили для футера

function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 Yan Mukha. All rights reserved.</p>
      <div className="social-links">
        <a href="#facebook">Facebook</a>
        <a href="#twitter">Twitter</a>
        <a href="#linkedin">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;