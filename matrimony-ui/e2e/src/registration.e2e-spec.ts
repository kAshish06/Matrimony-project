import { RegistrationPage } from './registration.po';

describe('registration page', () => {
    let registrationPage: RegistrationPage;

    beforeEach(() => {
        registrationPage = new RegistrationPage();
    })

    it('should display registration page header', () => {
        registrationPage.navigateTo();
        expect(registrationPage.getRegistrationHeaderText()).toEqual('Registration');
    })
})