const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "convert",
  name: "caltokcal",
  aliases: ["caltokcal"],
  title: "Cal to kcal",
  description: "Convert calories to kilocalories.",
  usage: ["caltokcal <value>"],
  examples: ["caltokcal 100"],
  group: "energy",
  suffix: " kcal",
  compute: (v) => v / 1000
});
