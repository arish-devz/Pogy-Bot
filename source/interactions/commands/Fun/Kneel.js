const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "kneel",
    "aliases": ["kneel"],
    "title": "Kneel",
    "description": "Kneel before a user.",
    "usage": ["kneel <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** kneels before **{target}** in total defeat."],
    "cooldown": 2
});
