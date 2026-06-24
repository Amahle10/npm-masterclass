// step2-local-modules/logger.js
function systemLog(message) {
    return `[SYSTEM LOG]: ${message}`;
}

// Explicitly exporting our function so other local files can see it
module.exports = { systemLog };
