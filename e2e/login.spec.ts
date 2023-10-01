import { test, expect } from '@playwright/test';

const URL = "http://localhost:4200/login"

test('login test', async ({ page }) => {
    await page.goto(URL);
    await page.pause();
    await page.getByRole('button', { name: 'Sign Up' }).click();
    await expect(page).toHaveURL('http://localhost:4200/register');
});

test('only valid email', async ({ page }) => {
    await page.goto(URL);
    await page.pause();
    const submitButton = page.locator('button[type="submit"]');
    await page.fill('input[type="text"]', 'aaa')
    await expect(submitButton).toBeDisabled();
});

test('hide password', async ({ page }) => {
    await page.goto(URL);
    await page.pause();
    const locator = page.locator('testPASS');
    await page.getByText('visibility_off').click();
    await expect(locator).toBeHidden();
});

test('text visible', async ({ page }) => {
    await page.goto(URL);
    await page.pause();
    await expect(page.getByText('Password')).toBeVisible();
    await expect(page.getByText('Email')).toBeVisible();
});

test('error', async ({ page }) => {
    await page.goto(URL);
    await page.pause();
    await page.locator('input[type="text"]').fill('test@gmail.com');
    await page.locator('input[type="password"]').fill('testPASS');
    expect('test@gmail.com').not.toContain('error');
    expect('testPASS').not.toContain('error');
});

test('login process', async ({ page }) => {

    await page.goto(URL);
    
    //add valid email
    await page.locator('input[type="text"]').click();
    await page.locator('input[type="text"]').fill('shachar@gmail.com');

    //add valid email
    await page.locator('input[type="text"]').click();
    await page.locator('input[type="text"]').fill('shachar@gmail.com');

    //add valid password
    await page.locator('input[type="password"]').click();
    await page.locator('input[type="password"]').fill('A12345');
    //click hide icon
    await page.getByText('visibility_off').click();

    //click login btn
    await page.getByRole('button', { name: 'Login' }).click();
});











