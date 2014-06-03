//= require application
//= require home
//= require countries

describe('Countries Show', function() {
  it("should be able to create it's applicationt ests objects", function() {
    var countriesShowView = new gfw.ui.view.CountriesShow();
    expect(countriesShowView).toBeDefined();
  });
});