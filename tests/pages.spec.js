
import { test, expect } from "@playwright/test";

const pages = [
  "/",
  "/courses",
  "/registration",
  "/career-guidance",
  "/contact",
  "/about",
  "/blogs",
];

for (const path of pages) {
  test(`Page ${path} should load successfully`, async ({ page }) => {
    const response = await page.goto(path);

    expect(response.status()).toBe(200);

    await expect(page.locator("body")).toBeVisible();
  });
}
