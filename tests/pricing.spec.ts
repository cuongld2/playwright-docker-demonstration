import endpoint from "./configTypes"
import { test, expect } from '@playwright/test'

test("Expect to have 3 packages for subscription", async ({ page }) => {
  await page.goto(endpoint.SHOPIFYURL);
  await page.locator('ul[class="marketing-nav__items marketing-nav__user display--expanded-nav"] > li > [data-trekkie-action="Pricing"]').click()
  await page.waitForLoadState('networkidle');
  const number_subscriptions_allowed = await page.locator('[class="pricing-cards__wrapper pricing-cards pricing-cards--skin-light"] > div').count()
  expect(number_subscriptions_allowed).toBe(3)
});