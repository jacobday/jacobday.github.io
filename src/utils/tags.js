const colorDict = {
  react: "#61DBFB",
  javascript: "#F0DB4F",
  html: "#E34F26",
  css: "#2965F1",
  node: "#83CD29",
  expressjs: "#83CD29",
  mongodb: "#4DB33D",
  python: "#3776AB",
  sql: "#F29111",
  c: "#A8B9CC",
  "c++": "#00599C",
  java: "#007396",
  heroku: "#430098",
  scss: "#CC6699",
};

export const getTagColor = (tagName) => {
  return colorDict[tagName.toLowerCase()];
};
