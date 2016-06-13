'use strict';


casper.test.begin('Music market test', function(test) {
    casper.start('http://lagfolk.de/de/musikmarkt');

    casper.then(function() {

        test.assertTitle('Musikmarkt - LAG Folk');
    });
    casper.then(function() {
        test.assertUrlMatch(/^http:\/\/lagfolk\.de\/de\/musikmarkt$/);
    });
    casper.wait(1000);
    casper.then(function() {
        this.captureSelector('report/screenshot/musikmarkt.png', 'html');
    });

    casper.run(function() {test.done();});
});