import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import { expect } from '@wdio/globals'
import LoginPage from './Login.js';
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

    get allThingsItem() {
        return $('a#item_3_img_link')
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

    get addToCart() {
        return $('//button[contains(text(), "Add to cart")]')
    }

    get removeFromCart() {
        return $('//button[contains(text(), "Remove")]')
    }

    get removeAttTshirt() {
        return $('button[id="remove-test.allthethings()-t-shirt-(red)"]')
    }

    get BoltTPage() {
        return $('//div[contains(text(), "Bolt")]')
    }
    get ItemPage() {
        return $('.inventory_details_img')
    }
    get backpackPage() {
        return $('//div[contains(text(), "Backpack")]')
    }
    get bikeLightPage() {
        return $('//div[contains(text(), "Bike Light")]')
    }
    get onsiePage() {
        return $('//div[contains(text(), "Onesie")]')
    }
    get allThingsTPage() {
        return $('//div[contains(text(), "Red")]')
    }
    get FleecePage() {
        return $('//div[contains(text(), "Fleece")]')
    }





    //AddItems = [this.AddBackpack, this.AddBikeLight, this.addBoltT, this.addJacket, this.addOnsie]

    async cartTest() {
        // await this.AllThingsT.click();
        // // await this.addAttTshirt.click();
        // // await expect(this.CartBadge).toBeExisting();
        // // await expect(this.CartBadge).toHaveText(
        // //     expect.stringContaining('1')
        // // )
        // // await expect(this.AllThingsPage).toBeExisting();
        // // await expect(this.AllThingsPage).toHaveText(
        // //     expect.stringContaining('Back to products')
        // // )
        // // await Hamburger.menuHamb.click();
        // // await Hamburger.menuAllItems.click();
        // await this.AddBackpack.click();
        // await this.AddBikeLight.click();
        // await this.addBoltT.click();
        // await this.addJacket.click();
        // await this.addOnsie.click();  

        // Add all items to the cart
        while (await this.addToCart.isExisting()) {
            await this.addToCart.click(); 
            console.log("Button clicked!");
        }
        console.log("Button  no longer matches the condition or does not exist.");

        // Go into the cart and Remove all items 
        await expect(this.CartButton).toBeExisting();     
        await this.CartButton.click();
        while (await this.removeFromCart.isExisting()) {
            await this.removeFromCart.click();
            console.log("Button clicked!");
        }
        console.log("Button  no longer matches the condition or does not exist.");
        // return to inventory and re-add all items
        await expect(this.ContShop).toBeExisting();
        await this.ContShop.click();
        while (await this.addToCart.isExisting()) {
            await this.addToCart.click(); 
            console.log("Button clicked!");
        }
        console.log("Button  no longer matches the condition or does not exist.");

        //Re-open the cart
        await expect(this.CartButton).toBeExisting();     
        await this.CartButton.click();

        //Click Individual Items and load the pages
        await expect(this.BoltTPage).toBeExisting();
        await this.BoltTPage.click();
        await expect(this.ItemPage).toBeExisting();
        await browser.back();
        await expect(this.backpackPage).toBeExisting();
        await this.backpackPage.click();
        await expect(this.ItemPage).toBeExisting();
        await browser.back();
        await expect(this.bikeLightPage).toBeExisting();
        await this.bikeLightPage.click();
        await expect(this.ItemPage).toBeExisting();
        await browser.back();
        await expect(this.onsiePage).toBeExisting();
        await this.onsiePage.click();
        await expect(this.ItemPage).toBeExisting();
        await browser.back();
        browser.pause(500);
        await expect(this.allThingsTPage).toBeExisting();
        await this.allThingsTPage.click();
        await expect(this.AllThingsPage).toBeExisting();
        browser.pause(500);
        await browser.back();
        await expect(this.FleecePage).toBeExisting();
        await this.FleecePage.click();
        await expect(this.ItemPage).toBeExisting();
        await browser.back();


        
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