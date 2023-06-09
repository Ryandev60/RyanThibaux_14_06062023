import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key:'hrnet',
    storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export const persistor = persistStore(store);



