import { Avatar, Badge, Button, Card, Flex, Group, Text } from "@mantine/core";
import classes from "./project_card.module.css";
import { IconBrandGithub } from "@tabler/icons-react";
import { CiGlobe } from "react-icons/ci";
import PreloadLink from "../link";
import ProjectCardSection from "./project_card_section";

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

      <Flex gap="md" mt="1rem" className={classes.a}>
        <Group gap={0}>
          <Avatar src={"/assets/icon.png"} size={24} radius="xl" mr="xs" />
          <Text fz="sm" inline>
            Erik Vroon
          </Text>
        </Group>

        <Flex gap="md" mr={0} wrap="wrap" className={classes.button_group}>
          <Button
            variant="outline"
            color="teal"
            leftSection={<IconBrandGithub size={24} />}
            component={PreloadLink}
            href={github_url}
          >
            GitHub
          </Button>
          {!website_url || (
            <Button
              variant="outline"
              color="teal"
              leftSection={<CiGlobe size={24} />}
              component={PreloadLink}
              href={website_url}
            >
              Website
            </Button>
          )}
        </Flex>
      </Flex>
    </Card>
  );
}
