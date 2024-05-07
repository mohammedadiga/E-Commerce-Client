import styles from "./Header.module.css";
import { BsArrowRepeat, BsCart, BsFillGrid3X3GapFill, BsHeart, BsPerson, BsSearch } from 'react-icons/bs';
import { Dropdown } from 'react-bootstrap';

import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <>
      <header className={`${styles.headerTop} py-3`}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="text-white mb-0">
                Free Shipping $100 & Free Returns
              </div>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline: 
                <a href="tel: +91 123456789" className="text-white">
                  +91 123456789
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className={`${styles.headerUpper} py-3`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link href={'/'} className="text-white">Dev Corner</Link>
              </h2>
            </div>

            <div className="col-5">
              <div className="input-group">
                <input type="text" className={`${styles.formControl} form-control`} placeholder="Search Product Here..." aria-label="Search Product Here..." aria-describedby="basic-addon2" />
                <span className={`${styles.inputGroupText} input-group-text p-3`} id="basic-addon2"> <BsSearch className="fs-6" /> </span>
              </div>
            </div>

            <div className="col-5">
              <div className="headerUpperText d-flex align-items-center justify-content-between">

                <div>
                  <Link href='#' className="d-flex align-items-center gap-10">
                    <BsArrowRepeat  className="fs-2"/>
                    <p className="mb-0">Compare<br />Products</p>
                  </Link>
                </div>

                <div>
                  <Link href='#' className="d-flex align-items-center gap-10">
                    <BsHeart  className="fs-2"/>
                    <p className="mb-0">Favurite<br />wishlist</p>
                  </Link>
                </div>

                <div>
                  <Link href='#' className="d-flex align-items-center gap-10">
                    <BsPerson className="fs-2"/>
                    <p className="mb-0">Login<br />My Account</p>
                  </Link>
                </div>

                <div>
                  <Link href='#' className="d-flex align-items-center gap-10">
                    <BsCart className={`${styles.primary} fs-2`}/>
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <span>$ 500</span>
                    </div>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>

      <header className={`${styles.headerBotton} py-1`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={`${styles.menuBottom} d-flex align-items-center gap-15`}>

                <div className={`${styles.menuDropdown} dropdown`}>
                  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <BsFillGrid3X3GapFill className="fs-5" />
                    <span className="mx-3 d-inline-block">Shop Categories</span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-dark rounded-0 p-0">
                    <li><Link className="dropdown-item" href="#">Action</Link></li>
                    <li><Link className="dropdown-item" href="#">Another action</Link></li>
                    <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                  </ul>
                </div>

                <div className={styles.menuLink}>
                  <div className="d-flex align-items-center gap-15">
                    <Link href={'/'}>Home</Link>
                    <Link href={'/'}>Our Store</Link>
                    <Link href={'/'}>Blogs</Link>
                    <Link href={'/contact'}>Contact</Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>
    </>

  );
};
