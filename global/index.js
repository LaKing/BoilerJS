/*jshint esnext: true */

// @DOC ## ßoilerplate/global/index.js
// @DOC Here we define the ß global variable
// @DOC You can use your project in DEBUG mode instead of production mode
// @DOC ß.CWD stands for the Current Work Directory and ß.BPD is the Boilerplate Directory
// @DOC Importing, loading and init modules, files that required

if (!global.ß) global.ß = {};
if (!ß.cli_commands) ß.cli_commands = [];
if (!ß.DEBUG) {
    ß.DEBUG = false;
    if (process.argv[2]) {
        ß.DEBUG = true;
        console.log('- ß.DEBUG');
    }
}
// constants
if (!ß.CWD) ß.CWD = process.cwd();
if (!ß.BPD) ß.BPD = ß.CWD + '/boilerplate';

if (!ß.HOSTNAME) ß.HOSTNAME = require('os').hostname();

require("./node_modules.js");
require("./now.js");
require("./pid.js");

require("./lablib.js");
require("./codepad.js");
require("./process.js");

require("./bp.js");
require("./frontendlib.js");
require("./modules.js");

require("./lib.js");
require("./load.js");
require("./hook.js");


ß.load('global');

ß.init_modules_libs(ß.modules);

//require("./user_model.js");

if (ß) console.log("- ß has", Object.keys(ß).length, 'keys defined');
else console.log("! ß is undefined");