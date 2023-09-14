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
const router = useRouter();
const { pathname, asPath, query } = router;

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  const router = useRouter();
  useEffect(() => {
    let currentLanguage = document.getElementById(
      "language-options-container-current"
    );
    let listOptions = document.getElementById("language-options-area-id");
    if (currentLanguage != null) {
      let isLanguageOptionsOpen =
        currentLanguage.getAttribute("aria-expanded") === "true";
      const toggleLanguageOptions = () => {
        isLanguageOptionsOpen = !isLanguageOptionsOpen;
        currentLanguage?.setAttribute(
          "aria-expanded",
          isLanguageOptionsOpen.toString()
        );
        listOptions?.setAttribute(
          "aria-expanded",
          (!isLanguageOptionsOpen).toString()
        );
      };
      currentLanguage.addEventListener("click", toggleLanguageOptions);
      listOptions?.addEventListener("click", toggleLanguageOptions);
    }

    let currentLanguage2 = document.getElementById(
      "language-options-container-current-2"
    );
    let listOptions2 = document.getElementById("language-options-area-id-2");
    if (currentLanguage2 != null) {
      let isLanguageOptionsOpen2 =
        currentLanguage2.getAttribute("aria-expanded") === "true";
      const toggleLanguageOptions2 = () => {
        isLanguageOptionsOpen2 = !isLanguageOptionsOpen2;
        currentLanguage2?.setAttribute(
          "aria-expanded",
          isLanguageOptionsOpen2.toString()
        );
        listOptions2?.setAttribute(
          "aria-expanded",
          (!isLanguageOptionsOpen2).toString()
        );
      };
      currentLanguage2.addEventListener("click", toggleLanguageOptions2);
      listOptions2?.addEventListener("click", toggleLanguageOptions2);
    }
  }, []);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      let header = document.getElementById("the-header");
      if (window.scrollY > 50 && !(header == null)) {
        header.classList.add("header-scrolled");
      } else if (header != null) {
        header.classList.remove("header-scrolled");
      }
    });

    const navbarToggle = document.querySelector("#navbar-toggle");
    const navbarMenu = document.querySelector("#navbar-menu");
    if (navbarMenu != null && navbarToggle != null) {
      const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
      let isNavbarExpanded =
        navbarToggle.getAttribute("aria-expanded") === "true";
      const toggleNavbarVisibility = () => {
        isNavbarExpanded = !isNavbarExpanded;
        navbarToggle.setAttribute("aria-expanded", isNavbarExpanded.toString());
      };
      if (isNavbarExpanded != null && navbarLinksContainer != null) {
        navbarToggle.addEventListener("click", toggleNavbarVisibility);

        navbarLinksContainer.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
        });
        navbarMenu.addEventListener("click", toggleNavbarVisibility);
      }
    }

    const handleChangedLanguage = (newLocale: string) => {
      router.push({ pathname, query }, asPath, {
        locale: newLocale,
        scroll: false,
      });
    };
    let listChangedOptions = document.getElementsByClassName(
      "language-options-change"
    );
    for (let i = 0; i <= listChangedOptions.length; i++) {
      if (listChangedOptions[i] != null) {
        listChangedOptions[i].addEventListener("click", (e) => {
          e.preventDefault();
          let locale = listChangedOptions[i]
            .getAttribute("aria-label")
            ?.toString();
          if (locale != undefined) {
            handleChangedLanguage(locale);
          }
        });
      }
    }
  }, []);
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
