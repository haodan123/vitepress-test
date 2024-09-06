import { defineConfig } from 'vitepress'
import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "hdan的个人网页",
  description: "测试描述",
  base: "/vitepress-test/",
  themeConfig: {
    logo: { src: 'vitepress-logo-mini.png', width: 24, height: 24 },
    appearance: 'dark', // 允许切换主题
    // 添加本地搜索功能
    search: {
      provider: 'local'
    },
    docFooter: { //添加是否可以添加下一页和上一下
      prev: '上一页',
      next: '下一页'
    },
    // 编辑链接
    editLink: {
      pattern: "https://github.com/haodan123/vitepress-test", // 自己项目仓库地址
      text: "在 github 上编辑此页",
    },
    outline: {
      label: '页面导航' //把二级导航栏的首个标题更改
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-PRESENT hzy',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '个人页面', link: '/personalPage/companyUrl' },
      // {
      //   text: 'Section',
      //   items: [
      //     { text: 'Item A', link: '/section/item-a' },
      //     { text: 'Item B', link: '/section/item-b' },
      //     { text: 'Item C', link: '/section/item-c' },
      //     { text: 'Item C', link: '/section/item-d' }
      //   ]
      // }
    ],

    sidebar: [
      {
        text: '个人的存储',
        items: [
          { text: '公司项目地址', link: '/personalPage/companyUrl' },
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/haodan123/vitepress-test' }
    ]
  },
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    },
  }
})
