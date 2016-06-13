'use strict';


casper.test.begin('Home page test', function(test) {
    casper.start('http://lagfolk.de/');
    casper.then(function() {
        test.assertTitle('Landesarbeitsgemeinschaft Folk Schleswig Holstein - LAG Folk');
    });
    casper.then(function() {
        test.assertUrlMatch(/^http:\/\/lagfolk\.de\/$/);
    });
    casper.wait(1000);
    casper.then(function() {
        this.captureSelector('report/screenshot/home.png', 'html');
    });

    casper.run(function() {test.done();});
});