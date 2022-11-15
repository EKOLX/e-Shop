import { DrawerScreenProps } from "@react-navigation/drawer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Order from "../data/Order";
import Product from "../data/Product";

export type RootStackParamList = {
    Auth: undefined;
    Root: undefined;
    ProductEdit: { product: Product };
    CartDetails: { order: Order };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, Screen>;

export type RootDrawerParamList = {
    Products: undefined;
    Carts: undefined;
};

export type RootDrawerScreenProps<Screen extends keyof RootDrawerParamList> =
    DrawerScreenProps<RootDrawerParamList, Screen>;