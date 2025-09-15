import type { Page } from '@playwright/test'
import { expect } from '@playwright/test';
import type { Locator } from '@playwright/test';


export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //Selectors

  // Upper banner and text
  get greetingText(): Locator {
    return this.page.locator('p.lead');
  }

    get upperGuru(): Locator {
    return this.page.locator('strong.uppercase');
  }

  // Upper social media icons
  get faceBookIcon(): Locator {
    return this.page.locator('a.facebook');
  }

  get instagramIcon(): Locator {
    return this.page.locator('a.instagram');
  }

  get emailIcon(): Locator {
    return this.page.locator('a.email');
  }

  // Logo
  get monoxaLogo(): Locator {
    return this.page.locator('#logo');
  }

  // Header navigation and links  
  get headerNavigation(): Locator {
    return this.page.locator('ul.nav').first();
  }

  get homeLink(): Locator {
    return this.page.locator('a.nav-top-link[href="https://monoxatoys.com/"]');
  }

  get patternsLink(): Locator {
    return this.page.locator('a.nav-top-link[href="https://monoxatoys.com/crochet-patterns/"]');
  }

  get dollsLink(): Locator {
    return this.page.locator('a.nav-top-link[href="https://monoxatoys.com/exclusive-dolls/"]');
  }

  get aboutLink(): Locator {
    return this.page.locator('a.nav-top-link[href="https://monoxatoys.com/about/"]');
  }

  get contactLink(): Locator {
    return this.page.locator('a.nav-top-link[href="https://monoxatoys.com/contact/"]');
  }

  //Search icon
  get searchIcon(): Locator {
    return this.page.locator('i.icon-search').first();
  }

  //Greeting photo, text and button
  get greetingsPhoto(): Locator {
    return this.page.locator('div.img.has-hover.x50.y10');
  }

  get greeting1(): Locator {
  return this.page.locator('h1.section-title-normal');
}

get greeting2(): Locator {
  return this.page.locator('h3.alt-font').nth(0);
}

get greeting3(): Locator {
  return this.page.locator('h3.uppercase').nth(0);
}

get greeting4(): Locator {
  return this.page.locator('h3.uppercase').nth(1);
}

get greeting5(): Locator {
  return this.page.locator('h3.alt-font').nth(1);
}

get shopStartButton(): Locator {
  return this.page.locator('a.button.primary.is-xlarge');
}

// Banners and links
get patternsBanner(): Locator {
  return this.page.locator('a.uppercase[href="https://monoxatoys.com/crochet-patterns"]');
}

get dollsBanner(): Locator {
  return this.page.locator('a.uppercase[href="https://monoxatoys.com/exclusive-dolls/"]');
}

get aboutBanner(): Locator {
  return this.page.locator('a[href$="/elements/pages/about/"]');
}

// Best selling items.
get bestSellingItems(): Locator {
  return this.page.locator('.row-slider .product-small.col');
}

//Banner with comments
get bannerComment(): Locator {
  return this.page.locator('.testimonial-text > p');
}

// Latest products, prices and names
get latestProducts(): Locator {
  return this.page.locator('#woocommerce_products-12 .product_list_widget > li');
}

get productsPrice(): Locator {
  return this.page.locator('.woocommerce-Price-amount');
}

get productsName(): Locator {
  return this.page.locator('.product-title');
}

//Best selling produccts.
get bestSellingProducts(): Locator {
  return this.page.locator('#woocommerce_products-11 .product_list_widget > li');
}

//Top rated products.
get topRatedProducts(): Locator {
  return this.page.locator('#woocommerce_top_rated_products-3 .product_list_widget > li');
}

//Bottom section
get bottomNavigation(): Locator {
  return this.page.locator('#nav_menu-5 .widget-title');
}

get bottomHome(): Locator {
  return this.page.locator('#menu-main-menu-1 .menu-item-home a');
}

get bottomTutorials(): Locator {
  return this.page.locator('#menu-main-menu-1 .menu-item-697 a');
}

get bottomDolls(): Locator {
  return this.page.locator('#menu-main-menu-1 .menu-item-698 a');
}

get bottomAbout(): Locator {
  return this.page.locator('#menu-main-menu-1 .menu-item-559 a');
}

get bottomContact(): Locator {
  return this.page.locator('#menu-main-menu-1 .menu-item-560 a');
}

get aboutTheShop(): Locator {
  return this.page.locator('#nav_menu-8 .widget-title');
}

get makingPurchase(): Locator {
  return this.page.locator('#menu-secondary .menu-item-686 a');
}

get termsConditions(): Locator {
  return this.page.locator('#menu-secondary .menu-item-687 a');
}

get privacyPolicy(): Locator {
  return this.page.locator('#menu-secondary .menu-item-684 a');
}

get cookies(): Locator {
  return this.page.locator('#menu-secondary .menu-item-685 a');
}

get contactsTitle(): Locator {
  return this.page.locator('#block_widget-2 .widget-title');
}

get bottomEmailLink(): Locator {
  return this.page.locator('#block_widget-2 a[href^="mailto:"]');
}

get bottomFacebookIcon(): Locator {
  return this.page.locator('#block_widget-2 a[aria-label="Follow on Facebook"]');
}

get bottomInstaIcon(): Locator {
  return this.page.locator('#block_widget-2 a[aria-label="Follow on Instagram"]');
}

get bottomContactInfo(): Locator {
  return this.page.locator('#block_widget-2 p');
}

// Tests

//Open main page
async openMainPage(): Promise<void> {
    await this.page.goto('https://monoxatoys.com/');
}

