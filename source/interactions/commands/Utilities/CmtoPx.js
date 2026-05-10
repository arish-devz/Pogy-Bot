const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "convert",
  name: "cmtopx",
  aliases: ["cmtopx"],
  title: "Cm to Px",
  description: "Convert centimeters to pixels.",
  usage: ["cmtopx <value>"],
  examples: ["cmtopx 100"],
  group: "length",
  suffix: " px",
  compute: (v) => v * 37.795275591
});
