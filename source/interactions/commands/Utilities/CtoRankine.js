const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "convert",
  name: "celtorank",
  aliases: ["celtorank"],
  title: "C to Rankine",
  description: "Convert Celsius to Rankine.",
  usage: ["celtorank <value>"],
  examples: ["celtorank 100"],
  group: "temperature",
  suffix: " °R",
  compute: (v) => (v + 273.15) * 9/5
});
