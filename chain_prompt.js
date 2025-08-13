// toKebabCase.js

/**
 * Converts a string to kebab-case.
 *
 * - Converts spaces, underscores, dashes, periods, slashes, apostrophes, emoji, and most punctuation to a single hyphen.
 * - Trims leading/trailing separators.
 * - Collapses multiple separators.
 * - Removes non-alphanumeric characters except hyphens.
 * - Normalizes Unicode (NFKD) and strips diacritics.
 * - Splits camelCase, PascalCase, and acronym boundaries.
 * - Keeps digits intact.
 *
 * @param {string} input - The string to convert.
 * @returns {string} The kebab-case string.
 * @throws {TypeError} If input is not a string.
 *
 * @example
 * toKebabCase("Hello World"); // "hello-world"
 * toKebabCase("XMLHttpRequest"); // "xml-http-request"
 * toKebabCase("mañana Café"); // "manana-cafe"
 * toKebabCase("rock'n'roll"); // "rock-n-roll"
 * toKebabCase("B2B Deals"); // "b2b-deals"
 * toKebabCase("__init__"); // "init"
 * toKebabCase(""); // ""
 *
 * Edge cases:
 * - Non-string input throws TypeError.
 * - Emoji and apostrophes are treated as separators.
 */
function toKebabCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('toKebabCase: input must be a string');
    }
    if (input.length === 0) return '';

    // Normalize Unicode and strip diacritics
    let str = input.normalize('NFKD').replace(/[\u0300-\u036f]/g, '');

    // Replace apostrophes, emoji, and most punctuation (except hyphen) with separator
    str = str.replace(/['’‘`´"“”\p{Emoji_Presentation}\p{Emoji}\p{So}]/gu, '-');

    // Replace separators (space, _, -, ., /, etc.) and control chars with hyphen
    str = str.replace(/[\s_\-./\\|,:;!?()[\]{}<>~@#$%^&*=+]+/g, '-');

    // Split camelCase, PascalCase, and acronym boundaries
    // 1. fooBar -> foo-Bar
    // 2. XMLHTTPRequest -> XML-HTTP-Request
    // 3. parseURLToID -> parse-URL-To-ID
    str = str.replace(/([a-z\d])([A-Z])/g, '$1-$2'); // fooBar -> foo-Bar, 99Bottles -> 99-Bottles
    str = str.replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1-$2'); // XMLHTTPRequest -> XML-HTTP-Request

    // Remove any character that is not alphanumeric or hyphen
    str = str.replace(/[^a-zA-Z0-9-]+/g, '-');

    // Collapse multiple hyphens
    str = str.replace(/-+/g, '-');

    // Trim leading/trailing hyphens
    str = str.replace(/^-+|-+$/g, '');

    // Lowercase
    return str.toLowerCase();
}

export default toKebabCase;
export { toKebabCase };