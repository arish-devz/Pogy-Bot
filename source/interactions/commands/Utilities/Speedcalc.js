const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "ratio",
  name: "speedcalc",
  aliases: ["speedcalc"],
  title: "Speed Calc",
  description: "Calculate average speed from distance and time.",
  usage: ["speedcalc <left> <right>"],
  examples: ["speedcalc 100 50"],
  group: "math",
  suffix: " units/hr",
  compute: (left, right) => left / right
});
