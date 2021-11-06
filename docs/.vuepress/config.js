const fs = require("fs");
const path = require("path");

module.exports = {
  lang: "en-US",
  title: "FedPy.Docs",
  description: "Documentation for FedPy",
  head: [["link", { rel: "icon", href: "/assets/FedPy_logo.png" }]],

  themeConfig: {
    navbar: [
      {
        text: "Getting Started",
        link: "/",
      },
      {
        text: "SOMA",
        link: "/SOMA/",
      },
      {
        text: "TOMO",
        link: "/TOMO/",
      },
      {
        text: "FRED",
        link: "/FRED/",
      },
      {
        text: "Payment Systems",
        link: "/Payment_Systems/",
      },
      {
        text: "Fed Publications",
        link: "/publications/",
      },
    ],
    repo: "https://github.com/antonio-hickey/FedPy",

    docsRepo: "https://github.com/antonio-hickey/FedPy.Docs",
    docsBranch: "gh-pages",
    docsDir: "docs",
    sidebar: {
      "/": getSideBar("/", "Getting Started"),
      "/SOMA/": getSideBar("SOMA", "SOMA"),
      "/TOMO/": getSideBar("TOMO", "TOMO"),
      "/FRED/": getSideBar("FRED", "FRED"),
      "/Payment_Systems/": getSideBar("Payment_Systems", "Payment Systems"),
      "/publications/": getSideBar("publications", "Fed Publications"),
    },
  },
};

function getSideBar(folder, title, include_readme) {
  const extension = [".md"];

  const files = fs
    .readdirSync(path.join(`${__dirname}/../${folder}`))
    .filter(
      (file) =>
        file.toLocaleLowerCase() != "readme.md" &&
        fs.statSync(path.join(`${__dirname}/../${folder}`, file)).isFile() &&
        extension.includes(path.extname(file))
    );

  if (include_readme) {
    files.unshift("README.md");
  }

  return [{ text: title, children: files }];
}
