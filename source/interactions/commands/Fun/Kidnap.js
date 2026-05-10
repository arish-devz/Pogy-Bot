const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "kidnap",
    "aliases": ["kidnap"],
    "title": "Kidnap",
    "description": "Kidnap a user.",
    "usage": ["kidnap <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** kidnaps **{target}** for a surprise adventure."],
    "cooldown": 2
});
