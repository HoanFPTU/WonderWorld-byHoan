import { AppProps } from "next/app";
import React, { FC, useEffect, useState } from "react";
import "../styles/globals.scss";
import Head from "next/head";
import Header from "@/components/organisms/header";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/organisms/footer";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { platform } from "os";
// import { MyContextGlobal } from "@/components/useContext/useContextGlobal";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  const router = useRouter();

  return (
    <>
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={router.pathname}
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -1000, opacity: 0 }}
          transition={{
            opacity: { ease: "linear" },
          }}
        >
          <Head>
            <title>Wonder World</title>
            <link
              rel="icon"
              href="https://th.bing.com/th/id/R.13b5007b669aa231303f9c2083c4e7dd?rik=POS76FSob%2fEFpg&pid=ImgRaw&r=0"
            />
          </Head>

          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default MyApp;
