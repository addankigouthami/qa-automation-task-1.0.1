import { Page } from '@playwright/test';

export class ChargePointPage {
  readonly page: Page;
  readonly serialNumberInput;
  readonly addButton;
  readonly chargePointList;

  constructor(page: Page) {
    this.page = page;
    this.serialNumberInput = this.page.locator('[data-testid="serialNumberInput"]');
    this.addButton = this.page.locator('[data-testid="addChargePointBtn"]');
    this.chargePointList = this.page.locator('[data-testid="chargePointList"]');
  }

  async addChargePoint(serialNumber: string) {
    await this.serialNumberInput.fill(serialNumber);
    await this.addButton.click();
  }

  async deleteChargePoint(serialNumber: string) {
    const deleteButton = this.page.locator(`//li[div[text()="${serialNumber}"]]//button`);
    await deleteButton.click();
  }

  async isChargePointPresent(serialNumber: string): Promise<boolean> {
    return this.page.locator(`//li[div[text()="${serialNumber}"]]`).isVisible();
  }
}