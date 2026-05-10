const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "ratio",
  name: "taxcalc",
  aliases: ["taxcalc"],
  title: "Tax Calc",
  description: "Calculate tax amount from value and rate.",
  usage: ["taxcalc <left> <right>"],
  examples: ["taxcalc 100 50"],
  group: "math",
  suffix: "",
  compute: (left, right) => (left * right) / 100
});
