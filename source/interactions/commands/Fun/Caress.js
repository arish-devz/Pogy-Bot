const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "caress",
    "aliases": ["caress"],
    "title": "Caress",
    "description": "Caress a user.",
    "usage": ["caress <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** gently caresses **{target}**'s cheek."],
    "cooldown": 2
});
