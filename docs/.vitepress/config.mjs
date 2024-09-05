import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "修改标题",
  description: "测试描述",
  themeConfig: {
    base: "/vitepress-test/",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      {
        text: 'Section',
        items: [
          { text: 'Item A', link: '/section/item-a' },
          { text: 'Item B', link: '/section/item-b' },
          { text: 'Item C', link: '/section/item-c' },
          { text: 'Item C', link: '/section/item-d' }
        ]
      }
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
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
