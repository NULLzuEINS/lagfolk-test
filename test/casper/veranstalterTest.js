'use strict';


casper.test.begin('Veranstalter test', function(test) {
    casper.start('http://lagfolk.de/de/veranstalter');

    casper.then(function() {

        test.assertTitle('Veranstalter - LAG Folk');
    });
    casper.then(function() {
        test.assertUrlMatch(/^http:\/\/lagfolk\.de\/de\/veranstalter$/);
    });
    casper.wait(1000);
    casper.then(function() {
        this.captureSelector('report/screenshot/veranstalter.png', 'html');
    });

    casper.run(function() {test.done();});
});