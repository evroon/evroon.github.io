// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";

export const metadata = {
  title: "Erik Vroon",
  description: "My personal homepage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <script
          async
          src="https://analytics.familievroon.nl/script.js"
          data-website-id="10d38679-a5e7-4e1f-860b-ef716e5963fa"
          data-domains="erikvroon.nl"
        ></script>
        <ColorSchemeScript defaultColorScheme={"dark"} />
      </head>
      <body>
        <MantineProvider defaultColorScheme={"auto"}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
