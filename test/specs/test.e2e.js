import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import Hamburger from '../pageobjects/Hamburger.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.firstLogin ('standard_user', 'secret_sauce')
    })
    it('Should go through hamburger menu items', async () => {
        await Hamburger.HambMenu()
    })
})