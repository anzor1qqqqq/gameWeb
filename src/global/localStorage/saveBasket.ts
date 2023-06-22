import { ILoaderData } from "../../types/types"

export const saveBasket = (obj: ILoaderData[]) => {
    localStorage.setItem('basket', JSON.stringify(obj))
} 