const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "flick",
    "aliases": ["flick"],
    "title": "Flick",
    "description": "Flick a user.",
    "usage": ["flick <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** flicks **{target}** on the forehead."],
    "cooldown": 2
});
