export class IntlNum {
    constructor(public price: number, public percent: number) {};

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

