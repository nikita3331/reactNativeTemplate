function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
describe('First test', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have main text', async () => {
    await expect(element(by.id('mainText'))).toBeVisible();
  });

});
