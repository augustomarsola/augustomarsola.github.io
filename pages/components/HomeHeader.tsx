import { loadFull } from "tsparticles";
import { Content } from "./HomeHeader.style";
import { ParticlesContent } from "./ParticlesContent";

export function HomeHeader() {
  return (
    <Content>
      <ParticlesContent />
      <h1>Vamos ver</h1>
    </Content>
  );
}
