import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://e-commerce-dev.betterbytesvn.com/');

  // Expect title contains "E-commerce site for automation testing".
  await expect(page).toHaveTitle(/E-commerce site for automation testing/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://e-commerce-dev.betterbytesvn.com/');

  // Click menu "My Acount".
  await page.getByRole('link', { name: /MY ACCOUNT/i }).click();

  // Expects page to have a heading with the name of "My Account".
  await expect(page.getByRole('heading', { name: 'My Account' })).toBeVisible();
});