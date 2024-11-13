import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get productPage() {
        return $('.app_logo');
    }
    get errorPopup() {
        return $('h3')
    }

    open () {
        return super.open();
    }
}

export default new SecurePage();
