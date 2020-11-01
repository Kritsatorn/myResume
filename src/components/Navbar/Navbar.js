import React from "react";
import { motion } from "framer-motion";
import NavData from "../NavData";
import "./Navbar.css";
const Navbar = () => {
  // const [isMobile, setIsMobile] = useState(
  //   /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  // );
  const navbar_variant = {
    hidden: {
      y: "-30vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.7,
        type: "spring",
      },
    },
  };
  // useEffect(() => {
  //   console.log("HI : ", isMobile);
  // }, [isMobile]);
  return (
    <>
      <motion.div
        className="navbar__menu col-lg-3 d-none d-lg-flex"
        variants={navbar_variant}
        initial="hidden"
        animate="visible"
      >
        <NavData />
      </motion.div>
    </>
  );
};
export default Navbar;
