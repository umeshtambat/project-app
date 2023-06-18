import { Link } from "react-router-dom";
import {React } from "react";



function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="row">
          <div className="col d-flex">
            <div>
            <h4>INFORMATION</h4>
            <a to={"/AboutUs"}>About us</a>
            <a to={"/ContactUs"}>Contact Us</a>
            </div>
            
          </div>
          <div className="col d-flex">
            
          </div>
          <div className="col d-flex">
            <span>
              <i className="bx bxl-facebook-square" />
            </span>
            <span>
              <i className="bx bxl-instagram-alt" />
            </span>
            <span>
              <i className="bx bxl-github" />
            </span>
            <span>
              <i className="bx bxl-twitter" />
            </span>
            <span>
              <i className="bx bxl-pinterest" />
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
