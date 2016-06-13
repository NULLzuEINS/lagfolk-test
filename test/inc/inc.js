'use strict';

var x = require('casper').selectXPath;
casper.options.viewportSize = {width: 1024, height: 768};
casper.on('page.error', function (msg, trace) {
    this.echo('Error: ' + msg, 'ERROR');
    for (var i = 0; i < trace.length; i += 1) {
        var step = trace[i];
        this.echo('   ' + step.file + ' (line ' + step.line + ')', 'ERROR');
    }
});
