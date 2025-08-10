import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  // `site` 对象用于存放网站的核心信息
  site: {
    // 你的名字或昵称
    author: '三水',

    // 你的博客标题
    title: '我的博客',

    // 一句简短的博客描述
    description: '这里是我的想法和笔记，欢迎交流。',

  },

  // 你可以保留这些注释，或者删除它们
  // seo: { twitter: "@moeyua13" },
}
