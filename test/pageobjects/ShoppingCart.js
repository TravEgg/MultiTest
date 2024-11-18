import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import { expect } from '@wdio/globals'
import LoginPage from './login.page.js';
import Hamburger from './Hamburger.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ShoppingCart {
    /**
     * define selectors using getter methods
     */
    get inputFirstName () {
        return $('a.shopping_cart_link');
    }

    get AddBackpack () {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get AddBikeLight () {
        return $('#add-to-cart-sauce-labs-bike-light');
    }

    get addBoltT() {
        return $('#add-to-cart-sauce-labs-bolt-t-shirt');
    }
    get addJacket() {
        return $('#add-to-cart-sauce-labs-fleece-jacket')
    }

    get addOnsie() {
        return $('#add-to-cart-sauce-labs-onesie')
    }

    get addAttTshirt() {
        return $('#add-to-cart')
    }

    get AllThingsT() {
        // return $('a#item_3_img_link')
        return $('button[id="add-to-cart-test.allthethings()-t-shirt-(red)"]')
    }

    get ContShop() {
        return $('#continue-shopping')
    }

    get AllThingsPage() {
        return $('#back-to-products')
    }

    get CartBadge() {
        return $('.shopping_cart_badge')
    }

    get checkoutbutton() {
        return $('#checkout')
        //(browser.url('https://www.saucedemo.com/'))
        //MuiBox-root css-lwb5go
    }

    get CartButton() {
        return $('.shopping_cart_link')
    }

    //AddItems = [this.AddBackpack, this.AddBikeLight, this.addBoltT, this.addJacket, this.addOnsie]

    async cartTest() {
        await this.AllThingsT.click();
        // await this.addAttTshirt.click();
        // await expect(this.CartBadge).toBeExisting();
        // await expect(this.CartBadge).toHaveText(
        //     expect.stringContaining('1')
        // )
        // await expect(this.AllThingsPage).toBeExisting();
        // await expect(this.AllThingsPage).toHaveText(
        //     expect.stringContaining('Back to products')
        // )
        // await Hamburger.menuHamb.click();
        // await Hamburger.menuAllItems.click();
        await this.AddBackpack.click();
        await this.AddBikeLight.click();
        await this.addBoltT.click();
        await this.addJacket.click();
        await this.addOnsie.click();  
        await expect(this.CartButton).toBeExisting();     
        await this.CartButton.click();
        await expect(this.ContShop).toBeExisting();
        await this.ContShop.click();
        await expect(this.CartButton).toBeExisting();     
        await this.CartButton.click();
        
    }
}
/*async addItemsLoop() {
        await this.CartTest();
        for (let i=1; i < this.AddItems.length; i++){
        await this.AddItems[i].click();
        await expect(this.CartBadge).toBeExisting()
        await expect(this.CartBadge).toHaveText(
            expect.stringContaining('[i+1]'))
        }*/
export default new ShoppingCart();