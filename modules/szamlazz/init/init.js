/*jshint esnext: true */

const config_file = ß.CWD + '/config/szamlazz.json';
const HOSTNAME = require('os').hostname();

const fs = ß.fs;

var config = {};

if (fs.existsSync(config_file)) {
    config = fs.readJsonSync(config_file);
} else {

    config = {};

    config.client = {
        user: 'tester@d250.hu',
        password: 'xxx',
        eInvoice: false, // create e-invoice. optional, default: false 
        passpharase: '', // passpharase for e-invoice. optional 
        requestInvoiceDownload: true, // downloads the issued pdf invoice. optional, default: false 
        downloadedInvoiceCount: 1, // optional, default: 1 
        responseVersion: 1 // optional, default: 1 
    };

    config.seller = { // everyting is optional 
        bank: {
            name: 'Test Bank <name>',
            accountNumber: '11111111-11111111-11111111',
        },
        email: {
            replyToAddress: 'info@' + HOSTNAME,
            subject: 'Invocie email subject',
            message: 'This is an email message',
        },
        issuerName: ''
    };

    fs.writeJsonSync(config_file, config);
}


ß.szamlazz_config = config;