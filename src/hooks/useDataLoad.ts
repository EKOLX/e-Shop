import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useDispatch } from "react-redux";

import * as authAction from "../store/actions/auth.action";
import * as productAction from "../store/actions/product.action";

SplashScreen.preventAutoHideAsync();

export const useDataLoad = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            await dispatch(authAction.checkAuth());
            await dispatch(productAction.loadAll());

            SplashScreen.hideAsync();
        })();
    }, []);
};