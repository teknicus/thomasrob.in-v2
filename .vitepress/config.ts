import { defineConfig } from 'vitepress'

const ogDescription = 'Software Product Consultant working on Cloud Computing, IoT, NodeJS, Microservices'
const ogImage = 'https://vitepress.thomasrob.in/circle-dp.png'
const ogTitle = 'Robin Biju Thomas | Software Product Consultant'
const ogUrl = 'https://thomasrob.in'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Robin Biju Thomas",
  titleTemplate: "Robin Biju Thomas",
  description: "Software Product Consultant",
  cleanUrls: true,
  head: [
    // ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }],
    ['meta', { name: 'twitter:site', content: '@_teknicus' }],
    ['meta', { name: 'theme-color', content: '#10b981' }],
    // ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=2' }],
    
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get in touch', link: '/connect' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/teknicus/thomasrob.in-v2' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/teknicus/' },
    ]
  }
})
