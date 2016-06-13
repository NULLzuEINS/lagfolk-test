'use strict';


casper.test.begin('Folkpost test', function(test) {
    casper.start('http://lagfolk.de/de/folkpost');

    casper.then(function() {

        test.assertTitle('Folkpost - LAG Folk');
    });
    casper.then(function() {
        test.assertUrlMatch(/^http:\/\/lagfolk\.de\/de\/folkpost$/);
    });
    casper.wait(1000);
    casper.then(function() {
        this.captureSelector('report/screenshot/folkpost.png', 'html');
    });

    casper.run(function() {test.done();});
});