
import { test, expect } from "@playwright/test";

const devices = [
  { name: "Mobile", width: 390, height: 844 },
  { name: "Tablet", width: 768, height: 1024 },
  { name: "Laptop", width: 1366, height: 768 },
  { name: "Desktop", width: 1920, height: 1080 },
];

for (const device of devices) {
  test(`Homepage should load on ${device.name}`, async ({ page }) => {
    await page.setViewportSize({
      width: device.width,
      height: device.height,
    });

    await page.goto("/");

    await expect(page.locator("body")).toBeVisible();

    await expect(page.locator("nav")).toBeVisible();

    console.log(`${device.name} view tested successfully`);
  });
}
