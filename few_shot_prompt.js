// few_shot_prompt.js
// This is a placeholder for the few-shot prompt logic.

module.exports = function fewShotPrompt(examples, input) {
  // TODO: Implement few-shot prompt logic
  return `Examples: ${JSON.stringify(examples)}, Input: ${input}`;
};
function toCamelCase(str) {
    return str
        .replace(/[_\-\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
        .replace(/^[A-Z]/, c => c.toLowerCase());
}

module.exports.toCamelCase = toCamelCase;