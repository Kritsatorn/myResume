import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import NavData from "../NavData";
import { motion } from "framer-motion";
import "./NavHeader.css";

const variants__menu = {
  open: { x: 0 },
  closed: { x: "-100%" },
};
const NavHeader = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    console.log("open : ", open);
  }, [open]);
  return (
    <div className="d-lg-none navheader">
      <motion.div
        initial={false}
        className="navheader__burger"
        onClick={() => {
          setOpen(true);
        }}
      >
        <GiHamburgerMenu />
      </motion.div>
      <motion.div
        className="navheader_menu"
        initial={false}
        variants={variants__menu}
        animate={open ? "open" : "closed"}
        transition={{ type: "tween", stiffness: 100 }}
      >
        <div className="navheader__cross" onClick={() => setOpen(false)}>
          <AiOutlineClose />
        </div>
        <div className="navheader__data" onClick={() => setOpen(false)}>
          <NavData />
        </div>
      </motion.div>
      <div className="navheader__name">Kritsatorn</div>
    </div>
  );
};

export default NavHeader;
