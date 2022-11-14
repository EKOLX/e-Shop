import { DrawerScreenProps } from "@react-navigation/drawer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import CartItem from "../data/CartItem";

export type RootStackParamList = {
    Auth: undefined;
    Root: undefined;
    ProductEdit: undefined;
    CartDetails: { items: Array<CartItem> };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, Screen>;

export type RootDrawerParamList = {
    Products: undefined;
    Carts: undefined;
};

export type RootDrawerScreenProps<Screen extends keyof RootDrawerParamList> =
    DrawerScreenProps<RootDrawerParamList, Screen>;