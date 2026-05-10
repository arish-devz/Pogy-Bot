const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "convert",
  name: "sqmtohectare",
  aliases: ["sqmtohectare"],
  title: "Sq M to Hectare",
  description: "Convert square meters to hectares.",
  usage: ["sqmtohectare <value>"],
  examples: ["sqmtohectare 100"],
  group: "area",
  suffix: " ha",
  compute: (v) => v / 10000
});
