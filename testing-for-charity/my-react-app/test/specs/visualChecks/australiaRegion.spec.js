var homePage = require('../../../pageObject/home.page');
const { assert } = require('assert');

describe('Australia region url check', () => {
  before(async () => {
    await homePage.open('australia');
  });

  it('HomePage check', async () => {
    await homePage.initialize('australia ');
    await homePage.closeCountryModal();
    await homePage.makeScreenShot('HomePage');
    const result = await homePage.resolve();
    assert.ok(result.passed, result.message);
  });
});
