import { test, expect } from '@playwright/test';
import { ChargePointPage } from './pages/chargePointPage';

test.describe('Charge Point Management', () => {
  let chargePointPage: ChargePointPage;

  test.beforeEach(async ({ page }) => {
    chargePointPage = new ChargePointPage(page);
    await page.goto('http://localhost:3000'); // Replace with the actual URL if different
  });

  test('should add a new charge point with a random serial number', async () => {
    const randomSerialNumber = `CP${Math.floor(Math.random() * 1000000)}`;

    // Add the new charge point with a random serial number
    await chargePointPage.addChargePoint(randomSerialNumber);

    // Verify the new charge point was added
    expect(await chargePointPage.isChargePointPresent(randomSerialNumber)).toBeTruthy();
  });

  test('should delete a charge point', async () => {
    const randomSerialNumber = `CP${Math.floor(Math.random() * 1000000)}`;

    // Add a new charge point first to ensure there's something to delete
    await chargePointPage.addChargePoint(randomSerialNumber);

    // Now delete the charge point
    await chargePointPage.deleteChargePoint(randomSerialNumber);

    // Verify the charge point was deleted
    expect(await chargePointPage.isChargePointPresent(randomSerialNumber)).toBeFalsy();
  });
});