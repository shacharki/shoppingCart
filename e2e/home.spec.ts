import { test, expect } from '@playwright/test';

const URL = "http://localhost:4200/home"

test('home page test', async ({ page }) => {
    await page.goto(URL);
    await page.pause();
    await page.getByRole('button', { name: 'logout' }).click();
    await expect(page).toHaveURL('http://localhost:4200/login');
});

test('text visible', async ({ page }) => {
    await page.goto(URL);
    await page.pause();
    await page.getByRole('heading', { name: 'Canon EOS 400D' }).click();
    await expect(page.getByText('Canon EOS 400D')).toBeVisible();
    await page.getByText('Type: Photography').click();
    await page.getByText('$19.99').click();
});

test('products process', async ({ page }) => {
    await page.goto(URL);

    //zomm on img product
    await page.locator('.zoom').first().click();
    await page.locator('div:nth-child(6) > .media > .cart-item-thumb > .zoom').click();

    //add products to cart
    await page.locator('.pt-2 > .btn').first().click();
    await page.locator('div:nth-child(2) > div:nth-child(2) > .btn').click();

    //go to cartList
    await page.getByRole('button', { name: 'Cart', exact: true }).click();

    //click on product
    await page.locator('div').filter({ hasText: /^\$99\.99$/ }).getByRole('spinbutton').click();

    //Changing the quantity of the product
    await page.locator('div').filter({ hasText: /^\$99\.99$/ }).getByRole('spinbutton').fill('2');

    //remove product from cartList
    await page.getByRole('button', { name: 'Remove from cart' }).first().click();

    //go back to productList
    await page.getByRole('button', { name: 'Products' }).click();

    //click logout
    await page.getByRole('button', { name: 'logout' }).click();
    await expect(page).toHaveURL('http://localhost:4200/login');

});
