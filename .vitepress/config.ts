import { defineConfig } from 'vitepress'

const ogDescription = 'Consulting Solutions Architect working on Cloud Computing, IoT, NodeJS, Microservices'
const ogImage = 'https://vitepress.thomasrob.in/circle-dp.png'
const ogTitle = 'Robin Biju Thomas | Solutions Architect'
const ogUrl = 'https://thomasrob.in'

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
    ['meta', { name: 'theme-color', content: '#10b981' }],

  ],
  themeConfig: {
    logo: '/img/logo.svg',
    siteTitle: false,
    outline: 'deep',
    darkModeSwitchLabel: 'Toggle Dark Mode',
    footer: {
      message: '* In the unlikely event that <a href="/projects/appledore"><b><i><u>Appledore</u></i></b></a> is offline, the traffic gets routed to a Linode instance to ensure availability.',
      copyright: 'Copyright © 2023-present Robin Biju Thomas'
    },
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'About',
        items: [
          {
            text: '$whoami',
            link: '/whoami'
          },
          {
            text: 'Projects',
            link: '/projects/'
          },
          {
            text: 'Services',
            link: '/services'
          },
          {
            text: 'Pricing',
            link: '/pricing'
          },
        ]
      },
      { text: 'Blog', link: '/blog/' },
      { text: 'Get in touch', link: '/connect' }
    ],

    sidebar: [
      { text: 'Projects', link: '/projects/' },
      {
        text: 'Services',
        link: '/services/',

      },
      { text: 'Blog', link: '/blog/' },
      { text: 'Get in touch', link: '/connect' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/teknicus/thomasrob.in-v2' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/teknicus/' },
    ],
    search: {
      provider: 'local'
    }
  }
})
