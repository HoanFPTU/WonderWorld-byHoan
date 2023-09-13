import { AppProps } from "next/app";
import React, { FC, useEffect } from "react";
import "../styles/globals.scss";
import Head from "next/head";
import Header from "@/components/organisms/header";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/organisms/footer";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Wonder World</title>
        <link
          rel="icon"
          href="https://th.bing.com/th/id/R.13b5007b669aa231303f9c2083c4e7dd?rik=POS76FSob%2fEFpg&pid=ImgRaw&r=0"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
