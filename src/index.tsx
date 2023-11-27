import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {DataStoreProvider} from './store/context'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import {defaultTheme} from "./theme.colors";
import '@fontsource/roboto/400.css'

const theme = extendTheme(defaultTheme)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <DataStoreProvider>
        <ChakraProvider theme={theme}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ChakraProvider>
    </DataStoreProvider>

);

reportWebVitals();
