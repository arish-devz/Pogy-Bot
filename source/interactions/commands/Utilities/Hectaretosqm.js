const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "convert",
  name: "hectaretosqm",
  aliases: ["hectaretosqm"],
  title: "Hectare to Sq M",
  description: "Convert hectares to square meters.",
  usage: ["hectaretosqm <value>"],
  examples: ["hectaretosqm 100"],
  group: "area",
  suffix: " m²",
  compute: (v) => v * 10000
});
