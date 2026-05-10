const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "elbow",
    "aliases": ["elbow"],
    "title": "Elbow",
    "description": "Elbow a user.",
    "usage": ["elbow <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** gives **{target}** a sharp elbow."],
    "cooldown": 2
});
