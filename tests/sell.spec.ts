import { test, expect } from '@playwright/test'
import endpoint from "./configTypes"


test("Have 4 options of selling", async ({ page }) => {
  await page.goto(endpoint.SHOPIFYURL);
  await page.locator('div > [data-trekkie-action="Sell Nav"]').click()
  await page.locator('ul[class="popover__list"] > li > [data-trekkie-action="Sell everywhere"]').click()
  await page.waitForLoadState('networkidle');
  const number_methods_sell = await page.locator('[data-event-action="intro"]').count()
  expect(number_methods_sell).toBe(4)
});