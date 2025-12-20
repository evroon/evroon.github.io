import { Button, Container, Flex, Text } from "@mantine/core";
import classes from "./hero.module.css";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import PreloadLink from "../link";

export function Hero() {
  return (
    <div className={classes.wrapper}>
      <Container className={classes.inner}>
        <h1 className={classes.title}>Erik Vroon</h1>

        <Text className={classes.description} c="dimmed">
          I am a software engineer with a physics and aerospace engineering
          background. I enjoy building web applications and using GPU
          capabilities for 3D graphics.
        </Text>

        <Flex gap="md" wrap="wrap" className={classes.controls}>
          <Button
            component={PreloadLink}
            miw="12rem"
            href="https://github.com/evroon"
            size="xl"
            variant="default"
            className={classes.control}
            leftSection={<IconBrandGithub size={28} />}
          >
            GitHub
          </Button>
          <Button
            component={PreloadLink}
            miw="12rem"
            href="https://www.linkedin.com/in/evroon"
            size="xl"
            variant="outline"
            className={classes.control}
            leftSection={<IconBrandLinkedin size={28} />}
          >
            LinkedIn
          </Button>
        </Flex>
      </Container>
    </div>
  );
}
