import { Dispatch } from "redux";

import * as authService from '../../services/auth.service';

interface SuccessAction {
    type: 'AUTH_SUCCESS';
}

interface FailedAction {
    type: 'AUTH_FAILED';
}

export type AuthAction = SuccessAction | FailedAction;

export const signIn = (username: string, password: string) =>
    async (dispatch: Dispatch<AuthAction>) => {
        try {
            await authService.signIn(username, password);

            dispatch({ type: 'AUTH_SUCCESS' });
        } catch (error) {
            console.error('signIn =>', error);

            dispatch({ type: 'AUTH_FAILED' });
        }
    };