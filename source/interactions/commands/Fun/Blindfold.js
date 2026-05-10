const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "blindfold",
    "aliases": ["blindfold"],
    "title": "Blindfold",
    "description": "Blindfold a user.",
    "usage": ["blindfold <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** puts a blindfold on **{target}**."],
    "cooldown": 2
});
