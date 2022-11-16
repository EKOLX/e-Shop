import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "../store/AppState";
import * as authAction from "../store/actions/auth.action";
import * as productAction from "../store/actions/product.action";
import * as orderAction from "../store/actions/order.action";

SplashScreen.preventAutoHideAsync();

export const useStoreLoad = () => {
    const user = useSelector((state: AppState) => state.auth.user);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authAction.checkAuth());
    }, []);

    useEffect(() => {
        (async () => {
            if (user) {
                await dispatch(productAction.loadAll());
                await dispatch(orderAction.loadAll());
            }
            SplashScreen.hideAsync();
        })();
    }, [user]);
};