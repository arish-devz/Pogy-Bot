const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "charm",
    "aliases": ["charm"],
    "title": "Charm",
    "description": "Charm a user.",
    "usage": ["charm <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** charms **{target}** with their irresistible personality."],
    "cooldown": 2
});
