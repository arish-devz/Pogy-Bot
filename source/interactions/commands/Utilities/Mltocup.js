const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "convert",
  name: "mltocup",
  aliases: ["mltocup"],
  title: "mL to Cup",
  description: "Convert milliliters to cups.",
  usage: ["mltocup <value>"],
  examples: ["mltocup 100"],
  group: "volume",
  suffix: " cups",
  compute: (v) => v / 236.588
});
