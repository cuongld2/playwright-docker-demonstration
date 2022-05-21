import endpoint from "./configTypes"
import { test, expect } from '@playwright/test'

test("Expect to have 3 packages for subscription", async ({ page }) => {

  // Go to the homepage of the Shopify web application
  await page.goto(endpoint.SHOPIFY_URL);

  // Find the Pricing button and clicking on it, using css selector
  await page.locator('ul[class="marketing-nav__items marketing-nav__user display--expanded-nav"] > li > [data-trekkie-action="Pricing"]').click()

  // Wait for the page to load
  await page.waitForLoadState('networkidle');

  // Get the number of pricing options Shopify support
  const number_subscriptions_allowed = await page.locator('[class="pricing-cards__wrapper pricing-cards pricing-cards--skin-light"] > div').count()

  // Verify that number equals 3
  expect(number_subscriptions_allowed).toBe(3)
});