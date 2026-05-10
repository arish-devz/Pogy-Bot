const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "convert",
  name: "mjtokwh",
  aliases: ["mjtokwh"],
  title: "MJ to kWh",
  description: "Convert megajoules to kilowatt-hours.",
  usage: ["mjtokwh <value>"],
  examples: ["mjtokwh 100"],
  group: "energy",
  suffix: " kWh",
  compute: (v) => v / 3.6
});
