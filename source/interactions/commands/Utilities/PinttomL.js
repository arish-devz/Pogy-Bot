const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "convert",
  name: "pinttom",
  aliases: ["pinttom"],
  title: "Pint to mL",
  description: "Convert pints to milliliters.",
  usage: ["pinttom <value>"],
  examples: ["pinttom 100"],
  group: "volume",
  suffix: " mL",
  compute: (v) => v * 473.176473
});
