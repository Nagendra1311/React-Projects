import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import news from "../saga/news.saga";
import { newsReducer } from "../reducer/news.reducer";

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer: newsReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== "production " ? true : false
})

sagaMiddleware.run(news)