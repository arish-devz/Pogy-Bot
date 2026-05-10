const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "backstab",
    "aliases": ["backstab"],
    "title": "Backstab",
    "description": "Backstab a user.",
    "usage": ["backstab <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** backstabs **{target}** when they least expected it."],
    "cooldown": 2
});
