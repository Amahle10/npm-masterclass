// step3-external-modules/app.js
const { systemLog } = require('./logger.js'); // Local module (needs explicit './' path)
const { format } = require('date-fns');        // Remote module (NO './', Node looks straight in node_modules)

console.log("--- STEP 3: Local + Remote Modules ---");

// 1. Use the remote registry module to format the date beautifully
const prettyDate = format(new Date(), 'EEEE, MMMM do, yyyy');

// 2. Pass that result through your local module tool
const finalResult = systemLog(`Beautiful Date: ${prettyDate}`);

console.log(finalResult);
