const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "jawdrop",
    "aliases": ["jawdrop"],
    "title": "Jaw Drop",
    "description": "Jaw-drop at a user.",
    "usage": ["jawdrop <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}**'s jaw drops at the sight of **{target}**."],
    "cooldown": 2
});
