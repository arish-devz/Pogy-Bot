const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "convert",
  name: "mbpstogbps",
  aliases: ["mbpstogbps"],
  title: "Mbps to Gbps",
  description: "Convert megabits per second to gigabits per second.",
  usage: ["mbpstogbps <value>"],
  examples: ["mbpstogbps 100"],
  group: "data",
  suffix: " Gbps",
  compute: (v) => v / 1000
});
