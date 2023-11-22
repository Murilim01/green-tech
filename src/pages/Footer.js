import React from 'react';
import { FaInstagram, FaWhatsapp, FaFacebook, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    <footer>
        <div>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
            </a>
            <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="social-icon" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="social-icon" />
            </a>
            <a href="mailto:seuemail@gmail.com">
                <FaEnvelope className="social-icon" />
            </a>
        </div>
    </footer>
  ;
};

export default Footer;