/**
 * Converts a given string to uppercase.
 *
 * This function takes a string as input and returns a new string with all 
 * characters converted to uppercase.
 * 
 * It ensures the original string remains unchanged, as the transformation 
 * creates a new string.
 *
 * @export
 * @param {string} arg The input string to be converted to uppercase.
 * @return {string} A new string where all characters are in uppercase.
 */
export function toUpperCase(arg: string): string {
    return arg.toUpperCase();
}