import { configureStore } from '@reduxjs/toolkit'
import { makePublicRouterInstance } from 'next/dist/client/router';
import navThemeReducer from '../components/navbar/navThemeSlice'

export function initStore() {
    return configureStore({
        reducer: {
          navTheme: navThemeReducer
        }
      });
}

const store = initStore();

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;