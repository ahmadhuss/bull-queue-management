/**
 * The asynchronous sleep function
 * @param ms {number} - The number of milliseconds
 * @returns {Promise<unknown>} - Return the resolved promise
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = sleep;