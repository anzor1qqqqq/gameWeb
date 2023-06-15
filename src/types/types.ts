export interface IStateStore {
    lang: string;
    valute: string;
    basket: {
        id: number;
        counter: number;
    }[];
    favority: number[];
}

export interface IBasketStore {
    id: number;
    counter: number;
}

export interface IpropsSVG {
    aboutBasket: IBasketStore;
    aboutFavority: boolean;
    callbackBasket: (idProduct: number, target: EventTarget) => void;
    callbackFavor: (idProduct: number, target: EventTarget) => void;
    index: number;
}