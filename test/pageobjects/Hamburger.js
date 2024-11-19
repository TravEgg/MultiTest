import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import Page from './page.js';
import { expect } from '@wdio/globals'
import LoginPage from './login.page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Hamburger {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('input[type="submit"]');
    }

    get productPage() {
        return $('.app_logo');
    }
    get errorPopup() {
        return $('h3')
    }

    get menuHamb() {
        return $('.bm-burger-button')
    }

    get cancelHamb() {
        return $('button#react-burger-cross-btn')
    }

    get menuAllItems() {
        return $('a#inventory_sidebar_link')
    }

    get menuAbout() {
        return $('a#about_sidebar_link')
    }

    get menuLogout() {
        return $('a#logout_sidebar_link')
    }

    get menuReset() {
        return $('a#reset_sidebar_link')
    }

    get saucePage() {
        return $('a[href="/"]')
        //(browser.url('https://www.saucedemo.com/'))
        //MuiBox-root css-lwb5go
    }

    get LoginButton() {
        return $('#login-button')
    }

    async hambMenu() {
        await ShoppingCart.allThingsItem.click()
        await expect(ShoppingCart.AllThingsPage).toBeExisting();
        await expect(ShoppingCart.AllThingsPage).toHaveText(
            expect.stringContaining('Back to products')
        )
        await this.menuHamb.click();
        //test the Cancel Button in the hamburger menu
        await this.cancelHamb.click();
        await this.menuHamb.click();
        await this.menuAllItems.click();
        await expect(this.productPage).toBeExisting()
        await expect(this.productPage).toHaveText(
            expect.stringContaining('Swag Labs'))
        await this.menuHamb.click();
        await this.menuAbout.click();
        await expect(this.saucePage).toBeExisting
        await browser.back();
        await this.menuHamb.click();
        await this.menuLogout.click();
        await expect(this.LoginButton).toBeExisting();
        await LoginPage.firstLogin('standard_user', 'secret_sauce');
        await expect(LoginPage.productPage).toBeExisting()
        await expect(LoginPage.productPage).toHaveText(
            expect.stringContaining('Swag Labs'))
        await ShoppingCart.AllThingsT.click();
        await expect(ShoppingCart.CartBadge).toBeExisting();
        await this.menuHamb.click();
        await this.menuReset.click();
        await this.cancelHamb.click();
        await ShoppingCart.removeAttTshirt.click();
        
        // await browser.pause(2000)
        // await $('.bm-burger-button').click();
        // await this.cancelHamb.click();
        // await browser.pause(2000)
    }
}

export default new Hamburger();