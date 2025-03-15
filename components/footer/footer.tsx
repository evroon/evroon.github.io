import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { ActionIcon, Group } from "@mantine/core";
import classes from "./footer.module.css";
import Image from "next/image";
import favicon from "../../assets/icon.png";
import Link from "next/link";

// const links = [{ link: "https://github.com/evroon/bracket", label: "Bracket" }];

export function Footer() {
  // const items = links.map((link) => (
  //   <Anchor
  //     c="dimmed"
  //     key={link.label}
  //     href={link.link}
  //     lh={1}
  //     size="sm"
  //     component={Link}
  //   >
  //     {link.label}
  //   </Anchor>
  // ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Image
          src={favicon.src}
          alt=""
          width={42}
          height={42}
          style={{ borderRadius: "25%" }}
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
            component={Link}
            href="https://github.com/evroon"
          >
            <IconBrandGithub size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            component={Link}
            href="https://www.linkedin.com/in/evroon"
          >
            <IconBrandLinkedin size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}
