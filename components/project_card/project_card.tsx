import {
  Avatar,
  Badge,
  Button,
  Card,
  Center,
  Group,
  Text,
} from "@mantine/core";
import classes from "./project_card.module.css";
import { IconBrandGithub } from "@tabler/icons-react";
import ProjectCardSection from "@/components/project_card/project_card_section";
import icon from "../../assets/icon.png";
import { CiGlobe } from "react-icons/ci";
import Link from "next/link";

type language = "rust" | "python" | "typescript";

const language_colors = {
  rust: "#c34300",
  python: "#003ef6",
  typescript: "#006bf6",
};

export default function ProjectCard({
  title,
  description,
  image,
  github_url,
  website_url,
  languages,
}: {
  title: string;
  description: string;
  image: string;
  github_url: string;
  languages: language[];
  website_url?: string;
}) {
  const langauge_badges = languages.map((l) => {
    return (
      <Badge key={l} color={language_colors[l]}>
        {l}
      </Badge>
    );
  });
  return (
    <Card withBorder radius="lg" mt="2rem" className={classes.card}>
      <ProjectCardSection image={image} url={github_url} />

      <Group className={classes.rating}>{langauge_badges}</Group>

      <Group justify="space-between">
        <Text
          className={classes.title}
          fw={500}
          component="a"
          href={website_url}
        >
          {title}
        </Text>
      </Group>

      <Text fz="sm" c="dimmed" lineClamp={4}>
        {description}
      </Text>

      <Group justify="space-between" mt="1rem">
        <Center>
          <Avatar src={icon.src} size={24} radius="xl" mr="xs" />
          <Text fz="sm" inline>
            Erik Vroon
          </Text>
        </Center>

        <Group gap={8} mr={0}>
          {!website_url || (
            <Button
              variant="outline"
              color="teal"
              leftSection={<CiGlobe size={24} />}
              component={Link}
              href={website_url}
            >
              Website
            </Button>
          )}
          <Button
            variant="outline"
            color="teal"
            leftSection={<IconBrandGithub size={24} />}
            component={Link}
            href={github_url}
          >
            GitHub
          </Button>
        </Group>
      </Group>
    </Card>
  );
}
