import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { ActionIcon, Group, Image } from "@mantine/core";
import classes from "./footer.module.css";
import PreloadLink from "../link";

export function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Image
          src={"/assets/icon.png"}
          alt=""
          width={42}
          height={42}
          style={{ borderRadius: "25%", width: '42px' }}
        />

        {/*<Group className={classes.links}>{items}</Group>*/}
        <Group className={classes.links}>
          Built with Next.js and Mantine. Hosted on Github Pages.
        </Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            component={PreloadLink}
            href="https://github.com/evroon"
          >
            <IconBrandGithub size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            component={PreloadLink}
            href="https://www.linkedin.com/in/evroon"
          >
            <IconBrandLinkedin size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}
