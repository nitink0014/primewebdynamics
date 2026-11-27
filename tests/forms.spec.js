
import { test, expect } from "@playwright/test";

test.describe("Registration Form", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("/registration");
  });

  test("should display all registration fields", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Online Registration Form" })
    ).toBeVisible();

    await expect(page.getByLabel("Full Name")).toBeVisible();
    await expect(page.getByLabel("Email Address")).toBeVisible();
    await expect(page.getByLabel("Phone Number")).toBeVisible();
    await expect(page.getByLabel("Select Course")).toBeVisible();
    await expect(page.getByLabel("Select Branch")).toBeVisible();
    await expect(page.getByLabel("Complete Address")).toBeVisible();
    await expect(page.getByLabel("City")).toBeVisible();
    await expect(page.getByLabel("Country")).toBeVisible();
    await expect(page.getByLabel("Zipcode")).toBeVisible();
    await expect(page.getByLabel("Amount")).toBeVisible();

    await expect(
      page.getByRole("button", { name: /submit registration/i })
    ).toBeVisible();
  });

  test("should show validation errors when submitted empty", async ({ page }) => {
    await page.getByRole("button", { name: /submit registration/i }).click();

    await expect(
      page.getByText("Please enter your full name")
    ).toBeVisible();

    await expect(
      page.getByText("Please enter your phone number")
    ).toBeVisible();

    await expect(
      page.getByText("Registration submitted successfully!")
    ).not.toBeVisible();
  });

  test("should reject an invalid phone number", async ({ page }) => {
    await page.getByLabel("Full Name").fill("Test User");
    await page.getByLabel("Phone Number").fill("12345");

    await page.getByRole("button", { name: /submit registration/i }).click();

    await expect(
      page.getByText("Phone number must be exactly 10 digits")
    ).toBeVisible();

    await expect(
      page.getByText("Registration submitted successfully!")
    ).not.toBeVisible();
  });

  test("should submit registration with valid details", async ({ page }) => {
    await page.getByLabel("Full Name").fill("Test User");
    await page.getByLabel("Email Address").fill("test@example.com");
    await page.getByLabel("Phone Number").fill("9876543210");

    await page.getByLabel("Select Course").selectOption("Web Development");
    await page.getByLabel("Select Branch").selectOption("Sanjay Palace, Agra");

    await page.getByRole("button", { name: /submit registration/i }).click();

    await expect(
      page.getByText("Registration submitted successfully!")
    ).toBeVisible();
  });

test("should allow registration with only mandatory fields", async ({ page }) => {
  await page.getByLabel("Full Name").fill("Minimal Test User");
  await page.getByLabel("Phone Number").fill("9876543210");

  await page.getByRole("button", { name: /submit registration/i }).click();

  await expect(
    page.getByText("Registration submitted successfully!")
  ).toBeVisible();
});


});
