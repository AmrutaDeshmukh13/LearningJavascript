import { test, expect } from '@playwright/test';

test('test invalid login', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('invaliduserame');
  await page.locator('#login-form').click();
  await page.locator('[data-test="password"]').fill('p');
  await page.locator('#login-form').click();
  await page.locator('[data-test="password"]').fill('password');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
});