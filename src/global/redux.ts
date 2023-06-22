import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { IStateStore, ILoaderData, TLocalStorage } from "../types/types";
import { saveBasket } from "./localStorage/saveBasket";

const localBasket: ILoaderData[] = JSON.parse(localStorage.getItem('basket') || '1') && [];

const slice = createSlice({
    name: 'globalInfo',
    initialState: {
        lang: 'RU',
        valute: '₽',
        basket: localBasket,
        sumProduct: 0,
        favority: [],
    },
    reducers: {
        changeValute: (state, action) => {
            if (state.valute !== action.payload) state.valute = action.payload;
        },

        changeLang: (state, action) => {
            if (state.lang !== action.payload) state.lang = action.payload;
        },

        addFavorite: (state: IStateStore, action: PayloadAction<number>) => {
            let bool = true;

            state.favority.find(item => {
                if (item === action.payload) {
                    bool = false;
                } 
            })

            bool ? state.favority.push(action.payload) : '';
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

            saveBasket(obj);
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

export const { changeLang, changeValute, addFavorite, addBusket, removeProductBasket, minusCounter, plusCounter } = slice.actions;