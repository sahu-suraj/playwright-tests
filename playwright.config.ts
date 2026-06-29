import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  
  // Where your test files are located
  testDir: './tests',
  
  // Run all tests in parallel (faster, but tests must be independent of each other)
  fullyParallel: true,
  
  // If one test file fails, should other test files stop? 
  // false = keep running everything (recommended for CI/CD)
  forbidOnly: !!process.env.CI,
  
  // How many times to retry a failed test before marking it as failed
  // 2 retries in CI helps handle flaky network issues; 0 locally for faster feedback
  retries: process.env.CI ? 2 : 0,
  
  // How many parallel workers to use
  // undefined = Playwright auto-detects based on your CPU cores
  workers: process.env.CI ? 1 : undefined,
  
  // The report format — 'html' creates a beautiful visual report
  reporter: 'html',
  
  // Settings shared across ALL tests
  use: {
    // Base URL — instead of writing full URLs, you can write just '/login'
    // and Playwright will prepend this automatically
    baseURL: 'https://yourapp.com',
    
    // Capture a trace (detailed recording for debugging) when a test fails
    // Open with: npx playwright show-trace trace.zip
    trace: 'on-first-retry',
    
    // Take a screenshot when a test fails
    screenshot: 'only-on-failure',
    
    // Record a video when a test fails
    video: 'on-first-retry',
  },

  // Run tests in these browsers ("projects")
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    // You can also add mobile browsers:
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],
  
});