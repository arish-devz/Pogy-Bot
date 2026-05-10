const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "wobble",
    "aliases": ["wobble"],
    "title": "Wobble",
    "description": "Wobble at a user.",
    "usage": ["wobble <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** wobbles unsteadily in front of **{target}**."],
    "cooldown": 2
});
