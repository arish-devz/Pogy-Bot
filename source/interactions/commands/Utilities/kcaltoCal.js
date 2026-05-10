const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "convert",
  name: "kcaltocal",
  aliases: ["kcaltocal"],
  title: "kcal to Cal",
  description: "Convert kilocalories to calories.",
  usage: ["kcaltocal <value>"],
  examples: ["kcaltocal 100"],
  group: "energy",
  suffix: " cal",
  compute: (v) => v * 1000
});
