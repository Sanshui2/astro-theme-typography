import type { UserConfig } from '~/types'

// export const userConfig: Partial<UserConfig> = {
//   // Override the default config here
//   // site: { title: "講評世界" },
//   // seo: { twitter: "@moeyua13" },
// }

export default {
  socials: [
    {
      name: 'github',
      href: 'https://github.com/Sanshui2',
    },
  ],

  site: {
    // 这里是修正后的代码
    title: "Sanshui's blog", 
    author: 'Sanshui',
  },

} satisfies UserConfig
