const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "hypnotize",
    "aliases": ["hypnotize"],
    "title": "Hypnotize",
    "description": "Hypnotize a user.",
    "usage": ["hypnotize <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** hypnotizes **{target}** with a swinging watch."],
    "cooldown": 2
});
