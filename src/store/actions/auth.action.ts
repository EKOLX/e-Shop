import * as SecureStore from 'expo-secure-store';
import { Dispatch } from "redux";

import * as authService from '../../services/auth.service';
import User from '../../models/data/User';

interface InProgressAction {
    type: 'AUTH_IN_PROGRESS';
}

interface SuccessAction {
    type: 'AUTH_SUCCESS';
    user: User;
}

interface FailedAction {
    type: 'AUTH_FAILED';
    errorMessage: string | null;
}

export type AuthAction = InProgressAction | SuccessAction | FailedAction;

export const checkAuth = () =>
    async (dispatch: Dispatch<AuthAction>) => {
        dispatch({ type: 'AUTH_IN_PROGRESS' });

        const userJson = await SecureStore.getItemAsync('USER');
        const user = userJson ? JSON.parse(userJson) : null;

        user ? dispatch({ type: 'AUTH_SUCCESS', user }) : dispatch({ type: 'AUTH_FAILED', errorMessage: null });
    };

export const signIn = (username: string, password: string) =>
    async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({ type: 'AUTH_IN_PROGRESS' });

            const user = await authService.signInAsync(username, password);
            await SecureStore.setItemAsync('USER', JSON.stringify(user));

            user ? dispatch({ type: 'AUTH_SUCCESS', user }) : dispatch({ type: 'AUTH_FAILED', errorMessage: 'username or password is invalid' });
        } catch (error) {
            dispatch({ type: 'AUTH_FAILED', errorMessage: 'username or password is invalid' });
        }
    };

export const signOut = () =>
    async (dispatch: Dispatch<AuthAction>) => {
        await SecureStore.deleteItemAsync('USER');
        dispatch({ type: 'AUTH_FAILED', errorMessage: null });
    };