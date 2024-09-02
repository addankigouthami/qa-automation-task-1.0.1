import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 2,
  use: {
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [['html', { open: 'never' }]],
});