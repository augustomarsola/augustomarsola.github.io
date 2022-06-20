import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadLinksPreset } from "tsparticles-preset-links";
import { Content } from "./ParticlesContent.style";

export function ParticlesContent() {
  // this customizes the component tsParticles installation
  async function customInit(engine: Engine): Promise<void> {
    // this adds the preset to tsParticles, you can safely use the
    await loadLinksPreset(engine);
  }

  const options = {
    background: {
      color: {
        value: "#232526",
      },
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: "#EBEBEB",
      },
      links: {
        color: "#EBEBEB",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 500,
        },
        value: 40,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 2 },
      },
    },
    detectRetina: true,
  };

  return (
    <Content>
      <Particles options={options as any} init={customInit as any} />
    </Content>
  );
}
