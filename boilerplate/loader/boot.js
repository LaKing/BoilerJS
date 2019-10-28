// We already have a module list, we can start loading modules.
// ß.boot() will run the loader tasks

// TODO - where should we try and catch, where should we leave free flow?

ß.boot = function() {
  	ß.debug('- Booting the boilerplate modules.');
    try {
        // @DOC The `/global` folder in a module should contain simple scripts to attach values to the global `ß` namespace.
        ß.load("global");

        // @DOC After the global `ß` values are set, libs and hooks are loaded.
        ß.load_lib(ß.modules);
        ß.load_hooks();
    } catch (err) {
        đ(err);
        console.log("ERROR, EXITING due to a failure in the boilerplate bootup initialization");
        process.exit(95);
    }
};
