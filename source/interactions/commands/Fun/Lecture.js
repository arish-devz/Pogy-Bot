const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "lecture",
    "aliases": ["lecture"],
    "title": "Lecture",
    "description": "Lecture a user.",
    "usage": ["lecture <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** lectures **{target}** for 3 hours straight."],
    "cooldown": 2
});
