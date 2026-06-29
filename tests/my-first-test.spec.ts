// Import the test runner and assertion library from Playwright
import { test, expect } from '@playwright/test';

// Define a test — think of this like a step-by-step user scenario
test('Playwright website has correct title', async ({ page }) => {
  
  // Navigate to the website
  await page.goto('https://playwright.dev/');
  
  // Assert that the page title contains the word "Playwright"
  // The /Playwright/ is a "regular expression" — it matches any title containing "Playwright"
  await expect(page).toHaveTitle(/Playwright/);
  
});

test('Get Started button leads to Installation page', async ({ page }) => {
  
  await page.goto('https://playwright.dev/');
  
  // Find the "Get started" link by its visible text and click it
  await page.getByRole('link', { name: 'Get started' }).click();
  
  // After clicking, check that the heading "Installation" is now visible
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  
});