import type { Page } from '@playwright/test'
import { expect } from '@playwright/test';
import type { Locator } from '@playwright/test';


export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //Selectors
  get greetingText(): Locator {
    return this.page.locator('p.lead');
  }

    get upperGuru(): Locator {
    return this.page.locator('strong.uppercase');
  }

  get faceBookIcon(): Locator {
    return this.page.locator('a.facebook');
  }

  get instagramIcon(): Locator {
    return this.page.locator('a.instagram');
  }

  get emailIcon(): Locator {
    return this.page.locator('a.email');
  }

  get monoxaLogo(): Locator {
    return this.page.locator('#logo');
  }

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

  get searchIcon(): Locator {
    return this.page.locator('i.icon-search').first();
  }

  get greetingsPhoto(): Locator {
    return this.page.locator('div.img.has-hover.x50.y10');
  }

  get greeting1(): Locator {
  return this.page.locator('h3.alt-font');
}

get greeting2(): Locator {
  return this.page.locator('h4.uppercase');
}

get knowMeBetterButton(): Locator {
  return this.page.locator('a.button.secondary');
}

get tutorialsBanner(): Locator {
  return this.page.locator('a.uppercase[href="https://monoxatoys.com/product-category/tutorials/"]');
}

get dollsBanner(): Locator {
  return this.page.locator('a.uppercase[href="https://monoxatoys.com/product-category/exclusive-dolls/"]');
}

get aboutBanner(): Locator {
  return this.page.locator('a.uppercase[href="https://monoxatoys.com/elements/pages/about"]');
}

get bestSellingItems(): Locator {
  return this.page.locator('.row-slider .product-small.col');
}

get bannerComment(): Locator {
  return this.page.locator('.testimonial-text > p');
}

get latestProducts(): Locator {
  return this.page.locator('#woocommerce_products-12 .product_list_widget > li');
}

get productsPrice(): Locator {
  return this.page.locator('.woocommerce-Price-amount');
}

get productsName(): Locator {
  return this.page.locator('.product-title');
}

get bestSellingProducts(): Locator {
  return this.page.locator('#woocommerce_products-11 .product_list_widget > li');
}

get topRatedProducts(): Locator {
  return this.page.locator('#woocommerce_top_rated_products-3 .product_list_widget > li');
}

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





}
