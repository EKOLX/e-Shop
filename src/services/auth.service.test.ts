import * as authService from "./auth.service";

describe('Auth Service', () => {
    it('signIn returns true if username and password are valid', async () => {
        const user = await authService.signInAsync('customer_1', 'c1234r');
        expect(user).toBeTruthy();
    });

    it('signIn fails if username or password is invalid', async () => {
        await expect(authService.signInAsync('customer_1', '123456'))
            .rejects
            .toThrow('No such user');

        await expect(authService.signInAsync('customer_3', 'c1234r'))
            .rejects
            .toThrow('No such user');
    });
});