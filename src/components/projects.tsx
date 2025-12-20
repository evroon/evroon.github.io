import { Container } from "@mantine/core";
import ProjectCard from "./project_card/project_card";

export default function Projects() {
  return (
    <Container>
      <ProjectCard
        title="Bracket"
        description="There are many tournament management systems available online. However, only few (if any) are open-source and free to use, while still being feature-rich. Bracket aims to fill this gap. Bracket enables you to set up a tournament with as much flexibility as possible, while still being easy to use."
        image={"/assets/bracket-logo.png"}
        github_url="https://github.com/evroon/bracket"
        website_url="https://docs.bracketapp.nl/"
        languages={["typescript", "python"]}
      />
      <ProjectCard
        title="Bevy Volumetric Clouds"
        description="Volumetric clouds rendering in Bevy based on Horizon Zero Dawn."
        image={"/assets/bevy-volumetric-clouds.png"}
        github_url="https://github.com/evroon/bevy-volumetric-clouds"
        languages={["rust"]}
      />
      <ProjectCard
        title="Bevy Hydrology"
        description="Hydrology simulation in Bevy on the GPU. It simulates particles falling on the terrain, which descend down the slope. The particles affect the terrain by erosion and sedimentation."
        image={"/assets/bevy-hydrology-logo.png"}
        github_url="https://github.com/evroon/bevy-hydrology"
        languages={["rust"]}
      />
      <ProjectCard
        title="Hold my place"
        description="A fast placeholder generator microservice written in Rust."
        image={"/assets/hold-my-place-logo.svg"}
        github_url="https://github.com/evroon/hold-my-place"
        website_url="https://holdmyplace.online"
        languages={["rust"]}
      />
      <ProjectCard
        title="Bevy experiments"
        description="Experiments in Bevy, including a boids simulation in a compute shader."
        image={"/assets/bevy-experiments-logo.png"}
        github_url="https://github.com/evroon/bevy-experiments"
        languages={["rust"]}
      />
    </Container>
  );
}
