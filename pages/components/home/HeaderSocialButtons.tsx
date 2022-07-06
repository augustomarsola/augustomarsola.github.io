import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { motion } from "framer-motion";
import { MouseEvent } from "react";
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
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          default: { duration: 2, delay: 2.5 },
          opacity: { duration: 3, delay: 2.5 },
        }}
      >
        <Tippy content="LinkedIn" interactive={true} interactiveBorder={20}>
          <a
            href="https://www.linkedin.com/in/augusto-marsola/"
            target="_blank"
            rel="noreferrer"
            title="Augusto LinkedIn"
            onMouseMove={mostraHover}
          >
            <Linkedin />
          </a>
        </Tippy>

        <Tippy content="GitHub" interactive={true} interactiveBorder={20}>
          <a
            href="https://github.com/augustomarsola"
            target="_blank"
            rel="noreferrer"
            title="Augusto GitHub"
          >
            <GitHub />
          </a>
        </Tippy>

        <Tippy
          content="augusto.marsola@live.com"
          interactive={true}
          interactiveBorder={20}
        >
          <a
            href="#"
            title="Copiar Email"
            onClick={(event) =>
              handleTextCopy(event, "augusto.marsola@live.com")
            }
          >
            <Mail />
          </a>
        </Tippy>

        <Tippy content="(11) 98467-6903" interactive={true}>
          <a
            href="#"
            title="Telefone"
            onClick={(event) => handleTextCopy(event, "(11) 98467-6903")}
          >
            <Phone />
          </a>
        </Tippy>

        <Tippy content="Currículo" interactive={true} interactiveBorder={20}>
          <a
            href="/cv/CV-AugustoMarsola.pdf"
            title="Currículo Augusto"
            target="_blank"
          >
            <FileText />
          </a>
        </Tippy>
      </motion.div>
    </Content>
  );
}
