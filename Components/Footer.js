import React from "react";
import Link from "next/link";
import Image from "next/image";
import vedayuuLogo from "../public/assets/images/logo.png";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="row">
        <div className="col-6 col-md-2">
          <Image src={vedayuuLogo} alt="" />
        </div>
        <div className="col-6 col-md-2 align-items-end">
          <span className="footer-text">My Account</span>
          <span className="footer-text">
            <Link href="/aboutus">Profile</Link>
          </span>
          <span className="footer-text">
            <Link href="/aboutus">Orders</Link>
          </span>
          <span className="footer-text">
            <Link href="/aboutus">{"Address"}</Link>
          </span>
        </div>
        <div className="col-6 col-md-2 align-items-end">
          <span className="footer-text">About Vedayuu</span>
          <span className="footer-text">
            <Link href="/aboutus">Our Story</Link>
          </span>
          <span className="footer-text">
            <Link href="/aboutus">Experts</Link>
          </span>
          <span className="footer-text">
            <Link href="/aboutus">{"FAQ'S"}</Link>
          </span>
        </div>
        <div className="col-6 col-md-2 align-items-end ">
          <span className="footer-text">Information</span>
          <span className="footer-text">
            <Link href="/queryform">Contact Us</Link>
          </span>
          <span className="footer-text">
            <Link href="/queryform">Terms and Conditions</Link>
          </span>
          <span className="footer-text">
            <Link href="/queryform">Privacy Policy</Link>
          </span>
          <span className="footer-text">
            <Link href="/queryform">Easy Return Policy</Link>
          </span>
        </div>
        <div className="col-6 col-md-2 align-items-end">
          <span className="footer-text">Inspiration</span>
          <span className="footer-text">Catalogues</span>
          <span className="footer-text">Infrastructure</span>
          <span className="footer-text">Materials Used</span>
        </div>
        <div className="col-6 col-md-2 social-links align-items-end ">
          <span className="footer-text">Connect with us</span>
          <div className="social">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
              >
                <path
                  id="Icon_awesome-linkedin"
                  data-name="Icon awesome-linkedin"
                  d="M13,1H1A1,1,0,0,0,0,2.009V13.991A1,1,0,0,0,1,15H13a1.007,1.007,0,0,0,1-1.009V2.009A1.007,1.007,0,0,0,13,1ZM4.231,13H2.156V6.319H4.234V13ZM3.194,5.406A1.2,1.2,0,1,1,4.4,4.2,1.2,1.2,0,0,1,3.194,5.406ZM12.009,13H9.934V9.75c0-.775-.016-1.772-1.078-1.772-1.081,0-1.247.844-1.247,1.716V13H5.534V6.319H7.525v.912h.028A2.186,2.186,0,0,1,9.519,6.153c2.1,0,2.491,1.384,2.491,3.184Z"
                  transform="translate(0 -1)"
                  fill="#0270ad"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="12.995"
                viewBox="0 0 16 12.995"
              >
                <path
                  id="Icon_awesome-twitter"
                  data-name="Icon awesome-twitter"
                  d="M14.355,4.741c.01.142.01.284.01.426a9.266,9.266,0,0,1-9.33,9.33A9.267,9.267,0,0,1,0,13.025a6.784,6.784,0,0,0,.792.041,6.567,6.567,0,0,0,4.071-1.4A3.285,3.285,0,0,1,1.8,9.391a4.135,4.135,0,0,0,.619.051,3.468,3.468,0,0,0,.863-.112A3.28,3.28,0,0,1,.65,6.112V6.071a3.3,3.3,0,0,0,1.482.416A3.284,3.284,0,0,1,1.117,2.1,9.321,9.321,0,0,0,7.878,5.533,3.7,3.7,0,0,1,7.8,4.782a3.282,3.282,0,0,1,5.675-2.244,6.456,6.456,0,0,0,2.081-.792,3.27,3.27,0,0,1-1.442,1.807A6.574,6.574,0,0,0,16,3.046a7.049,7.049,0,0,1-1.645,1.7Z"
                  transform="translate(0 -1.503)"
                  fill="#1c9ceb"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
              >
                <path
                  id="Icon_awesome-facebook-square"
                  data-name="Icon awesome-facebook-square"
                  d="M12.5,1H1.5A1.5,1.5,0,0,0,0,2.5v11A1.5,1.5,0,0,0,1.5,15H5.789V10.24H3.82V8H5.789V6.293A2.734,2.734,0,0,1,8.716,3.277a11.927,11.927,0,0,1,1.735.151V5.335H9.474a1.12,1.12,0,0,0-1.263,1.21V8H10.36l-.344,2.24H8.211V15H12.5A1.5,1.5,0,0,0,14,13.5V2.5A1.5,1.5,0,0,0,12.5,1Z"
                  transform="translate(0 -1)"
                  fill="#224e97"
                />
              </svg>
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
}
