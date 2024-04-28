import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "The Timekeeper",
  tagline: "Count your numbers",
  favicon: "./img/favicon.ico",

  // Set the production url of your site here
  url: "https://ringomar.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/documentation",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "RingoMar", // Usually your GitHub org/user name.
  projectName: "timer", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "../img/docusaurus-social-card.jpg",
    navbar: {
      title: "The Timekeeper",
      logo: {
        alt: "My Site Logo",
        src: "./img/favicon.ico",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        {
          to: "/api",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Broadcast API",
        },
        {
          href: "https://github.com/RingoMar/timer",
          label: "Project",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Links",
          items: [
            {
              label: "Websites",
              href: "https://ringomar.github.io/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/_ringomar",
            },
            {
              label: "RingoMar",
              href: "https://github.com/RingoMar",
            },
            {
              label: "Photos",
              href: "https://unsplash.com/@ringomar",
            },
          ],
        },
        {
          title: "Donate",
          items: [
            {
              label: "Support Me on Ko-fi",
              href: "https://ko-fi.com/ringomar",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RingoMar. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
