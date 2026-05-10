const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "ratio",
  name: "efficiencycalc",
  aliases: ["efficiencycalc"],
  title: "Efficiency Calc",
  description: "Calculate efficiency percentage.",
  usage: ["efficiencycalc <left> <right>"],
  examples: ["efficiencycalc 100 50"],
  group: "math",
  suffix: "%",
  compute: (left, right) => (left / right) * 100
});
