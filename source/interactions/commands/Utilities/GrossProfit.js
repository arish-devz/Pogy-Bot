const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "ratio",
  name: "grossprofitcalc",
  aliases: ["grossprofitcalc"],
  title: "Gross Profit",
  description: "Calculate gross profit margin.",
  usage: ["grossprofitcalc <left> <right>"],
  examples: ["grossprofitcalc 100 50"],
  group: "math",
  suffix: "%",
  compute: (left, right) => ((left - right) / left) * 100
});
