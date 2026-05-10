const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "convert",
  name: "kwhtomj",
  aliases: ["kwhtomj"],
  title: "kWh to MJ",
  description: "Convert kilowatt-hours to megajoules.",
  usage: ["kwhtomj <value>"],
  examples: ["kwhtomj 100"],
  group: "energy",
  suffix: " MJ",
  compute: (v) => v * 3.6
});
