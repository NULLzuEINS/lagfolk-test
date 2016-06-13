'use strict';


casper.test.begin('Termine test', function(test) {
    casper.start('http://lagfolk.de/de/termine');

    casper.then(function() {

        test.assertTitle('Termine - LAG Folk');
    });
    casper.then(function() {
        test.assertUrlMatch(/^http:\/\/lagfolk\.de\/de\/termine$/);
    });
    casper.wait(1000);
    casper.then(function() {
        this.captureSelector('report/screenshot/termine.png', 'html');
    });

    casper.run(function() {test.done();});
});