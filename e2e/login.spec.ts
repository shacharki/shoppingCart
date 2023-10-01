import { test, expect } from '@playwright/test';

const URL = "http://localhost:4200/login"

test('login test', async ({ page }) => {
    await page.goto(URL);
    await page.pause();
    await page.getByRole('button', { name: 'Login' }).click()
    await page.getByRole('button', { name: 'Sign Up' }).click();
});

test('only valid email', async ({ page }) => {
    await page.goto(URL);
    const submitButton = page.locator('button[type="submit"]');
    await page.fill('input[type="text"]', 'aaa')
    await expect(submitButton).toBeDisabled();
});

test('hide password', async ({ page }) => {
    await page.goto(URL);
    const locator = page.locator('testPASS');
    await page.getByText('visibility_off').click();
    await expect(locator).toBeHidden();
});

test('text visible', async ({ page }) => {
    await page.goto(URL);
    await expect(page.getByText('Password')).toBeVisible();
    await expect(page.getByText('Email')).toBeVisible();
});

test('error', async ({ page }) => {
    await page.goto(URL);
    await page.locator('input[type="text"]').fill('test@gmail.com');
    await page.locator('input[type="password"]').fill('testPASS');
    expect('test@gmail.com').not.toContain('error');
    expect('testPASS').not.toContain('error');
});











