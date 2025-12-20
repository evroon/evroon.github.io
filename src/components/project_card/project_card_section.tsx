"use client";

import { Card, Image } from "@mantine/core";
import PreloadLink from "../link";

export default function ProjectCardSection({
  image,
  url,
}: {
  image: string;
  url: string;
}) {
  return (
    <Card.Section>
      <PreloadLink href={url}>
        <Image src={image} alt="Project logo" height="50%" />
      </PreloadLink>
    </Card.Section>
  );
}
