const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "adopt",
    "aliases": ["adopt"],
    "title": "Adopt",
    "description": "Adopt a user.",
    "usage": ["adopt <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** adopts **{target}** into their life."],
    "cooldown": 2
});
