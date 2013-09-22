'use strict';

exports.description = 'Create Amkit2 module.';

exports.notes = '';

exports.warnOn = '*';

exports.template = function(grunt, init, done) {

  init.process({type: 'amkit2'}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('version', '1.0.0'),
    init.prompt('parent', '../../parent')
  ], function(err, props) {

    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // All done!
    done();
  });
};
