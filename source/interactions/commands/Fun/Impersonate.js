const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "impersonate",
    "aliases": ["impersonate"],
    "title": "Impersonate",
    "description": "Impersonate a user.",
    "usage": ["impersonate <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** impersonates **{target}** flawlessly."],
    "cooldown": 2
});
