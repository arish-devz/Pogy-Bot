const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "convert",
  name: "galtolitre",
  aliases: ["galtolitre"],
  title: "Gal to L",
  description: "Convert US gallons to liters.",
  usage: ["galtolitre <value>"],
  examples: ["galtolitre 100"],
  group: "volume",
  suffix: " L",
  compute: (v) => v * 3.785411784
});
