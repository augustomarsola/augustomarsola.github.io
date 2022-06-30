import { Content } from "./HeaderHome.styles";
import { HeaderMenu } from "./HeaderMenu";
import { ParticlesContent } from "../particles/ParticlesContent";
import { motion } from "framer-motion";
import { TypedAnimation } from "./TypedAnimation";
import { LogoControl } from "./LogoControl";
import { HeaderSocialButtons } from "./HeaderSocialButtons";

const delayTime = 2.5;

const textAnimation = {
  hidden: { opacity: 0, translateY: 50 },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: {
      default: {
        duration: 2,
        delay: delayTime,
      },
      opacity: {
        duration: 3,
        delay: delayTime,
      },
    },
  },
};

export function HomeHeader() {
  return (
    <Content>
      <ParticlesContent />
      <HeaderMenu />
      <div className="homeMainContent">
        <LogoControl />
        <div className="homeDescription">
          <div>
            <motion.p
              variants={textAnimation}
              initial={"hidden"}
              animate={"visible"}
            >
              Olá, eu sou Augusto, um entusiasta em
            </motion.p>
          </div>
          <div>
            <motion.p
              variants={textAnimation}
              initial={"hidden"}
              animate={"visible"}
            >
              <TypedAnimation timeDelay={delayTime} />
            </motion.p>
          </div>
          <div>
            <motion.p
              variants={textAnimation}
              initial={"hidden"}
              animate={"visible"}
            >
              que adora novas tecnologias.
            </motion.p>
          </div>
        </div>
        <HeaderSocialButtons />
      </div>
    </Content>
  );
}
