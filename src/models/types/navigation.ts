import { DrawerScreenProps } from "@react-navigation/drawer";

export type CustomerDrawerParamList = {
    Products: undefined;
    Cart: undefined;
};

export type CustomerDrawerScreenProps<Screen extends keyof CustomerDrawerParamList> =
    DrawerScreenProps<CustomerDrawerParamList, Screen>;