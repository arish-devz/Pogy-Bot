const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "outsmart",
    "aliases": ["outsmart"],
    "title": "Outsmart",
    "description": "Outsmart a user.",
    "usage": ["outsmart <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** outsmarts **{target}** with a brilliant move."],
    "cooldown": 2
});
