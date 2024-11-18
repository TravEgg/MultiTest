import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import Base from './Base.js';
import { expect } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Base {
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

    /*get menuHamb() {
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
    }*/
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using corect username and password and then again with a bad password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async firstLogin(username, password){
        await this.open()
        await this.login(username, password);
        await expect(this.productPage).toBeExisting()
        await expect(this.productPage).toHaveText(
            expect.stringContaining('Swag Labs'))
        }
        /*await this.menuHamb.click();
        //test the Cancel Button in the hamburger menu
        await this.cancelHamb.click();
        await this.menuHamb.click();
        await this.menuAllItems.click();
        await expect(this.productPage).toBeExisting()
        await expect(this.productPage).toHaveText(
            expect.stringContaining('Swag Labs'))
        await this.menuAbout.click();
        await expect(this.saucePage).toBeExisting
        await browser.back();
        await this.menuHamb.click();
        await this.menuLogout.click();
        await this.login(username, password);
        await expect(this.productPage).toBeExisting()
        await expect(this.productPage).toHaveText(
            expect.stringContaining('Swag Labs'))
        await this.menuHamb.click();
        await this.menuReset.click();
        await this.cancelHamb.click();
        await browser.pause(2000)
        await $('.bm-burger-button').click();
        await browser.pause(2000)
    }*/

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

export default new LoginPage();
