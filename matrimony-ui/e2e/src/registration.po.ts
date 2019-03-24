import { browser, element, by } from 'protractor';

export class RegistrationPage {
    navigateTo() {
        return browser.get('/registration');
    }

    getRegistrationHeaderText() {
        // let registerBtn = element(by.id('register'));
        // registerBtn.click();
        return element(by.className('matr-reg-header')).getText();
    }
}