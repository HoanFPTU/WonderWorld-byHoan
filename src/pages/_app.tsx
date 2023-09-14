import { AppProps } from "next/app";
import React, { FC, useEffect } from "react";
import "../styles/globals.scss";
import Head from "next/head";
import Header from "@/components/organisms/header";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/organisms/footer";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
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
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1,
          }}
          // variants={{
          //   initialState: {
          //     opacity: 1,
          //     clipPath: "polygon(0 0 , 100% 0,100% 100%, 0% 100%)",
          //   },
          //   animateState: {
          //     opacity: 1,
          //     clipPath: "polygon(0 0 , 100% 0, 100% 100%,0 100%)",
          //   },
          //   exitState: {
          //     opacity: 1,
          //     clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
          //   },
          // }}
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
