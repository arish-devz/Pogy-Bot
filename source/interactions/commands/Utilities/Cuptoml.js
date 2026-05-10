const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "convert",
  name: "cuptoml",
  aliases: ["cuptoml"],
  title: "Cup to mL",
  description: "Convert cups to milliliters.",
  usage: ["cuptoml <value>"],
  examples: ["cuptoml 100"],
  group: "volume",
  suffix: " mL",
  compute: (v) => v * 236.588
});