//Upper banner is visible and has a correct text
async upperGuruIsVisible(expectedText: string): Promise<void> {
    const guruBanner = this.upperGuru.first();
    await expect(guruBanner).toBeVisible();
    await expect(guruBanner).toContainText(expectedText);
  }

//Upper social media icons are visible and have correct links
async upperSocialMediaIconsAreVisible(): Promise<void> {
    const upperFacebookIcon = this.faceBookIcon.first();
    const upperInstagramIcon = this.instagramIcon.first();
    const upperEmailIcon = this.emailIcon.first();
    await expect(upperFacebookIcon).toBeVisible();
    await expect(upperFacebookIcon).toHaveAttribute('href', 'https://www.facebook.com/monoxatoys/');
    await expect(upperInstagramIcon).toBeVisible();
    await expect(upperInstagramIcon).toHaveAttribute('href', 'https://www.instagram.com/monoxatoys/');
    await expect(upperEmailIcon).toBeVisible();
    await expect(upperEmailIcon).toHaveAttribute('href', 'https://monoxatoys.com/contact');
  }

  //Logo on the main page is visible
  async monoxaLogoIsVisible(): Promise<void> {
    await expect(this.monoxaLogo).toBeVisible();
  }

  //Navigation menu is visible and has correct links
  async headerNavigationIsVisible(): Promise<void> {
    await expect(this.headerNavigation).toBeVisible();
    const homeLink = this.homeLink;
    const patternsLink = this.patternsLink;
    const dollsLink = this.dollsLink;
    await expect(homeLink).toBeVisible();
    await expect(homeLink).toHaveAttribute('href', 'https://monoxatoys.com/');
    await expect(patternsLink).toBeVisible();
    await expect(patternsLink).toHaveAttribute('href', 'https://monoxatoys.com/crochet-patterns/');
    await expect(dollsLink).toBeVisible();
    await expect(dollsLink).toHaveAttribute('href', 'https://monoxatoys.com/exclusive-dolls/');
  }

  //Search icon is visible
  async searchIconIsVisible(): Promise<void> {
    await expect(this.searchIcon).toBeVisible();
  }

  //Greeting photo is visible and has correct text and button
  async greetingPhotoIsVisible(expectedText1: string, expectedText2: string, expectedText3: string, expectedText4: string, expectedText5:string, expectedButtonText: string): Promise<void> {
    await expect(this.greetingsPhoto).toBeVisible();
    await expect(this.greeting1).toBeVisible();
    await expect(this.greeting1).toContainText(expectedText1);
    await expect(this.greeting2).toBeVisible();
    await expect(this.greeting2).toContainText(expectedText2);
    await expect(this.greeting3).toBeVisible();
    await expect(this.greeting3).toContainText(expectedText3);
    await expect(this.greeting4).toBeVisible();
    await expect(this.greeting4).toContainText(expectedText4);
    await expect(this.greeting5).toBeVisible();
    await expect(this.greeting5).toContainText(expectedText5);
    await expect(this.shopStartButton).toBeVisible();
    await expect(this.shopStartButton).toContainText(expectedButtonText);
    await expect(this.shopStartButton).toHaveAttribute('href', 'https://monoxatoys.com/crochet-patterns');
  }

  //Banners are visible and have correct links
  async bannersAreVisible(): Promise<void> {
    const patternsBanner = this.patternsBanner;
    const dollsBanner = this.dollsBanner;
    const aboutBanner = this.aboutBanner;
    await expect(patternsBanner).toBeVisible();
    await expect(patternsBanner).toHaveAttribute('href', 'https://monoxatoys.com/crochet-patterns');
    await expect(dollsBanner).toBeVisible();
    await expect(dollsBanner).toHaveAttribute('href', 'https://monoxatoys.com/exclusive-dolls/');
    await expect(aboutBanner).toBeVisible();
    await expect(aboutBanner).toHaveAttribute('href', 'https://monoxatoys.com/elements/pages/about/');
  }

  //Best selling items are visible and have at least one item
  async bestSellingItemsAreVisible(): Promise<void> {
    const items = this.bestSellingItems;
    const count = await items.count(); // get the number of items
    expect(count).toBeGreaterThan(0); 
    //Check that each item is visible
    for (let i = 0; i < count; i++) {
      const item = items.nth(i); // get the item at index i
      await expect(item).toBeVisible();
    }
  }

  //Banner with comments is visible and has at least one comment
  async bannerWithCommentsIsVisible(): Promise<void> {
    const comments = this.bannerComment;
    const count = await comments.count(); // get the number of comments
    expect(count).toBeGreaterThan(0);
  }

  //Latest products are visible and have prices and names
  async latestProductsAreVisible(): Promise<void> {
    const products = this.latestProducts;
    const count = await products.count(); // get the number of products
    expect(count).toBeGreaterThan(0);
    //Check that each product has a price and a name
    for (let i = 0; i < count; i++) {
      const product = products.nth(i); // get the product at index i
      await expect(product).toBeVisible();
      const price = this.productsPrice;
      const name = this.productsName;
      await expect(price).toBeVisible();
      await expect(name).toBeVisible();
    }
  }

  // Best selling products are visible and have prices and names
  async bestSellingProductsAreVisible(): Promise<void> {
    const products = this.bestSellingProducts;
    const count = await products.count(); // get the number of products
    expect(count).toBeGreaterThan(0);
    //Check that each product has a price and a name
    for (let i = 0; i < count; i++) {
      const product = products.nth(i); // get the product at index i
      await expect(product).toBeVisible();
      const price = this.productsPrice;
      const name = this.productsName;
      await expect(price).toBeVisible();
      await expect(name).toBeVisible();
    }
  }

  
  
  









}
