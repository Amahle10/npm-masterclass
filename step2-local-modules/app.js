// step2-local-modules/app.js
// Crucial: The relative path './' tells Node to look locally inside this folder!
const { systemLog } = require('./logger.js'); 

console.log("--- STEP 2: Local Modularisation ---");

const executionTime = new Date();

// Passing our native date through our custom local module function
const formattedOutput = systemLog(`Application executed at: ${executionTime}`);

console.log(formattedOutput);
