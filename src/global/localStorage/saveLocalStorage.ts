import { ILoaderData, TLocalStorage } from "../../types/types"

export const saveBasket = (obj: ILoaderData[]) => {
    localStorage.setItem('basket', JSON.stringify(obj))
} 

export const saveFavority = (obj: TLocalStorage[]) => {
    localStorage.setItem('favority', JSON.stringify(obj))
} 