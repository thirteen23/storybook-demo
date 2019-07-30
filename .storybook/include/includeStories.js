const path = require("path");

const finishedStories = require("./finished.json");
const finishedPaths = finishedStories.map(obj => obj.path);

module.exports = {
  All: (path) => true,
  Finished: (path) => finishedPaths.includes(path.replace("./", "")),
}
