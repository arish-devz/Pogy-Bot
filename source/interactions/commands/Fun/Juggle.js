const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "juggle",
    "aliases": ["juggle"],
    "title": "Juggle",
    "description": "Juggle a user.",
    "usage": ["juggle <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** juggles **{target}** as if they were a ball."],
    "cooldown": 2
});
