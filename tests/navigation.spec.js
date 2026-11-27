
import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("Courses navigation should work", async ({ page }) => {
  await page.getByRole("link", { name: "Courses", exact: true }).click();
  await expect(page).toHaveURL(/\/courses\/?$/);
});

test("Registration navigation should work", async ({ page }) => {
  await page.getByRole("link", { name: "Registration", exact: true }).click();
  await expect(page).toHaveURL(/\/registration\/?$/);
});

test("Career Guidance navigation should work", async ({ page }) => {
  await page.getByRole("link", { name: "Career Guidance", exact: true }).click();
  await expect(page).toHaveURL(/\/career-guidance\/?$/);
});


test("Others dropdown should open on desktop", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });

  await page.getByRole("navigation")
    .getByRole("button", { name: "Others" })
    .click();

  const navbar = page.getByRole("navigation");

  await expect(
    navbar.getByRole("link", { name: "About Us", exact: true })
  ).toBeVisible();

  await expect(
    navbar.getByRole("link", { name: "Blogs", exact: true })
  ).toBeVisible();
});

test("About Us navigation should work", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });

  const navbar = page.getByRole("navigation");

  await navbar.getByRole("button", { name: "Others" }).click();

  await navbar.getByRole("link", {
    name: "About Us",
    exact: true,
  }).click();

  await expect(page).toHaveURL(/\/about\/?$/);
});
