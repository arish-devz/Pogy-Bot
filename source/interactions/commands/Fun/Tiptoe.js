const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "tiptoe",
    "aliases": ["tiptoe"],
    "title": "Tiptoe",
    "description": "Tiptoe around a user.",
    "usage": ["tiptoe <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** tiptoes dramatically around **{target}**."],
    "cooldown": 2
});
