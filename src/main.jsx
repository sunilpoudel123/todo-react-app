import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux';
import {configureStore} from "@reduxjs/toolkit";
import './index.css'
import App from './App.jsx'

const store = configureStore({
    reducer: {},
});

createRoot(document.getElementById('root')).render(<StrictMode>
    <Provider store={store}>
        <App/>
    </Provider>
</StrictMode>,)
