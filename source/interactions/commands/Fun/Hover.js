const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "hover",
    "aliases": ["hover"],
    "title": "Hover",
    "description": "Hover around a user.",
    "usage": ["hover <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** hovers suspiciously around **{target}**."],
    "cooldown": 2
});
