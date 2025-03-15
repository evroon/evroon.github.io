import ProjectCard from "@/components/project_card/project_card";
import { Container } from "@mantine/core";
import bracket_logo from "../assets/bracket-logo.png";
import holdmyplace_logo from "../assets/hold-my-place-logo.svg";
import bevy_hydrology_logo from "../assets/bevy-hydrology-logo.png";

export default function Projects() {
  return (
    <Container>
      <ProjectCard
        title="Bracket"
        description="There are many tournament management systems available online. However, only few (if any) are open-source and free to use, while still being feature-rich. Bracket aims to fill this gap. Bracket enables you to set up a tournament with as much flexibility as possible, while still being easy to use."
        image={bracket_logo.src}
        github_url="https://github.com/evroon/bracket"
        website_url="https://docs.bracketapp.nl/"
        languages={["typescript", "python"]}
      />
      <ProjectCard
        title="Bevy Hydrology"
        description="Hydrology simulation in Bevy on the GPU. It simulates particles falling on the terrain, which descend down the slope. The particles affect the terrain by erosion and sedimentation."
        image={bevy_hydrology_logo.src}
        github_url="https://github.com/evroon/bevy-hydrology"
        languages={["rust"]}
      />
      <ProjectCard
        title="Hold my place"
        description="A fast placeholder generator microservice written in Rust."
        image={holdmyplace_logo.src}
        github_url="https://github.com/evroon/hold-my-place"
        website_url="https://holdmyplace.online"
        languages={["rust"]}
      />
    </Container>
  );
}
