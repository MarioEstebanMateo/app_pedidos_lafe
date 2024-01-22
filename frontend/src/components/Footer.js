import React from "react";

import "./Footer.css";

import logoWhatsapp from "../img/iconWhatsapp.png";

const Footer = () => {
  return (
    <div className="container-fluid p-0">
      <div className="whatsAppIcon text-center">
        <a
          href="https://api.whatsapp.com/send?phone=5492477488532"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Tenes alguna duda? Consultanos por WhatsApp!
          <img src={logoWhatsapp} alt="whatsapp La Fe" />
        </a>
      </div>
      <div className="footer">
        <p>Desarrollado por Mario para La Fe S.A.</p>
      </div>
    </div>
  );
};

export default Footer;
