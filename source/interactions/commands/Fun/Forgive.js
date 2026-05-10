const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "forgive",
    "aliases": ["forgive"],
    "title": "Forgive",
    "description": "Forgive a user.",
    "usage": ["forgive <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** forgives **{target}**... this time."],
    "cooldown": 2
});
