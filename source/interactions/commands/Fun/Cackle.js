const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "cackle",
    "aliases": ["cackle"],
    "title": "Cackle",
    "description": "Cackle at a user.",
    "usage": ["cackle <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** cackles maniacally at **{target}**."],
    "cooldown": 2
});
