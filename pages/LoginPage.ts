import { Page, Locator } from '@playwright/test';

export class LoginPage {
  // Declare typed locators as class properties
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

  constructor(private page: Page) {
    // Initialize locators in the constructor
    this.emailInput   = page.getByLabel('Email');
    this.passwordInput = page.getByLabel('Password');
    this.loginButton  = page.getByRole('button', { name: 'Log in' });
  }

  async goto(): Promise<void> {
    await this.page.goto('/login');
  }

  async login(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}