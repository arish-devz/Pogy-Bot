const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "confront",
    "aliases": ["confront"],
    "title": "Confront",
    "description": "Confront a user.",
    "usage": ["confront <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** confronts **{target}** head-on."],
    "cooldown": 2
});
