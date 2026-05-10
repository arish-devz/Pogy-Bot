const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "flutter",
    "aliases": ["flutter"],
    "title": "Flutter",
    "description": "Flutter at a user.",
    "usage": ["flutter <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** flutters their eyes at **{target}**."],
    "cooldown": 2
});
