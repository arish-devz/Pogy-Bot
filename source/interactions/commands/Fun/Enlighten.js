const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "enlighten",
    "aliases": ["enlighten"],
    "title": "Enlighten",
    "description": "Enlighten a user.",
    "usage": ["enlighten <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** enlightens **{target}** with ancient wisdom."],
    "cooldown": 2
});
