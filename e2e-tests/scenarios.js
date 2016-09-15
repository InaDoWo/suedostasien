describe('my app', function() {
  it('should redirect `index.html` to `index.html#!/countries/countries', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toBe('/home');
  });

  describe('home', function() {

    beforeEach(function() {
      browser.get('index.html');
    });


    it('should filter the country list as a user types into the search box', function() {
      var countryList = element.all(by.repeater('country in $ctrl.countries'));
      var query = element(by.model('$ctrl.query'));

      expect(countryList.count()).toBe(11);

      query.sendKeys('vietnam');
      expect(countryList.count()).toBe(1);

      query.clear();
      query.sendKeys('Brunei');
      expect(countryList.count()).toBe(1);
      query.clear();
      query.sendKeys('Indien');
      expect(countryList.count()).toBe(0);
    });
    it('should render country specific links', function() {
      var query = element(by.model('$ctrl.query'));
      query.sendKeys('Brunei');

      element.all(by.css('.thumbDescription a')).first().click();
      expect(browser.getLocationAbsUrl()).toBe('/countries/countries/BN');
    });


  });
  describe('View: Country details', function() {

  beforeEach(function() {
    browser.get('index.html#!/countries/countries/BN');
  });

  it('should display country with title `translations.de`', function() {
    expect(element(by.binding('$ctrl.country.translations.de')).getText()).toBe('Brunei');
  });

});

});
