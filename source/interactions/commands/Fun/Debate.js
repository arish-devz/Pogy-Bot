const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "debate",
    "aliases": ["debate"],
    "title": "Debate",
    "description": "Debate a user.",
    "usage": ["debate <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** debates **{target}** into the ground."],
    "cooldown": 2
});
