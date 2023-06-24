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
    tags: string[],
    ganre: string,
    counter: number,
}

export interface IpropsSVG {
    aboutBasket: ILoaderData | undefined;
    aboutFavority: TLocalStorage | undefined;
    callbackBasket: (idProduct: number, target: HTMLElement) => void;
    callbackFavor: (idProduct: number, target: HTMLElement) => void;
    index: number;
}

export type TLocalStorage = Omit<ILoaderData, 'counter'>

export interface IBasketRender extends ILoaderData {
    counter: number,
}

export interface IpropsList {
    dataB: ILoaderData[]
}

export interface IPropsBtnActive {
    addBusketProduct: (idProduct: number, target: HTMLElement) => void,
    addFavorProduct: (idProduct: number, target: HTMLElement) => void,
    data: ILoaderData,
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

export interface IpropsCard extends IpropsList {
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
    tags: string,
    counter: number,
    checkBtnLike: TLocalStorage | undefined,
}

export type IPropsFavorityCard = Omit<IPropsBasketCard, 'checkBtnLike' | 'counter'>

export interface IIntlString {
    one: string,
    few: string,
    many: string,
}