import { IIntlString } from "../types/types";

export class IntlNum {
    constructor(public price: number, public percent: number = 0) {};

    getPrice() {
        const price = new Intl.NumberFormat("ru", {
            maximumFractionDigits: 0,
            style: 'currency',
            currency: 'RUB',
        });

        return price.format(this.price);
    };

    getProcent() {
        const percentNum = new Intl.NumberFormat("ru", {
            style: 'percent',
        });

        return '-' + percentNum.format(this.percent / 100);
    };

    getPriceSale() {
        const price = new Intl.NumberFormat("ru", {
            maximumFractionDigits: 0,
            style: 'currency',
            currency: 'RUB',
        });

        return price.format(this.price - (this.price * (this.percent / 100)));
    };
};

export class IntlString {
    constructor(public value: number, public variants: IIntlString , public locale: string = 'ru-RU'){}

    getWord() {
        const key = new Intl.PluralRules(this.locale).select(this.value) as 'one' | 'few' | 'many';

        return this.variants[key] || '';
    }
};