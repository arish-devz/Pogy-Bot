const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "convert",
  name: "ltretogal",
  aliases: ["ltretogal"],
  title: "L to Gal",
  description: "Convert liters to US gallons.",
  usage: ["ltretogal <value>"],
  examples: ["ltretogal 100"],
  group: "volume",
  suffix: " gal",
  compute: (v) => v * 0.264172
});
