Before you can pull down external code, your folder must be initialized as an npm project.

WITH command - npm init -y

What just happened: This command instantly creates a package.json file. Right now, it's just basic text metadata describing your project. It contains no dependencies yet.

Install the External Package (npm install)
Now, fetch the code from the remote registry:bash

WITH command - npm install date-fns

What just happened: Your directory layout transforms. Look inside your folder; npm has automatically added a node_modules/ folder (containing the physical downloaded code) and a package-lock.json file (a security snapshot pinning exact versions).

4. Create the Main Entry Application (app.js)Let's build an app that combines local files with remote registry files.