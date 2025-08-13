// basic_prompt.js
// This is a placeholder for the basic prompt logic.

module.exports = function basicPrompt(input) {
  // TODO: Implement basic prompt logic
  return `Prompt received: ${input}`;
};
function toCamelCase(inputString) {
    return inputString
        .trim()
        .split(/[\s_-]+/)
        .filter(Boolean)
        .map((word, idx) =>
            idx === 0
                ? word.toLowerCase()
                : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join('');
}

module.exports.toCamelCase = toCamelCase;