import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { IStateStore, IBasketStore } from "../types/types";
import { saveBasket } from "./localStorage/saveBasket";

const localBasket: IBasketStore[] = JSON.parse(localStorage.getItem('basket') || '') || [];

const slice = createSlice({
    name: 'globalInfo',
    initialState: {
        lang: 'RU',
        valute: '₽',
        basket: localBasket,
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

        addBusket: (state: IStateStore, action: PayloadAction<number>) => {
            let bool = true;

            const newObj = state.basket.filter((item: IBasketStore): IBasketStore => {
                if (item.id === action.payload) {
                    bool = false;

                    item.counter++;
                    return item;
                };

                return item;
            });

            bool ? state.basket.push({id: action.payload, counter: 1}) : state.basket = newObj;
            
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
                    return 0;
                } else {
                    state.basket[index].counter--;
                    return 0;
                }
              }  
            })
        },

        plusCounter: (state: IStateStore, action: PayloadAction<number>) => {
            state.basket.find((item, index) => {
              if (item.id === action.payload) {
                state.basket[index].counter++;
              }  
            })
        }
    }
});

export const store = configureStore({
    reducer: slice.reducer,
});

export const { changeLang, changeValute, addFavorite, addBusket, removeProductBasket, minusCounter, plusCounter } = slice.actions;