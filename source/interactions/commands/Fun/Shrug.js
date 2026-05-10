const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "shrug",
    "aliases": ["shrug"],
    "title": "Shrug",
    "description": "Shrug at a user.",
    "usage": ["shrug <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** just shrugs at **{target}**'s nonsense."],
    "cooldown": 2
});
