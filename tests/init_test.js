var url = 'http://localhost:9001:/build';
casper.test.begin('Title page', 3, function suite(test) {
    casper.start(url, function() {
      this.test.comment(this.getCurrentUrl());
      this.test.assertHttpStatus(200, 'SEAP is up');
      test.assertTitle("My ESA Assessment", "ESA page title is the one expected");
      test.assertExists('button[data-action="about-esa"]', "All about ESA button found");
        //this.fill('form[action="/search"]', {
            //q: "casperjs"
        //}, true);
    });

    casper.run(function() {
        test.done();
    });
});
