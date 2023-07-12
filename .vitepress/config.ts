import { defineConfig } from 'vitepress'

import { createWriteStream } from "node:fs";
import { resolve } from "node:path";
import { SitemapStream } from "sitemap";

const links: any[] = [];
const baseUrl = `https://thomasrob.in`;

/*
<meta property='og:title' content='Title of the article'/>
<meta property='og:image' content='//media.example.com/ 1234567.jpg'/>
<meta property='og:description' content='Description that will show in the preview'/>
<meta property='og:url' content='//www.example.com/URL of the article'/>
*/

const ogDescription = 'Consulting Solutions Architect working on Cloud Computing, IoT, NodeJS, Microservices'
const ogImage = 'https://thomasrob.in/img/circle-dp.webp'
const ogTitle = 'Robin Biju Thomas | Solutions Architect'
const ogUrl = baseUrl

export default defineConfig({
  lang: 'en-US',
  title: "Robin Biju Thomas",
  titleTemplate: "Solutions Architect",
  description: "Consulting Solutions Architect, Bangalore",
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/img/icons/site-icon.svg' }],

    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }],

    ['meta', { name: 'twitter:site', content: '@_teknicus' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:url', content: ogUrl }],
    ['meta', { name: 'twitter:title', content: ogTitle }],
    ['meta', { name: 'twitter:description', content: ogDescription }],
    ['meta', { name: 'twitter:image', content: ogImage }],

    ['meta', { name: 'theme-color', content: '#10b981' }],
    // [
    //   'script',
    //   {
    //     async: true,
    //     defer: true,
    //   },
    //   `
    //   (function(c,l,a,r,i,t,y){
    //     c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    //     t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    //     y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    //   })(window, document, "clarity", "script", "gvgifiblvg");
    //   `
    // ],
    ['link', { rel: 'preload', as: 'script', href: 'https://www.googletagmanager.com/gtag/js?id=G-QLTWS4HWDQ' }],

    // [
    //   'script',
    //   {
    //     // async: true,
    //     defer: true,
    //     src: 'https://www.googletagmanager.com/gtag/js?id=G-QLTWS4HWDQ',
    //   },
    // ],
    [
      'script',
      {
        // async: true,
        defer: true,
      },
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-QLTWS4HWDQ');",
    ],
  ],
  themeConfig: {
    logo: '/img/logo.svg',
    siteTitle: false,
    outline: 'deep',
    darkModeSwitchLabel: 'Toggle Dark Mode',
    footer: {
      message: '* In the unlikely event that <a href="/about/projects/appledore"><b><i><u>Appledore</u></i></b></a> is offline, the traffic gets routed to a Linode instance to ensure availability.',
      copyright: 'Copyright © 2023-present Robin Biju Thomas'
    },
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'About',
        items: [
          {
            text: '$whoami',
            link: '/about/whoami'
          },
          {
            text: 'Projects',
            link: '/about/projects/'
          },
          {
            text: 'Services',
            link: '/about/services'
          },
          {
            text: 'Pricing',
            link: '/about/pricing'
          },
        ]
      },
      { text: 'Blog', link: '/blog/' },
      { text: 'Get in touch', link: '/social/connect' }
    ],

    sidebar: [
      { text: 'Projects', link: '/about/projects/' },
      {
        text: 'Services',
        link: '/about/services/',

      },
      { text: 'Blog', link: '/blog/' },
      { text: 'Get in touch', link: '/social/connect' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/teknicus/thomasrob.in-v2' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/teknicus/' },
    ],
    search: {
      provider: 'local'
    }
  },
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id))
      links.push({
        // requires cleanURL mode
        url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, "$2"),
        lastmod: pageData.lastUpdated
      });
  },
  buildEnd: (config) => {
    const sitemap = new SitemapStream({
      hostname: baseUrl
    });
    const writeStream = createWriteStream(
      resolve(config.outDir, "sitemap.xml")
    );
    sitemap.pipe(writeStream);
    links.forEach((link) => sitemap.write(link));
    sitemap.end();
  }
})
