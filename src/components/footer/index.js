import React from "react";
import clsx from "clsx";
import styles from "./style.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <footer>
      <div className="foot">
        <img src="img/WM-New-Logo-small.svg"></img>
        <div className="link-div">
        <a>About</a>
        <a>Feature</a>
        <a>Works</a>
        <a>Support</a>
    </div>
       
        <div className="social-icon">
        <FaTwitter size={10} />
        <FaFacebook size={10} />
        <FaInstagram size={10} />
        <FaGithub size={10} />
        </div>
      </div>
      <div class="row-foot">
        <div className="left-content">© Copyright © 2023 WaveMaker, Inc.</div>
        <div className="right-content">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
      </footer>
    </>
  );
};

export default Footer;
