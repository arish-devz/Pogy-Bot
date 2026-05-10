const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "convert",
  name: "gbpstombps",
  aliases: ["gbpstombps"],
  title: "Gbps to Mbps",
  description: "Convert gigabits per second to megabits per second.",
  usage: ["gbpstombps <value>"],
  examples: ["gbpstombps 100"],
  group: "data",
  suffix: " Mbps",
  compute: (v) => v * 1000
});
