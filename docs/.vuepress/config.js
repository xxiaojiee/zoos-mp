module.exports = {
  title: "Zoos-mp",
  description: "Almost 零配置小程序脚手架(゜-゜)つロ 干杯~",
  base: "/",
  themeConfig: {
    algolia: {
      apiKey: "c601540e6d6e908f868c5c86d6935334",
      indexName: "zoos-mp",
    },
    repo: "zoos-mp/zoos-mp",
    editLinks: true,
    lastUpdated: true,
    editLinkText: "在 GitHub 上编辑此页",
    docsDir: "docs",
    smoothScroll: true,
    displayAllHeaders: true,
    sidebar: [
      "/introduce",
      "/start",
      {
        title: "CLI 服务",
        sidebarDepth: 3,
        collapsable: false,
        children: ["/cli-service/command", "/cli-service/env-mode"],
      },
      {
        title: "配置",
        sidebarDepth: 3,
        collapsable: true,
        children: ["/config"],
      },
      {
        title: "最佳实践",
        sidebarDepth: 3,
        collapsable: false,
        children: ["/code/demo1", "/code/demo2"],
      },
      /*  {
        title: "介绍",
        path: "/introduce/",
        sidebarDepth: 3,
      },
      {
        title: "快速开始",
        sidebarDepth: 3,
        collapsable: false,
        children: ["/start/install", "/start/create"],
      },
      {
        title: "配置参考",
        path: "/config/",
      },
      */
    ],
  },
  plugins: [
    "@vuepress/back-to-top",
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-168380782-1",
      },
    ],
    "vuepress-plugin-live2d-cat",
  ],
};
