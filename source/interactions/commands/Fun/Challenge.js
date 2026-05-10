const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "challenge",
    "aliases": ["challenge"],
    "title": "Challenge",
    "description": "Challenge a user.",
    "usage": ["challenge <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** challenges **{target}** to a duel."],
    "cooldown": 2
});
