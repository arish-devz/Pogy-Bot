const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "devour",
    "aliases": ["devour"],
    "title": "Devour",
    "description": "Devour a user (not literally).",
    "usage": ["devour <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** devours **{target}**'s entire snack collection."],
    "cooldown": 2
});
