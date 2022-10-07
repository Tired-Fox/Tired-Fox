// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  ssr: true,
  target: 'server',
  generate: {
    crawler: true,
  },
  head: {
    link: [
        { ref: 'icon', type: 'image/x-icon', href: '@/favicon.ico'}
    ],
    meta: [
        {
            name: 'viewport',
            content: 'width=device-width',
            'initial-scale': 1,
        }
    ]
  },
  css:['@/assets/styles/main.scss'],
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '@/assets/styles/tailwind.css',
  },
  content: {
    highlight: {
        theme: 'one-dark-pro',
        preload: [
            'javascript',
            'rust',
            'bash',
            'python',
            'tsx',
            'jsx',
            'typescript'
        ]
    },
    markdown: {
        tocDepth: 5,
        remarkPlugins: [
            'remark-supersub', 
            ['remark-gfm', { singleTilde: false }],
            'remark-math',
        ],
        rehypePlugins: ['rehype-mathjax'],
    }
  },
  vue: {
    compilerOptions: {
      isCustomElement: tag => ['g', 'use', 'path', 'rect', 'mjx-container'].includes(tag)
    }
  }
})
