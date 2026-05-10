const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "convert",
  name: "mltopint",
  aliases: ["mltopint"],
  title: "mL to Pint",
  description: "Convert milliliters to pints.",
  usage: ["mltopint <value>"],
  examples: ["mltopint 100"],
  group: "volume",
  suffix: " pt",
  compute: (v) => v / 473.176473
});
