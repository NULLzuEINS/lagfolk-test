'use strict';

casper.test.begin('Resurrectio test', function(test) {
    casper.start('http://lagfolk.de/');
    casper.waitForSelector(x("//a[normalize-space(text())='Neues']"),
        function success() {
            test.assertExists(x("//a[normalize-space(text())='Neues']"));
            this.click(x("//a[normalize-space(text())='Neues']"));
        },
        function fail() {
            test.assertExists(x("//a[normalize-space(text())='Neues']"));
        });
    casper.waitForSelector(x("//a[normalize-space(text())='Termine']"),
        function success() {
            test.assertExists(x("//a[normalize-space(text())='Termine']"));
            this.click(x("//a[normalize-space(text())='Termine']"));
        },
        function fail() {
            test.assertExists(x("//a[normalize-space(text())='Termine']"));
        });
    casper.waitForSelector(x("//a[normalize-space(text())='Musikmarkt']"),
        function success() {
            test.assertExists(x("//a[normalize-space(text())='Musikmarkt']"));
            this.click(x("//a[normalize-space(text())='Musikmarkt']"));
        },
        function fail() {
            test.assertExists(x("//a[normalize-space(text())='Musikmarkt']"));
        });
    casper.waitForSelector(x("//a[normalize-space(text())='FolkPost']"),
        function success() {
            test.assertExists(x("//a[normalize-space(text())='FolkPost']"));
            this.click(x("//a[normalize-space(text())='FolkPost']"));
        },
        function fail() {
            test.assertExists(x("//a[normalize-space(text())='FolkPost']"));
        });
    casper.waitForSelector(x("//a[normalize-space(text())='Gruppen']"),
        function success() {
            test.assertExists(x("//a[normalize-space(text())='Gruppen']"));
            this.click(x("//a[normalize-space(text())='Gruppen']"));
        },
        function fail() {
            test.assertExists(x("//a[normalize-space(text())='Gruppen']"));
        });
    casper.waitForSelector(x("//a[normalize-space(text())='Veranstalter']"),
        function success() {
            test.assertExists(x("//a[normalize-space(text())='Veranstalter']"));
            this.click(x("//a[normalize-space(text())='Veranstalter']"));
        },
        function fail() {
            test.assertExists(x("//a[normalize-space(text())='Veranstalter']"));
        });
    casper.waitForSelector(x("//a[normalize-space(text())='LAG Folk']"),
        function success() {
            test.assertExists(x("//a[normalize-space(text())='LAG Folk']"));
            this.click(x("//a[normalize-space(text())='LAG Folk']"));
        },
        function fail() {
            test.assertExists(x("//a[normalize-space(text())='LAG Folk']"));
        });

    casper.run(function() {test.done();});
});