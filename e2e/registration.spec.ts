import { test, expect } from '@playwright/test';

const URL = "http://localhost:4200/register"

test('has Title', async ({ page }) => {
    await page.goto('http://localhost:4200/');
    await expect(page).toHaveTitle(/ShoppingCart/);
  });

test('registration button test', async ({ page }) => {
    await page.goto(URL);
    await page.pause();
    await page.getByRole('button', { name: 'Reset' }).click();
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForURL('http://localhost:4200/login');
});

test('valid email', async ({ page }) => {
    await page.goto(URL);
    const submitButton = page.locator('button[type="submit"]');
    await page.locator('div').filter({ hasText: 'Email' }).getByRole('textbox').fill('sdsddsd@dsds');
    await expect(submitButton).toBeDisabled();
});

test('valid password', async ({ page }) => {
    await page.goto(URL);
    const submitButton = page.locator('button[type="submit"]');
    await page.locator('div').filter({ hasText: /^Passwordvisibility_off$/ }).getByRole('textbox').fill('sd123');
    await page.fill('input[type="text"]', 'aaa')
    await expect(submitButton).toBeDisabled();
});

test('hide password', async ({ page }) => {
    await page.goto(URL);
    const locator = page.locator('testPASS');
    await page.locator('div').filter({ hasText: 'Confirm Passwordvisibility_off' }).locator('mat-icon').click();
    await expect(locator).toBeHidden();
});

test('error', async ({ page }) => {
    await page.goto(URL);
    await page.locator('div').filter({ hasText: 'Email' }).getByRole('textbox').fill('regTest@gmail.com');
    await page.locator('div').filter({ hasText: /^Passwordvisibility_off$/ }).getByRole('textbox').fill('sd123A');
    expect('regTest@gmail.com').not.toContain('error');
    expect('sd123A').not.toContain('error');
});

test('registration process', async ({ page }) => {
  
    await page.goto(URL);

    //add valid name
    await page.locator('div').filter({ hasText: 'Name' }).getByRole('textbox').click();
    await page.locator('div').filter({ hasText: 'Name' }).getByRole('textbox').fill('shachar');

    //add valid email
    await page.locator('div').filter({ hasText: 'Email' }).getByRole('textbox').click();
    await page.locator('div').filter({ hasText: 'Email' }).getByRole('textbox').fill('shachar@gmail.com');

    //add valid password
    await page.locator('div').filter({ hasText: /^Passwordvisibility_off$/ }).getByRole('textbox').click();
    await page.locator('div').filter({ hasText: /^Passwordvisibility_off$/ }).getByRole('textbox').fill('A12345');

    //click confirm password
    await page.locator('div').filter({ hasText: 'Confirm Passwordvisibility_off' }).getByRole('textbox').click();

    //add confirm password
    await page.locator('div').filter({ hasText: 'Confirm Passwordvisibility_off' }).getByRole('textbox').press('CapsLock');
    await page.locator('div').filter({ hasText: 'Confirm Passwordvisibility_off' }).getByRole('textbox').fill('A12345');
    //press hide icon
    await page.locator('div').filter({ hasText: 'Confirm Passwordvisibility_off' }).locator('mat-icon').click();

    //alret sucsess msg
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });

    //clik regrister btn
    await page.getByRole('button', { name: 'Register' }).click();
    await expect(page).toHaveURL('http://localhost:4200/login');

    // await page.waitForURL('http://localhost:4200/login');
  });