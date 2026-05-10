const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "convert",
  name: "fahrtorank",
  aliases: ["fahrtorank"],
  title: "F to Rankine",
  description: "Convert Fahrenheit to Rankine.",
  usage: ["fahrtorank <value>"],
  examples: ["fahrtorank 100"],
  group: "temperature",
  suffix: " °R",
  compute: (v) => v + 459.67
});
