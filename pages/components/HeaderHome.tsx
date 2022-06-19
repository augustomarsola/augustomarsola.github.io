import { loadFull } from "tsparticles";
import { Content } from "./HeaderHome.styles";
import { ParticlesContent } from "./ParticlesContent";

export function HomeHeader() {
  return (
    <Content>
      <ParticlesContent />
      <h1>Vamos ver</h1>
    </Content>
  );
}
