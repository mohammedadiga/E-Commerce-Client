"use client"
import "./styles/globals.css";

import { Rubik } from 'next/font/google'


import { useEffect, type ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";


// import styles from "./styles/layout.module.css";

interface Props {
  readonly children: ReactNode;
}

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
})

export default function RootLayout({ children }: Props) {

  useEffect(() => {
    if(typeof window !== 'undefined'){
      require('bootstrap/dist/js/bootstrap.min.js')
    }

  }, [])

  return (
    <StoreProvider>
      <html lang="en">
        <body className={rubik.className}>
          <Header />
            <main>{ children }</main>
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
