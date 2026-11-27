
import { test, expect } from "@playwright/test";

test("Homepage should load successfully", async ({ page }) => {
  const response = await page.goto("/");

  expect(response.status()).toBe(200);

  await expect(page).toHaveTitle(/.+/);

  console.log("Homepage loaded successfully!");
});
