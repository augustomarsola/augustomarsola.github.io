import { Content } from "./HeaderHome.styles";
import { HeaderMenu } from "./HeaderMenu";
import { ParticlesContent } from "../particles/ParticlesContent";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { TypedAnimation } from "./TypedAnimation";

const iconDown = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "#EBEBEB",
  },
};

const iconUpper = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "#EBEBEB",
  },
};

export function HomeHeader() {
  return (
    <Content>
      <ParticlesContent />
      <HeaderMenu />
      <div className="logoAugusto">
        <svg
          width="153"
          height="159"
          viewBox="0 0 153 159"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M69.2639 83.8495L0.400002 141.308L58.4785 102.359L81.3971 150.082L129.257 95.2228V158.333L152.4 131.748V35.0115L85.4416 111.948L69.2639 83.8495Z"
            variants={iconDown}
            initial="hidden"
            animate="visible"
            stroke="#EBEBEB"
            transition={{
              default: { duration: 2, ease: "easeInOut", delay: 1 },
              fill: { duration: 2, ease: [1, 0, 0.8, 1], delay: 2 },
            }}
          />
          <motion.path
            d="M67.9157 0L0.399994 133.409L47.6937 90.094L67.9157 48.6151L87.6889 90.094L103.193 72.0306L67.9157 0Z"
            variants={iconUpper}
            initial="hidden"
            animate="visible"
            stroke="#EBEBEB"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1], delay: 1 },
            }}
          />
        </svg>
        <motion.span
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            default: { duration: 2, delay: 2 },
            opacity: { duration: 3, delay: 2 },
          }}
        >
          Augusto Marsola
        </motion.span>
      </div>
      <div className="homeButtons"></div>
      <div className="homeDescription">
        <p>Olá, eu sou Augusto, um entusiasta em</p>
        <TypedAnimation />
        <p className="typingStyle">{/* desenvolvimento front-end */}</p>
      </div>
      <h1>Vamos ver</h1>
    </Content>
  );
}
