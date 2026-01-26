export default {
  extends: "lighthouse:default",
  settings: {
    onlyCategories: ["performance"],
    onlyAudits: ["first-meaningful-paint", "speed-index", "interactive"],
  },
};
