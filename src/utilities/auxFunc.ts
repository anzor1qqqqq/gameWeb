import { TLocalStorage, IMinMax, ISetingSort, ILoaderData } from "../types/types"

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
        const randomNum = Math.floor(Math.random() * 14);

        if (arr.indexOf(randomNum) === -1 && id !== randomNum) {
            arr.push(randomNum);
        };
    };

    return arr;
};

export const getSalePrice = (price: number, sale: number): number => {
    return parseInt(String(price - (price * (sale / 100))));
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

export const throtling = (func: () => void, ms: number = 300) => {
    let timer: any;

    return (...args: any) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func.apply(this, args);
        }, ms);
    };
};

export const allParamSort = (objProduct: ILoaderData[], objSort: ISetingSort): ILoaderData[] => {
    let resulArr: ILoaderData[] = objProduct;

    resulArr = resulArr.filter(item => item.sale 
        ? parseInt(String(item.price - (item.price * (item.sale / 100)))) >= objSort.value.min_price && 
        parseInt(String(item.price - (item.price * (item.sale / 100)))) <= objSort.value.max_price
        : item.price >= objSort.value.min_price && item.price <= objSort.value.max_price
    );

    if (objSort.activate.length !== 0) {
        resulArr = resulArr.filter(item => item.tags[1] === 'Ключ' && objSort.activate.includes('key')
        ? true
        : item.tags[1] === 'Буст' && objSort.activate.includes('bust') 
        ? true
        : item.tags[1] === 'Аккаунт' && objSort.activate.includes('account') 
        ? true
        : false
        );
    };

    if (objSort.platform.length !== 0 && resulArr.length !== 0) {
        resulArr = resulArr.filter(item => item.tags[0] === 'Steam' && objSort.platform.includes('steam')
        ? true
        : item.tags[0] === 'Origin' && objSort.platform.includes('origin') 
        ? true
        : item.tags[0] === 'Microsoft Store' && objSort.platform.includes('microsoft_store') 
        ? true
        : false
        );
    };

    if (objSort.ganre.length !== 0 && resulArr.length !== 0) {
        resulArr = resulArr.filter(item => item.ganre === 'Песочницы' && objSort.ganre.includes('sandbox')
        ? true
        : item.ganre === 'Инди' && objSort.ganre.includes('indie') 
        ? true
        : item.ganre === 'Приключенческие игры' && objSort.ganre.includes('aventure') 
        ? true
        : item.ganre === 'Платформер' && objSort.ganre.includes('platformer') 
        ? true
        : item.ganre === 'Головоломки' && objSort.ganre.includes('puzzle')  
        ? true 
        : item.ganre === 'Гонки' && objSort.ganre.includes('races') 
        ? true
        : item.ganre === 'Экшн' && objSort.ganre.includes('action') 
        ? true
        : false
        );
    };

    if (objSort.activeBtn.length !== 0 && resulArr.length !== 0) {
        resulArr = resulArr.filter(item => item.sale !== 0 && objSort.activeBtn.includes('sale')
        ? true
        : item?.category === 'Новинкa' && objSort.activeBtn.includes('new') 
        ? true
        : item?.category === 'Хит продаж' && objSort.activeBtn.includes('hit') 
        ? true
        : false
        );
    };

    return resulArr;
};