/*jshint esnext: true */

const fs = ß.fs;
const editor_dir = ß.CWD + '/editor';


function process_editor_data(lang, data) {

    const CHUNK_SEPERATOR = ß.language.CHUNK_SEPERATOR;
    const LANGUAGE_PREFIX = ß.language.LANGUAGE_PREFIX;

    // create chunks array
    var ca = data.split(CHUNK_SEPERATOR);
    // resulting string will be here
    var r = '';
    // iterate through the chunks
    for (var i = 0; i < ca.length; i++) {
        // if this chunk starts with a seperator-language-prefix it is a language specific chunk
        if (ca[i].charAt(0) === LANGUAGE_PREFIX) {
            // check if need to keep it, other
            if (ca[i].substring(0, LANGUAGE_PREFIX.length + lang.length + 1) === LANGUAGE_PREFIX + lang + ' ') {
                r += '<!----##' + ca[i].substring(0, LANGUAGE_PREFIX.length + 2) + ' ---->' + ca[i].substring(LANGUAGE_PREFIX.length + lang.length + 1, ca[i].length - 1) + '<!---- ##---->';
            } else {
                r += '<!----##' + ca[i] + '##---->';
            }
        } else {
            // if it is not a language specific chunk, we have to keep it
            r += ca[i];
        }
    }
    return r;
}


// for a given language, we need to process a given sourcefile
module.exports = function(lang, file) {

    //var f = ß.BPD + '/' + dir + '/' + file;
    //if (fs.existsSync(ß.CWD + '/' + dir + '/' + file)) f = ß.CWD + '/' + dir + '/' + file;

    fs.readFile(file, 'utf8', function(err, data) {
        if (err) return console.log(file, err);

        var filename = file.split('/').pop();
        var pathtag = '<!-- @path! ' + file.substring(ß.CWD.length) + ' ! -->\n';

        fs.writeFile(editor_dir + '/' + lang + '/' + filename, pathtag + process_editor_data(lang, data), function(err) {
            if (err) return console.log(err);
        });
    });
};

/*

function render_file_to_editor(lang, file) {
    fs.readFile(file, 'utf8', function(err, data) {
        if (err) return console.log(file, err);
        var filename = file.split('/').pop();
        var content = '<!-- @path! ' + file + ' ! -->\n' + data;
        fs.writeFile(editor_path + '/' + filename, content, function(err) {
            if (err) return console.log(err);
        });
    });
}


*/
