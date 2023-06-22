import { TLocalStorage } from "../types/types"

type Method = 'certain' | 'all';

export const dataFetch = async(method: Method, id?: number):  Promise<TLocalStorage | TLocalStorage[] | undefined> => {
    if (method === 'all') {
        const data: TLocalStorage[] = await fetch('src/json/data-base.json')
        .then(response => response.json())
        .then(obj => obj);

        return data;
    } else if (method === 'certain') {
        const data: TLocalStorage[] = await fetch('src/json/data-base.json')
        .then(response => response.json())
        .then(obj => obj);

        const certainData = data.find(item => item.id === id)

        return certainData;
    };
};