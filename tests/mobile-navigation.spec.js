
import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.setViewportSize({
    width: 390,
    height: 844,
  });

  await page.goto("/");
});

test("Mobile hamburger menu should open", async ({ page }) => {
  const menuButton = page.getByRole("button", {
    name: "Toggle navigation menu",
  });

  await menuButton.click();

  await expect(
    page.getByRole("link", { name: "Courses", exact: true })
  ).toBeVisible();

  await expect(menuButton).toHaveAttribute("aria-expanded", "true");
});

test("Mobile Others dropdown should open", async ({ page }) => {
  await page.getByRole("button", {
    name: "Toggle navigation menu",
  }).click();

 await page.getByRole("button", {
  name: "Others",
  exact: false,
}).click();

  const navbar = page.getByRole("navigation");

  await expect(
    navbar.getByRole("link", { name: "About Us", exact: true })
  ).toBeVisible();

  await expect(
    navbar.getByRole("link", { name: "Blogs", exact: true })
  ).toBeVisible();
});

test("Mobile navigation should close after clicking Courses", async ({ page }) => {
  const menuButton = page.getByRole("button", {
    name: "Toggle navigation menu",
  });

  await menuButton.click();

  await page.getByRole("link", {
    name: "Courses",
    exact: true,
  }).click();

  await expect(page).toHaveURL(/\/courses\/?$/);

  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
});
