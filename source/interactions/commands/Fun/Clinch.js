const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "clinch",
    "aliases": ["clinch"],
    "title": "Clinch",
    "description": "Clinch a user.",
    "usage": ["clinch <user>"],
    "targetDescription": "The user to target.",
    "templates": ["**{actor}** clinches **{target}** tightly."],
    "cooldown": 2
});
