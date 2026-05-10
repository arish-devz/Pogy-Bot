const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "leech",
    "aliases": ["leech"],
    "title": "Leech",
    "description": "Leech off a user.",
    "usage": ["leech <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** leeches off **{target}**'s energy."],
    "cooldown": 2
});
