export class IntlNum {
    constructor(num, percent) {
        this.num = num;
        this.percent = percent;
    };

    getPrice() {
        const price = Intl.NumberFormat("ru", {
            maximumFractionDigits: 0,
            style: 'currency',
            currency: 'RUB',
        });

        return price.format(this.num);
    };

    getProcent() {
        const percentNum = Intl.NumberFormat("ru", {
            style: 'percent',
        });

        return percentNum.format(this.percent / 100);
    };

    getPriceSale() {
        const price = Intl.NumberFormat("ru", {
            maximumFractionDigits: 0,
            style: 'currency',
            currency: 'RUB',
        });

        return price.format(this.num - (this.num * (this.percent / 100)));
    };
};

