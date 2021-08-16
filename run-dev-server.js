const fs = require('fs');
const {join} = require('path');
const liveServer = require('live-server');

try {
    fs.mkdirSync(join(__dirname, 'dev'), {recursive: true});
} catch (error) {
    console.log('Error Occurred while creating directories (dev/assets/) for development. Below is the complete error.');
    console.error(error);
}

// Create symlink(s) to /webui-assets and copy /webui-assets/index.html to /dev
try {
    if (!fs.existsSync(join(__dirname, 'dev','assets'))) {
        fs.symlinkSync(join(__dirname, 'webui-assets'), join(__dirname, 'dev', 'assets'), 'junction');
    }
    if (!fs.existsSync(join(__dirname, 'dev', 'index.html'))) {
        // fs.symlinkSync(join(__dirname, 'webui-assets', 'index.html'), join(__dirname, 'dev', 'index.html'), 'file');
        fs.copyFileSync(join(__dirname, 'webui-assets', 'index.html'), join(__dirname, 'dev', 'index.html'));
    }
} catch (error) {
    console.log('Error Occurred while creating links (dev/assets/) for development. Below is the complete error.');
    console.error(error);
}

// Start a Web Development Server
const params = {
    port: 3001,
    host: 'localhost',
    root: './dev',
    open: true,
    logLevel: 2,
    file: 'index.html'
}

liveServer.start(params);
