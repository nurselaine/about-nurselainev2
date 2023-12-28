import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { AnimatePresence, motion } from "framer-motion";
const Layout = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
      >
        <Header />
          <div>{children}</div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Layout;
