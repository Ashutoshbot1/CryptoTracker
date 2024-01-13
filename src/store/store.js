import { configureStore } from "@reduxjs/toolkit";
import WatchlistSlice from "./slices/WatchlistSlice";

const store=configureStore({
    reducer:{
        watchlist:WatchlistSlice,
    }
});

export default store;