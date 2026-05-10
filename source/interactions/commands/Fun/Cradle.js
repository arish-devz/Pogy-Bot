const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "cradle",
    "aliases": ["cradle"],
    "title": "Cradle",
    "description": "Cradle a user.",
    "usage": ["cradle <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** cradles **{target}** in their arms."],
    "cooldown": 2
});
