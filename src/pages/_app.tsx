import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Component } from 'react'
import App from 'next/app'
import { Provider, useSelector } from 'react-redux'
import store from '../app/store'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

library.add(fab)
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return  (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
