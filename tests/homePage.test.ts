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

test.only('Main page: search icon is visible', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.openMainPage();
  await homePage.searchIconIsVisible();
});


