const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

const paths = ['./client', './api'];

paths.forEach((dirPath) => {
    // Check if the directory exists
    fs.access(dirPath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error(`Directory ${dirPath} does not exist.`);
            return;
        }

        console.log(`Directory ${dirPath} exists. Running npm start in a new terminal...`);

        // Run npm start in a new Command Prompt window
        exec(`start cmd.exe /K "cd ${dirPath} && npm start"`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing npm start in ${dirPath}: ${error.message}`);
                return;
            }

            if (stderr) {
                console.error(`stderr in ${dirPath}: ${stderr}`);
                return;
            }

            console.log(`stdout in ${dirPath}: ${stdout}`);
        });
    });
});
