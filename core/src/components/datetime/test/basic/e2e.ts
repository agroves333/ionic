import { newE2EPage } from '@stencil/core/testing';

it('datetime: basic', async () => {
  const page = await newE2EPage({
    url: '/src/components/datetime/test/basic?ionic:animated=false'
  });

  let compare = await page.compareScreenshot();
  expect(compare).toMatchScreenshot();

  const datetime = await page.find('#customPickerOptions');
  await datetime.click();

  const picker = await page.find('ion-picker');
  await picker.waitForVisible();

  compare = await page.compareScreenshot('should open custom picker');
  expect(compare).toMatchScreenshot();
});
