const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "jab",
    "aliases": ["jab"],
    "title": "Jab",
    "description": "Jab a user.",
    "usage": ["jab <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** jabs **{target}** with a playful punch."],
    "cooldown": 2
});
