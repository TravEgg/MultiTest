import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/Login.js'
import Hamburger from '../pageobjects/Hamburger.js'
import ShoppingCart from '../pageobjects/ShoppingCart.js'
import Checkout from '../pageobjects/Checkout.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.firstLogin ('standard_user', 'secret_sauce')
    })
    it('Should go through hamburger menu items', async () => {
        await Hamburger.hambMenu()
    })
    it('Should add items to cart', async () => {
        await ShoppingCart.cartTest()
    })
    it('Loads the cart page', async () => {
        await Checkout.checkout('Travis', 'Eggett', '84043')
    })
})