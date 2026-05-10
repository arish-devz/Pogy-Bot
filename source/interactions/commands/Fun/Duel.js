const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "duel",
    "aliases": ["duel"],
    "title": "Duel",
    "description": "Duel a user.",
    "usage": ["duel <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** challenges **{target}** to an epic duel."],
    "cooldown": 2
});
