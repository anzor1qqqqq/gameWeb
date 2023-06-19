import { IBasketStore } from "../../types/types"

export const saveBasket = (obj: IBasketStore[]) => localStorage.setItem('basket', JSON.stringify(obj))