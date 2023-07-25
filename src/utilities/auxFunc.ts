import { TLocalStorage, IMinMax} from "../types/types"

type MethodFetch = 'certain' | 'all' | 'random';

export const dataFetch = async(method: MethodFetch, id: number = 0): Promise<TLocalStorage | TLocalStorage[] | undefined> => {
    const data: TLocalStorage[] = await fetch('../src/json/data-base.json')
    .then(response => response.json())
    .then(obj => obj);

    if (method === 'all') {
        return data;
    } else if (method === 'certain') {
        return data[id];
    } else if (method === 'random') {
        const arrRandomNum: number[] = generRandomNum(id);

        const arr = arrRandomNum.map(item => data[item])
        
        return arr;
    };
};

function generRandomNum(id: number): number[] {
    const arr: number[] = [];

    while(arr.length < 4) {
        const randomNum = Math.floor(Math.random() * 10);

        if (arr.indexOf(randomNum) === -1 && id !== randomNum) {
            arr.push(randomNum);
        };
    };

    return arr;
};

export const getSalePrice = (price: number, sale: number): number => {
    return price - (price * (sale / 100));
}

export function minMaxPrice(data: TLocalStorage[]): IMinMax {
    let min: number = 0;
    let max: number = 0;

    data.forEach((item, i) => {
        let numPrice: number = item.price;

        if (item.sale !== 0) numPrice = getSalePrice(item.price, item.sale);

        if (i === 0) {
            min = numPrice;
            max = numPrice;
        } else if (numPrice < min) {
            min = numPrice;
        } else if (numPrice > max) {
            max = numPrice;
        };
    });

    return {
        min,
        max,
    };
};