import * as authService from "./auth.service";

describe('Auth Service', () => {
    it('signIn returns true if username and password are valid', async () => {
        const isAuth = await authService.signIn('customer_1', 'c1234r');
        expect(isAuth).toBeTruthy();
    });

    it('signIn returns false if username or password is invalid', async () => {
        let isAuth = true;

        isAuth = await authService.signIn('customer_1', '123456');
        expect(isAuth).toBeFalsy();

        isAuth = await authService.signIn('customer_3', 'c1234r');
        expect(isAuth).toBeFalsy();
    });
});