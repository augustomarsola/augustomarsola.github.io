import { loadFull } from "tsparticles";
import { Content } from "./HeaderHome.styles";
import { HeaderMenu } from "./HeaderMenu";
import { ParticlesContent } from "./ParticlesContent";

export function HomeHeader() {
  return (
    <Content>
      <ParticlesContent />
      <HeaderMenu />
      <h1>Vamos ver</h1>
    </Content>
  );
}
