import styles from "./Footer.module.css";
import Link from "next/link";

import { BsFacebook, BsFeather, BsInstagram, BsPinterest, BsSearch, BsTwitter, BsYoutube } from "react-icons/bs";

export const Footer = () => {
  return (
    <>
      <footer className={`${styles.footerTop} py-5`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-5 text-white gap-10">
              <BsFeather className="fs-2" />
              <h5 className="d-inline-block mb-0 ms-3">Sing Up For Newsletter</h5>
            </div>
            <div className="col-7">
              <div className={`${styles.inputGroup} input-group`}>
                  <input type="text" className='form-control' placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2" />
                  <span className={`${styles.inputGroupText} input-group-text`} id='basic-addon2'>Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className={`${styles.footerUpper} py-5`}>
        <div className="container">
          <div className="row">
            
            <div className="col-3">
              <h5 className="mb-4">Contact Us</h5>

              <div className="py-2">
                <p>Demo Store <br />No. 1259 Freedom. New york. 1111 <br />United States</p>
                <Link className="d-block" href="tel: +91 123456789">
                  +91 123456789
                </Link>
                <Link className="d-block" href="mailto: info@Ecommerce.com">
                  info@Ecommerce.com
                </Link>
                <Link className={styles.socialLink} href={'/'}><BsTwitter /></Link>
                <Link className={styles.socialLink} href={'/'}><BsFacebook /></Link>
                <Link className={styles.socialLink} href={'/'}><BsPinterest /></Link>
                <Link className={styles.socialLink} href={'/'}><BsInstagram /></Link>
                <Link className={styles.socialLink} href={'/'}><BsYoutube /></Link>
              </div>

            </div>

            <div className="col-2">
              <h5 className="mb-4">Information</h5>
              <div className="d-flex flex-column">
                <Link className="py-2 mb-1" href={'/'}>Privacy Policy</Link>
                <Link className="py-2 mb-1" href={'/'}>Refund Policy</Link>
                <Link className="py-2 mb-1" href={'/'}>Shipping Policy</Link>
                <Link className="py-2 mb-1" href={'/'}>Terms of Service</Link>
                <Link className="py-2 mb-1" href={'/'}>Blog</Link>
              </div>
            </div>

            <div className="col-2">
              <h5 className="mb-4">Account</h5>
              <div className="d-flex flex-column">
                <Link className="py-2 mb-1" href={'/'}>Search</Link>
                <Link className="py-2 mb-1" href={'/about'}>About Us</Link>
                <Link className="py-2 mb-1" href={'/'}>Faq</Link>
                <Link className="py-2 mb-1" href={'/contact'}>Contact</Link>
                <Link className="py-2 mb-1" href={'/'}>Size Chart</Link>
              </div>
            </div>

            <div className="col-2">
              <h5 className="mb-4">Quick Links</h5>
              <div className="d-flex flex-column">
                <Link className="py-2 mb-1" href={'/'}>Accessories</Link>
                <Link className="py-2 mb-1" href={'/'}>Laptops</Link>
                <Link className="py-2 mb-1" href={'/'}>Headphones</Link>
                <Link className="py-2 mb-1" href={'/'}>Smart Watches</Link>
                <Link className="py-2 mb-1" href={'/'}>Tablets</Link>
              </div>
            </div>

            <div className="col-3">
              <h5 className="mb-4">Our App</h5>
              <p className="py-2">Download our App and 15% Discount on your first Order..!</p>
            </div>

          </div>
        </div>
      </footer>

      <footer className={`${styles.footerBotton} py-2`}>
        <div className="container">
          <p className="text-center mb-0">&copy; {new Date().getFullYear()} : Powered by Developer's Adigamahoo</p>
        </div>
      </footer>
    </>
  )
};
