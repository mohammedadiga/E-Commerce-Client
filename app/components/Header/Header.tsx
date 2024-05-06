"use client";
import styles from "./Header.module.css";
import { BsSearch } from 'react-icons/bs';

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
                <div className="headerUpperText d-flex align-items-center justify-center-between">
                  <div>
                    <Link href='#'>
                      <Image src="./logo.svg" alt="logo" width={35} height={35}/>
                      <p></p>
                    </Link>
                  </div>
                  <div>
                    <Link href='#'>
                      <Image src="./logo.svg" alt="logo" width={35} height={35}/>
                      <p></p>
                    </Link>
                  </div>
                  <div>
                    <Link href='#'>
                      <Image src="./logo.svg" alt="logo" width={35} height={35}/>
                      <p></p>
                    </Link>
                  </div>
                  <div>
                    <Link href='#'>
                      <Image src="./logo.svg" alt="logo" width={35} height={35}/>
                      <p></p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <header></header>
    </>

  );
};
