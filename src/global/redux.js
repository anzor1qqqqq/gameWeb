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
    }
});

export const store = configureStore({
    reducer: slice.reducer,
});

export const { changeLang, changeValute } = slice.actions;
