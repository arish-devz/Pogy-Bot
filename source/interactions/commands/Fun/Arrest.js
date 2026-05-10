const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "arrest",
    "aliases": ["arrest"],
    "title": "Arrest",
    "description": "Arrest a user.",
    "usage": ["arrest <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** arrests **{target}** on the spot."],
    "cooldown": 2
});
