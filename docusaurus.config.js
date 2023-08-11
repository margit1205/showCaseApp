// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
// const Footer = require('./src/components/footer');
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Showcase",
  tagline: "",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
            
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

    ({
      // Replace with your project's social card
      image: "img",
      navbar: {
        title: "",
        logo: {
          alt: "Logo",
          src: "img/WM-New-Logo-Large.svg",
        },
        items: [
          {
            to: "/docs/welcome",
            label: "Start Free Trial",
            position: "right",
          },
        ],
      },

      footer: {
        style: "light",

        links: [
          {
            items: [
              {
                html: `
              <a href="https://www.wavemaker.com" alt="logo" class="footer-logo">
                <img src="../../img/WM-New-Logo-small.svg" alt="Wavemaker Logo" width="150" height="40" />
              </a>
            `,
              },
            ],
          },
          {
            items: [
              {
                html: `

        <div class="foot">
        <div class="link-div">
        <a>About</a>
        <a>Feature</a>
        <a>Works</a>
        <a>Support</a>
        </div>
              `,
              },
            ],
          },
          {
            items: [
              {
                html: `
                <div class="social-icon">
                <a href="https://twitter.com/yourtwitter" target="_blank" >
                  <img src="../../img/twitter.svg" alt="Twitter" />
                </a>
                <a href="https://facebook.com" target="_blank" >
                  <img src="../../img/facebook-f.svg" alt="GitHub"  />
                </a>
                <a href="https://instagram.com" target="_blank" >
                  <img src="../../img/instagram.svg" alt="GitHub"  />
                </a>
                <a href="https://github.com" target="_blank" >
                  <img src="../../img/github.svg" alt="GitHub"  />
                </a>
               
              </div>
              `,
              },
            ],
          },
        ],
        copyright: ` 
        <div class="row-foot">
        <div class="left-content">© Copyright © 2023 WaveMaker, Inc.</div>
        <div class="right-content">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
         `,
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        disableSwitch: true,
      },
    }),
};

module.exports = config;
