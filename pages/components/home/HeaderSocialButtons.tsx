import { motion } from "framer-motion";
import { FormEvent, MouseEvent, MouseEventHandler } from "react";
import { FileText, GitHub, Linkedin, Mail, Phone } from "react-feather";
import { Content } from "./HeaderSocialButtons.styles";

export function HeaderSocialButtons() {
  function mostraHover() {
    console.log("Saí");
  }

  function handleTextCopy(event: MouseEvent<HTMLAnchorElement>, text: string) {
    event.preventDefault();
    navigator.clipboard.writeText(text);
  }

  return (
    <Content>
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
        <a
          href="#"
          title="Email"
          onClick={(event) => handleTextCopy(event, "augusto.marsola@live.com")}
        >
          <Mail />
        </a>
        <a
          href="#"
          title="Telefone"
          onClick={(event) => handleTextCopy(event, "(11) 98467-6903")}
        >
          <Phone />
        </a>
        <a href="/cv/CV-AugustoMarsola.pdf" title="Currículo" target="_blank">
          <FileText />
        </a>
      </motion.div>
    </Content>
  );
}
