const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "ambush",
    "aliases": ["ambush"],
    "title": "Ambush",
    "description": "Ambush a user.",
    "usage": ["ambush <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** ambushes **{target}** from behind a corner."],
    "cooldown": 2
});
