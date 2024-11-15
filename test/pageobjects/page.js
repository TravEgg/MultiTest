import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens the base login page
    */
    open () {
        return browser.url('https://www.saucedemo.com/')
    }
     
}
