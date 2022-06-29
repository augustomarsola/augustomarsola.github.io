import { Content } from "./HeaderHome.styles";
import { HeaderMenu } from "./HeaderMenu";
import { ParticlesContent } from "../particles/ParticlesContent";
import { motion } from "framer-motion";
import { GitHub, Phone, Mail, Linkedin, FileText } from "react-feather";
import { TypedAnimation } from "./TypedAnimation";
import { MouseEvent, useEffect, useState } from "react";
import { LogoControl } from "./LogoControl";

export function HomeHeader() {
  function mostraHover(element: MouseEvent) {
    console.log(element);
  }

  return (
    <Content>
      <ParticlesContent />
      <HeaderMenu />
      <div className="homeMainContent">
        <LogoControl />
        <motion.div
          className="homeDescription"
          initial={{ opacity: 0, translateY: 200 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            default: { duration: 2, delay: 2 },
            opacity: { duration: 3, delay: 2 },
          }}
        >
          <p>Olá, eu sou Augusto, um entusiasta em</p>
          <TypedAnimation />
          <p>que adora novas tecnologias.</p>
        </motion.div>
        <div style={{ display: "inline", overflow: "hidden" }}>
          <motion.div
            className="homeButtons"
            initial={{ opacity: 0, translateY: 200 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              default: { duration: 2, delay: 2 },
              opacity: { duration: 3, delay: 2 },
            }}
          >
            <a
              href="https://www.linkedin.com/in/augusto-marsola/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              onMouseMove={mostraHover}
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/augustomarsola"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <GitHub />
            </a>
            <a href="#" title="Email">
              <Mail />
            </a>
            <a href="#" title="Telefone">
              <Phone />
            </a>
            <a
              href="/cv/CV-AugustoMarsola.pdf"
              title="Currículo"
              target="_blank"
            >
              <FileText />
            </a>
          </motion.div>
        </div>
      </div>
    </Content>
  );
}
