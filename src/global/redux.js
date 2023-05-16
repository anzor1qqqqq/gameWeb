import { createSlice, configureStore } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'globalInfo',
    initialState: {
        lang: 'RU',
        valute: '₽',
        basket: [],
        favority: [],
    },
    reducers: {
        changeValute: (state, action) => {
            if (state.valute !== action.payload) state.valute = action.payload;
        },

        changeLang: (state, action) => {
            if (state.lang !== action.payload) state.lang = action.payload;
        },

        addFavorite: (state, action) => {
            let bool = true;

            state.favority.find(item => {
                if (item === action.payload) {
                    alert('Данный товар уже сохранен в избранном');
                    bool = false;
                } 
            })

            bool ? state.favority.push(action.payload) : '';
        },

        addBusket: (state, action) => {
            let bool = true;

            const newObj = state.basket.filter(item => {
                if (item.id === action.payload) {
                    bool = false;

                    item.counter++;
                    return item;
                };

                return item;
            });

            bool ? state.basket.push({id: action.payload, counter: 1}) : state.basket = newObj;
        }
    }
});

export const store = configureStore({
    reducer: slice.reducer,
});

export const { changeLang, changeValute, addFavorite, addBusket } = slice.actions;
