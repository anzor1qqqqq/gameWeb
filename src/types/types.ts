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