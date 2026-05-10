const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "brag",
    "aliases": ["brag"],
    "title": "Brag",
    "description": "Brag at a user.",
    "usage": ["brag <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** brags endlessly in front of **{target}**."],
    "cooldown": 2
});
