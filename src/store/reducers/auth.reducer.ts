import { AuthAction } from "../actions/auth.action";
import User from "../../models/User";

interface AuthState {
    inProgress: boolean;
    user?: User | null;
    errorMessage?: string | null;
}

const initialState: AuthState = { inProgress: false };

export const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'AUTH_IN_PROGRESS':
            return {
                inProgress: true,
                errorMessage: null
            };
        case 'AUTH_SUCCESS':
            return {
                inProgress: false,
                user: action.user,
                errorMessage: null
            };
        case 'AUTH_FAILED':
            return {
                inProgress: false,
                user: null,
                errorMessage: action.errorMessage
            }
        default: return state;
    }
};