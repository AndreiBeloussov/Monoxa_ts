import { test } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';

test('Main page: upperbanner visible with correct text', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.openMainPage();
  await homePage.upperGuruIsVisible('Amigurumi guru from Estonia');
});

test('Main page: upper social media icons are visible with correct links', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.openMainPage();
  await homePage.upperSocialMediaIconsAreVisible();
});

test('Main page: Monoxa logo is visible', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.openMainPage();
  await homePage.monoxaLogoIsVisible();
});

test('Main page: header navigation is visible with correct links', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.openMainPage();
  await homePage.headerNavigationIsVisible();
});

test('Main page: search icon is visible', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.openMainPage();
  await homePage.searchIconIsVisible();
});

test('Main page: greeting photo is visible with correct text and button', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.openMainPage();
  await homePage.greetingPhotoIsVisible('Hey sweetie', 'I am so glad to see you! Come on in, take your shoes off… How do you like your coffee?', 'I’m Roxanne – Amigurumi guru from Estonia', 'Know me better');
});

test('Main page: banners are visible with correct links', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.openMainPage();
  await homePage.bannersAreVisible();
});

test.only('Main page: best selling items are visible and at least 3 items are displayed', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.openMainPage();
  await homePage.bestSellingItemsAreVisible();
});



