import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import Base from './Base.js';
import { expect } from '@wdio/globals'
import ShoppingCart from './ShoppingCart.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutPage {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#first-name');
    }
    
    get inputLastName () {
        return $('#last-name');
    }
    
    get inputZip() {
        return $('#postal-code')
    }

    get cancelButton () {
        return $('#cancel');
    }

    get checkoutButton() {
        return $('#checkout');
    }

    get continueButton() {
        return $('#continue')
    }

    get finishButton() {
        return $('#finish')
    }

    get completeHeader() {
        return $('#checkout_complete_container')
    }

    get backHome() {
        return $('#back-to-products')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using corect username and password and then again with a bad password
     */
    async checkout (firstname, lastname, Zip) {
        // Checkout button 
        await expect(this.checkoutButton).toBeExisting();
        await this.checkoutButton.click();
        //Fill in Customer info
        await this.inputUsername.setValue(firstname);
        await this.inputLastName.setValue(lastname);
        await this.inputZip.setValue(Zip);
        //Cancel button test
        await this.cancelButton.click();
        await expect(this.checkoutButton).toBeExisting();
        //Return and fill out info again
        await this.checkoutButton.click();
        await this.inputUsername.setValue(firstname);
        await this.inputLastName.setValue(lastname);
        await this.inputZip.setValue(Zip);
        //Continue to checkout
        await this.continueButton.click();
        await expect(this.finishButton).toBeExisting();
        await this.finishButton.click();
        //Return to Main page
        await expect(this.backHome).toBeExisting();
        await this.backHome.click();
    }
    
}


export default new CheckoutPage();

