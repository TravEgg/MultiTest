import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.loginLoop('secret_sauce')
        await LoginPage.badLoginLoop('Scret_sauce')

    })
})
        // Positive Test Standard User
        //await LoginPage.open()

        /*await LoginPage.loginLoop('secret_sauce')
        await expect(SecurePage.productPage).toBeExisting()
        await expect(SecurePage.productPage).toHaveText(
            expect.stringContaining('Swag Labs'))
        
        //Positive Test Locked Out User
        await LoginPage.open()
        
        await LoginPage.login('locked_out_user', 'secret_sauce')
        await expect(SecurePage.errorPopup).toBeExisting()
        await expect(SecurePage.errorPopup).toHaveText(
            expect.stringContaining('Epic sadface: Sorry, this user has been locked out'))

        // Positive Test Problem User
        await LoginPage.open()

        await LoginPage.login('problem_user', 'secret_sauce')
        await expect(SecurePage.productPage).toBeExisting()
        await expect(SecurePage.productPage).toHaveText(
            expect.stringContaining('Swag Labs'))

        // Positive Test Performance Glitch User
        await LoginPage.open()

        await LoginPage.login('performance_glitch_user', 'secret_sauce')
        await expect(SecurePage.productPage).toBeExisting()
        await expect(SecurePage.productPage).toHaveText(
            expect.stringContaining('Swag Labs'))

        // Positive Test Error User
        await LoginPage.open()

        await LoginPage.login('error_user', 'secret_sauce')
        await expect(SecurePage.productPage).toBeExisting()
        await expect(SecurePage.productPage).toHaveText(
            expect.stringContaining('Swag Labs'))
 
        // Positive Test Visual User
        await LoginPage.open()

        await LoginPage.login('visual_user', 'secret_sauce')
        await expect(SecurePage.productPage).toBeExisting()
        await expect(SecurePage.productPage).toHaveText(
            expect.stringContaining('Swag Labs'))
            
        //Negative Test Standard User
        await LoginPage.open()

        await LoginPage.badLogin('standard_user', 'ScretSaucer')
        await expect(SecurePage.errorPopup).toBeExisting()
        await expect(SecurePage.errorPopup).toHaveText(
            expect.stringContaining('Epic sadface: Username and password do not match any user in this service'))
    })
})
*/

