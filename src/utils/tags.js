const colorDict = {
  react: "#61DBFB",
  javascript: "#F0DB4F",
  html: "#E34F26",
  css: "#2965F1",
  nodejs: "#83CD29",
  expressjs: "#EAD84D",
  mongodb: "#4DB33D",
  python: "#F9D75E",
  sql: "#F29111",
  c: "#A8B9CC",
  "c++": "#00599C",
  java: "#007396",
  heroku: "#430098",
  scss: "#CC6699",
  networking: "#265DD1",
  multithreading: "#FF9900",
  swift: "#EDA050",
  ios: "#EB445A",
  icloud: "#007AFF",
  ruby: "#CC342D",
};

export const getTagColor = (tagName) => {
  return colorDict[tagName.toLowerCase()];
};
