import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

import { IStateStore, ILoaderData, TLocalStorage } from "../types/types";

import { saveBasket, saveFavority } from "./localStorage/saveLocalStorage";

const localBasket: ILoaderData[] = JSON.parse(localStorage.getItem('basket') as string) || [];

const localFavority: TLocalStorage[] = JSON.parse(localStorage.getItem('favority') as string) || [];

const slice = createSlice({
    name: 'globalInfo',
    initialState: {
        lang: 'RU',
        valute: '₽',
        basket: localBasket,
        sumProduct: 0,
        favority: localFavority,
    },
    reducers: {
        changeValute: (state, action) => {
            if (state.valute !== action.payload) state.valute = action.payload;
        },

        changeLang: (state, action) => {
            if (state.lang !== action.payload) state.lang = action.payload;
        },

        addFavorite: (state: IStateStore, action: PayloadAction<TLocalStorage>) => {
            let bool = true;

            state.favority.find(item => {
                if (item.id === action.payload.id) bool = false;
            })

            bool ? state.favority.push(action.payload) : '';
            
            saveFavority(state.favority)
        },

        addBusket: (state: IStateStore, action: PayloadAction<TLocalStorage>) => {
            let bool = true;

            const newObj = state.basket.filter((item: ILoaderData): ILoaderData => {
                if (item.id === action.payload.id) {
                    bool = false;

                    item.counter++;
                    return item;
                };

                return item;
            });

            bool ? state.basket.push({...action.payload, counter: 1}) : state.basket = newObj;
            
            saveBasket(state.basket);
        },

        removeProductBasket: (state: IStateStore, action: PayloadAction<number>) => {
            const obj = state.basket.filter(item => item.id !== action.payload);

            state.basket = obj;

            saveBasket(state.basket);
        },

        removeProductFavority: (state: IStateStore, action: PayloadAction<number>) => {
            const obj = state.favority.filter(item => item.id !== action.payload);

            state.favority = obj;

            saveFavority(state.favority);
        },

        minusCounter: (state: IStateStore, action: PayloadAction<number>) => {
            state.basket.forEach((item, index) => {
              if (item.id === action.payload) {
                if (item.counter === 1) {
                    state.basket.splice(index, 1);

                    saveBasket(state.basket);
                } else {
                    state.basket[index].counter--;

                    saveBasket(state.basket);
                }
              }  
            })
        },

        plusCounter: (state: IStateStore, action: PayloadAction<number>) => {
            state.basket.forEach((item, index) => {
              if (item.id === action.payload) {
                state.basket[index].counter++;

                saveBasket(state.basket);
              }  
            })
        }
    }
});

export const store = configureStore({
    reducer: slice.reducer,
});

export const { changeLang, changeValute, addFavorite, addBusket, removeProductBasket, removeProductFavority, minusCounter, plusCounter } = slice.actions;