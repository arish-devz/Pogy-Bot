const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "heal",
    "aliases": ["heal"],
    "title": "Heal",
    "description": "Heal a user.",
    "usage": ["heal <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** heals **{target}** with holy power."],
    "cooldown": 2
});
