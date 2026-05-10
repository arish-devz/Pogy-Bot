const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "awaken",
    "aliases": ["awaken"],
    "title": "Awaken",
    "description": "Awaken a user.",
    "usage": ["awaken <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** awakens **{target}** from their slumber."],
    "cooldown": 2
});
