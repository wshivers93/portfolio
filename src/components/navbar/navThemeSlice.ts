import { createSlice } from '@reduxjs/toolkit'
import type { AppState } from '../../app/store'

export interface toggleState {
    value: 'dark' | 'light';
}

const initialState : toggleState = {
    value: 'dark',
}

export const slice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        dark: state => {
            state.value = 'dark';
        },
        light: state => {
            state.value = 'light';
        },
    },
});

export const { dark, light } = slice.actions;

export const selectTheme = (state : AppState) => state.navTheme.value;

export default slice.reducer;