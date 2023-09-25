var chokidar = require("chokidar");
const { exec } = require('child_process')
const fs = require('fs')

var watcher = chokidar.watch('./src/', {
    ignored: /[\/\\]\./,
    persistent: true
});

watcher.on('ready', function () {
    console.log("ready watching...");
    exec("python -m http.server")

    watcher.on('change', function (path) {
        exec('minify ./src/Rngular.js', { encoding: 'utf-8' }, (err, stdout, stderr) => {
            if (err) {
                console.log(`stderr: ${stderr}`)
                return
            }
            const minifyCode = stdout;

            fs.writeFile('./dist/Rngular.min.js', minifyCode, { encoding: 'utf-8' }, function () {
                console.log("minify passed")
            });
        });
    });
});
