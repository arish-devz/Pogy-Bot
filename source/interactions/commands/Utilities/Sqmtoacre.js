const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "convert",
  name: "sqmtoacre",
  aliases: ["sqmtoacre"],
  title: "Sq M to Acre",
  description: "Convert square meters to acres.",
  usage: ["sqmtoacre <value>"],
  examples: ["sqmtoacre 100"],
  group: "area",
  suffix: " acres",
  compute: (v) => v / 4046.856422
});
