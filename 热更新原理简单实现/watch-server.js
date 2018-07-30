let fs = require('fs');
let url = require('url');
let http = require('http');
let path = require('path');
let express = require('express');
let app = express();
let server = http.createServer(app);
let io = require('socket.io').listen(server);
let root = __dirname;


app.use((req,res,next) => { 
    var file = url.parse(req.url).pathname; 
    var mode = 'stylesheet';
    if (file[file.length - 1] == '/') {
        file += 'index.html';
        mode = 'reload';
    }
    createWatcher(file, mode);
    next();
})

app.use(express.static(root));
let watchers = {};

function createWatcher(file, event) {
    let absolute = path.join(root, file);
    if (watchers[absolute]) {
        return;
    }
    fs.watchFile(absolute, function(curr, prev) {
        if (curr.mtime != prev.mtime) {
            io.sockets.emit(event, file);
        }
    });
    watchers[absolute] = true;
}

server.listen(8080);