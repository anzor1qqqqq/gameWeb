import { ComponentOptionsType as FancyboxOptionsType } from "@fancyapps/ui/types/Fancybox/options";

export interface IStateStore {
    lang: string,
    valute: string,
    basket: ILoaderData[],
    sumProduct: number,
    favority: TLocalStorage[],
}

export interface ILoaderData {
    id: number,
    name: string,
    price: number,
    sale: number,
    img: string,
    wallpaper: string[],
    gallery: string[],
    tags: string[],
    ganre: string,
    counter: number,
}

export type TLocalStorage = Omit<ILoaderData, 'counter'>

export type TRandomList = Pick<ILoaderData, 'id'>

export interface ILoader {
    loader: TLocalStorage;
}

export interface IpropsSVG {
    aboutBasket: ILoaderData | undefined;
    aboutFavority: TLocalStorage | undefined;
    callbackBasket: (idProduct: number, target: HTMLElement) => void;
    callbackFavor: (idProduct: number, target: HTMLElement) => void;
    index: number;
}

export interface IBasketRender extends ILoaderData {
    counter: number,
}

export interface IpropsList {
    dataB: ILoaderData[]
}

export interface IPropsBtnActive {
    addBusketProduct: (idProduct: number, target: HTMLElement) => void,
    addFavorProduct: (idProduct: number, target: HTMLElement) => void,
    data: TLocalStorage,
    aboutBasket: ILoaderData | undefined,
    aboutFavority: TLocalStorage | undefined,
    index: number,
    spanText?: string,
}

export interface IPropsHeaderSearch {
    callback: () => void;
}

export interface IErrorPage {
    data: string,
    error: string,
    internal: boolean,
    status: number,
    statusText: string,
}

export interface IpropsCard {
    dataB: TLocalStorage,
    index: number,
    spanText?: string,
}

export interface IPropsBasketList {
    loader: ILoaderData[]
}

export interface IPropsBasketCard {
    nameProduct: string,
    id: number,
    price: number,
    sale: number,
    img: string,
    tags: string | string[],
    counter: number,
    checkBtnLike: TLocalStorage | undefined,
};

export type IPropsFavorityCard = Omit<IPropsBasketCard, 'checkBtnLike' | 'counter'>

export type IPropsProductBtnActive = IPropsFavorityCard & {
    ganre: string,
    gallery: string[]
}

export interface IIntlString {
    one: string,
    few: string,
    many: string,
}

export interface IFancyProps {
    children?: React.ReactNode;
    delegate?: string;
    options?: Partial<FancyboxOptionsType>;
}

export interface IStateAboutBasketFavor {
    basket: ILoaderData | undefined,
    favor: TLocalStorage | undefined, 
}

export interface IPropsFancy {
    gallery: string[],
}