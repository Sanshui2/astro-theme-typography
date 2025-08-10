import type { UserConfig } from '~/types'

// export const userConfig: Partial<UserConfig> = {
//   // Override the default config here
//   // site: { title: "講評世界" },
//   // seo: { twitter: "@moeyua13" },
// }

export default {
  // socials 数组用于配置社交链接
  socials: [
    {
      // name 字段是图标的名称，对于 GitHub，就用 'github'
      name: 'github',
      // href 字段是您的链接地址
      href: 'https://github.com/Sanshui2',
    },
  ],

  // 您之前想修改的网站标题也可以在这里一并完成
  site: {
    // 将这里的标题替换为您想要的
    title: 'Sanshui's blog', 
    // 作者也建议修改
    author: 'Sanshui',
  },

} satisfies UserConfig
