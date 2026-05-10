const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "gatekeep",
    "aliases": ["gatekeep"],
    "title": "Gatekeep",
    "description": "Gatekeep from a user.",
    "usage": ["gatekeep <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** gatekeeps everything from **{target}**."],
    "cooldown": 2
});
