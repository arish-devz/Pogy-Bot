const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "convert",
  name: "gbtomb",
  aliases: ["gbtomb"],
  title: "GB to MB",
  description: "Convert gigabytes to megabytes.",
  usage: ["gbtomb <value>"],
  examples: ["gbtomb 100"],
  group: "data",
  suffix: " MB",
  compute: (v) => v * 1024
});
