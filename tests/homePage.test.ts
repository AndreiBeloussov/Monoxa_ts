import { test } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';

test('Main page: upperbanner visible with correct text', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.openMainPage();
  await homePage.upperGuruIsVisible('Amigurumi crochet patterns');
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
  await homePage.greetingPhotoIsVisible('Advanced AMIGURUMI Crochet Patterns – From Pinup Dolls to 90s Cartoons',
     'Why Choose Monoxatoys PDF Crochet Patterns?', 
     'Because you don’t need yet another “just cute” crochet bunny or bear',
     'You’re here for a challenge.An adventure.A piece of amigurumi art so bold you’ll want to display it.',
     'Ready to go beyond the basics',
     'shop & start creating today' 
     );
});

test('Main page: banners are visible with correct links', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.openMainPage();
  await homePage.bannersAreVisible();
});

test('Main page: best selling items are visible and at least 3 items are displayed', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.openMainPage();
  await homePage.bestSellingItemsAreVisible();
});

test('Main page: banner with comments is visible and has at least one comment', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.openMainPage();
  await homePage.bannerWithCommentsIsVisible();
});

test('Main page: latest products, prices and names are visible', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.openMainPage();
  await homePage.latestProductsAreVisible();
});

test('Main page: best selling products, prices and names are visible', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.openMainPage();
  await homePage.bestSellingProductsAreVisible();
});



