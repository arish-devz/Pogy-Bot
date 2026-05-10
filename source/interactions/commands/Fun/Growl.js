const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "growl",
    "aliases": ["growl"],
    "title": "Growl",
    "description": "Growl at a user.",
    "usage": ["growl <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** growls menacingly at **{target}**."],
    "cooldown": 2
});
