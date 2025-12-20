import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import { NuqsAdapter } from "nuqs/adapters/react-router/v7";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from ".";
import NotFoundPage from "./not-found";

const theme = createTheme({
  colors: {
    dark: [
      "#C1C2C5",
      "#A6A7AB",
      "#909296",
      "#5c5f66",
      "#373A40",
      "#2C2E33",
      "#25262b",
      "#1A1B1E",
      "#141517",
      "#101113",
    ],
  },
});

function AnalyticsScript() {
  if (import.meta.env.VITE_ANALYTICS_SCRIPT_SRC == null) {
    return null;
  }

  var script = document.createElement("script");
  script.setAttribute("async", "");
  script.setAttribute(
    "data-domain",
    import.meta.env.VITE_ANALYTICS_DATA_DOMAIN,
  );
  script.setAttribute(
    "data-website-id",
    import.meta.env.VITE_ANALYTICS_DATA_WEBSITE_ID,
  );
  script.setAttribute("src", import.meta.env.VITE_ANALYTICS_SCRIPT_SRC);
  document.head.appendChild(script);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NuqsAdapter>
      <BrowserRouter>
        <MantineProvider defaultColorScheme="auto" theme={theme}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </MantineProvider>
      </BrowserRouter>
    </NuqsAdapter>
  </StrictMode>,
);

AnalyticsScript();
