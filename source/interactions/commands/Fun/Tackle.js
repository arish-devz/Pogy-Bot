const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "tackle",
    "aliases": ["tackle"],
    "title": "Tackle",
    "description": "Tackle a user.",
    "usage": ["tackle <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** tackles **{target}** to the ground."],
    "cooldown": 2
});
