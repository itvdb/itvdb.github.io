// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "iTVDB",
	tagline: "From vision to reality",
	url: "https://itvdb.com",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "itvdb", // Usually your GitHub org/user name.
	projectName: "itvdb", // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "nl",
		locales: ["nl"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
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
			navbar: {
				title: "iTVDB",
				logo: {
					alt: "itvdb logo",
					src: "img/logo-2.png",
				},
				items: [
					{
						label: "Projecten",
						to: "/docs/projects/promatask",
					},
					{
						label: "Team",
						to: "docs/team/tim",
					},
					{ to: "/blog", label: "Blog", position: "left" },
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Projects",
						items: [
							{
								label: "Promatask",
								to: "/projects/promatask",
							},
						],
					},
					{
						title: "Socials",
						items: [
							{
								label: "Linkedin",
								href: "https://www.linkedin.com/in/timvandenbosch/",
							},
						],
					},
					{
						title: "More",
						items: [
							{
								label: "Blog",
								to: "/blog",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} iTVDB, Inc. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;