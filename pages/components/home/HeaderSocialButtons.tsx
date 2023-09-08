import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";
import { motion } from "framer-motion";
import { MouseEvent, useState } from "react";
import { FileText, GitHub, Linkedin, Mail, Phone } from "react-feather";
import { Content } from "./HeaderSocialButtons.styles";

export function HeaderSocialButtons() {
  const [textTel, setTextTel] = useState("(11) 98467-6903");
  const [textMail, setTextMail] = useState("augusto.marsola@live.com");

  function handleTextCopy(event: MouseEvent<HTMLAnchorElement>, text: string) {
    event.preventDefault();
    navigator.clipboard.writeText(text);
  }

  function changeTooltipText(textToChange: string) {
    const tooltipClicked = document.querySelector(".tippy-content");
    tooltipClicked!.textContent = textToChange;
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
        <span>
          <Tippy content="LinkedIn" interactive={true} animation="shift-away">
            <a
              href="https://www.linkedin.com/in/augusto-marsola/"
              target="_blank"
              rel="noreferrer"
              title="Augusto LinkedIn"
            >
              <Linkedin />
            </a>
          </Tippy>
        </span>

        <span>
          <Tippy content="GitHub" interactive={true} animation="shift-away">
            <a
              href="https://github.com/augustomarsola"
              target="_blank"
              rel="noreferrer"
              title="Augusto GitHub"
            >
              <GitHub />
            </a>
          </Tippy>
        </span>

        <span>
          <Tippy content={textMail} interactive={true} animation="shift-away">
            <a
              href="mailto:augusto.marsola@live.com"
              title="Copiar Email"
              onClick={(event) => {
                event.preventDefault();
                handleTextCopy(event, "augusto.marsola@live.com");
              }}
            >
              <Mail />
            </a>
          </Tippy>
        </span>

        <span>
          <Tippy content={textTel} interactive={true} animation="shift-away">
            <a
              href="tel:(11) 98467-6903"
              title="Copiar Telefone"
              onClick={(event) => {
                event.preventDefault();
                handleTextCopy(event, "(11) 98467-6903");
              }}
            >
              <Phone />
            </a>
          </Tippy>
        </span>

        <span>
          <Tippy content="Currículo" interactive={true} animation="shift-away">
            <a
              href="/cv/CV-AugustoMarsola.pdf"
              title="Currículo Augusto"
              target="_blank"
            >
              <FileText />
            </a>
          </Tippy>
        </span>
      </motion.div>
    </Content>
  );
}
