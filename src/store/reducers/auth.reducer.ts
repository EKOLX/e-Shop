import { AuthAction } from "../actions/auth.action";

interface AuthState {
    isAuth: boolean;
}

const initialState: AuthState = { isAuth: false };

export const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'AUTH_SUCCESS':
            return {
                isAuth: true
            };
        default: return state;
    }
};