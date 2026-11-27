
import { test, expect } from "@playwright/test";

const viewports = [
  { name: "Mobile", width: 390, height: 844 },
  { name: "Tablet", width: 768, height: 1024 },
  { name: "Laptop", width: 1366, height: 768 },
  { name: "Desktop", width: 1920, height: 1080 },
];

for (const viewport of viewports) {
  test(`No horizontal scrolling on ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({
      width: viewport.width,
      height: viewport.height,
    });

    await page.goto("/");

    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth >
        document.documentElement.clientWidth;
    });

    expect(hasHorizontalScroll).toBe(false);
  });
}
