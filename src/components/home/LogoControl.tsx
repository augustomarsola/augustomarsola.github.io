import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Content } from "./LogoControl.styles";

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

export function LogoControl() {
  const [size, setSize] = useState([0, 0]);

  function logoWidth(windowWeight: number) {
    if (windowWeight >= 720) {
      setSize([192, 200]);
    } else {
      setSize([153, 159]);
    }
  }

  useEffect(() => {
    logoWidth(window.innerWidth);
    window.addEventListener("resize", () => logoWidth(window.innerWidth));
  }, []);

  return (
    <Content>
      <svg
        width={size[0]}
        height={size[1]}
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
      <span style={{ overflow: "hidden", display: "inline-block" }}>
        <motion.span
          style={{ display: "inline-block" }}
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            default: { duration: 2, delay: 1 },
            opacity: { duration: 3, delay: 1 },
          }}
        >
          Augusto Marsola
        </motion.span>
      </span>
    </Content>
  );
}
