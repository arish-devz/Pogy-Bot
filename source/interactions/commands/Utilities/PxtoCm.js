const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "convert",
  name: "pxtocm",
  aliases: ["pxtocm"],
  title: "Px to Cm",
  description: "Convert pixels to centimeters.",
  usage: ["pxtocm <value>"],
  examples: ["pxtocm 100"],
  group: "length",
  suffix: " cm",
  compute: (v) => v * 0.026458333
});
