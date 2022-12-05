import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.getByRole('link', { name: 'English 6 580 000+ articles' }).click();
  await page.getByRole('paragraph').filter({ hasText: 'William Utermohlen (December 5, 1933 – March 21, 2007) was an American figurativ' }).getByRole('link', { name: 'William Utermohlen' }).click();
  await page.getByRole('paragraph').filter({ hasText: 'William Charles Utermohlen (December 5, 1933 – March 21, 2007 (1933-12-05 – 2007' }).getByRole('link', { name: 'German Expressionism' }).click();
  await page.getByRole('paragraph').filter({ hasText: 'German Expressionism (German: Deutscher Expressionismus) consisted of several re' }).getByRole('link', { name: 'First World War' }).click();
});
