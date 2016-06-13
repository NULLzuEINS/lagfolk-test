'use strict';


casper.test.begin('LAGFolk test', function(test) {
    casper.start('http://lagfolk.de/de/lagfolk');

    casper.then(function() {

        test.assertTitle('Vorstellung - LAG Folk');
    });
    casper.then(function() {
        test.assertUrlMatch(/^http:\/\/lagfolk\.de\/de\/lagfolk$/);
    });
    casper.wait(1000);
    casper.then(function() {
        this.captureSelector('report/screenshot/lagfolk.png', 'html');
    });

    casper.run(function() {test.done();});
});