const chalk = require("chalk");
const compareVersions = require("compare-versions");
const banner = `　　　　　　　　　　　　　　　　　　
____  ____  ____  ____
/_   \/  _ \/  _ \/ ___\
 /   /| / \|| / \||    \
/   /_| \_/|| \_/|\___ |
\____/\____/\____/\____/
　　　　　　　　　　　　　　　　　　　　　　　　　　　
`;

module.exports = (localVersion = "0", latestVersion = "0", showVersion = false) => {
  const hasNewVersion = compareVersions(latestVersion, localVersion) > 0;
  const _v_m = `
-----------------------------------------------------
    当前版本:    ${localVersion}
-----------------------------------------------------
    `;
  const _nv_m = `
-----------------------------------------------------
    当前版本:    ${localVersion}
    有新版本:    ${chalk.green(latestVersion)}
    建议你创建项目前先更新版本.
    ${chalk.yellow("npm i -g zoos-mp-cli@latest")}
-----------------------------------------------------
-   运行 zoos -h 获得更多使用帮助.
    `;
  console.log(chalk.green(banner));
  hasNewVersion ? console.log(_nv_m) : showVersion && console.log(_v_m);
  return hasNewVersion;
};
