/**
 * Function to calculate student scores.
 * Accepts object with number keys, for example { a: 1, b: 2 }.
 * Object must not be empty, object keys are positive numbers.
 *
 * @param scores object
 * @returns number
 * @throws Error
 */
export function sumScores(scores) {
    checkScores(scores);
    return Object.values(scores).reduce((t, n) => t + n);
}

function checkScores(scores) {
    if (scores && Object.keys(scores).length === 0 && Object.getPrototypeOf(scores) === Object.prototype) {
        throw new Error('Object cannot be empty');
    }
    for (const score of Object.values(scores)) {
        if (typeof score === 'string' || isNaN(score) || score === null) {
            throw new Error('Score must be number');
        }
    }
    for (const score of Object.values(scores)) {
        if (score < 0) {
            throw new Error('Score cannot be < 0');
        }
    }
}