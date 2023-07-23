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

export function minMaxPrice(data: TLocalStorage[]): IMinMax {
    let min = 0;
    let max = 0;

    data.forEach((item, i) => {
        if (i === 0) {
            min = item.price;
            max = item.price;
        } else if (item.price < min) {
            min = item.price;
        } else if (item.price > max) {
            max = item.price;
        };
    });

    return {
        min,
        max,
    };
};