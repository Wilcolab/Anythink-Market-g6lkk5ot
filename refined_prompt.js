/**
 * Converts a given string to camelCase.
 *
 * The function removes all non-alphanumeric characters except for spaces, underscores, hyphens, dots, and slashes,
 * then splits the string into words using these separators. The first word is lowercased, and each subsequent word
 * is capitalized and concatenated to form a camelCase string.
 *
 * @param {string} input - The input string to convert.
 * @returns {string} The camelCase version of the input string.
 * @throws {TypeError} Throws if the input is not a string.
 *
 * @example
 * toCamelCase('hello_world-example.text'); // 'helloWorldExampleText'
 * toCamelCase('  Foo Bar '); // 'fooBar'
 */
 
/**
 * Converts a given string to dot.case.
 *
 * The function removes all non-alphanumeric characters except for spaces, underscores, hyphens, dots, and slashes,
 * then splits the string into words using these separators. All words are lowercased and joined with dots.
 *
 * @param {string} input - The input string to convert.
 * @returns {string} The dot.case version of the input string.
 * @throws {TypeError} Throws if the input is not a string.
 *
 * @example
 * toDotCase('hello_world-example.text'); // 'hello.world.example.text'
 * toDotCase('  Foo Bar '); // 'foo.bar'
 */
// refined_prompt.js
// This is a placeholder for the refined prompt logic.

module.exports = function refinedPrompt(context, input) {
  // TODO: Implement refined prompt logic
  return `Context: ${JSON.stringify(context)}, Input: ${input}`;
};
function toCamelCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Remove non-alphanumeric except separators, then split
    const words = input
        .trim()
        .replace(/[^a-zA-Z0-9\s_\-./]+/g, '') // Remove unwanted chars
        .split(/[\s_\-./]+/) // Split on separators
        .filter(Boolean);

    if (words.length === 0) return '';

    return words
        .map((word, idx) => {
            const lower = word.toLowerCase();
            if (idx === 0) return lower;
            return lower.charAt(0).toUpperCase() + lower.slice(1);
        })
        .join('');
}

module.exports.toCamelCase = toCamelCase;

function toDotCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Remove non-alphanumeric except separators, then split
    const words = input
        .trim()
        .replace(/[^a-zA-Z0-9\s_\-./]+/g, '') // Remove unwanted chars
        .split(/[\s_\-./]+/) // Split on separators
        .filter(Boolean);

    return words.map(word => word.toLowerCase()).join('.');
}

module.exports.toDotCase = toDotCase;