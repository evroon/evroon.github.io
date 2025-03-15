"use client";

import { Card, Image } from "@mantine/core";
import Link from "next/link";

export default function ProjectCardSection({
  image,
  url,
}: {
  image: string;
  url: string;
}) {
  return (
    <Card.Section>
      <Link href={url}>
        <Image src={image} alt="Project logo" height={580} />
      </Link>
    </Card.Section>
  );
}
