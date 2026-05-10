const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "coddle",
    "aliases": ["coddle"],
    "title": "Coddle",
    "description": "Coddle a user.",
    "usage": ["coddle <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** coddles **{target}** like a baby."],
    "cooldown": 2
});
