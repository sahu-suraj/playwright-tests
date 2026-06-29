import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('user can log in successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.goto();
  await loginPage.login('user@example.com', 'password123');
  
  // After login, we should be redirected to the dashboard
  await expect(page).toHaveURL('/dashboard');
});