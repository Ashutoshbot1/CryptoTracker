import { configureStore } from "@reduxjs/toolkit";
import WatchlistSlice from "./slices/WatchlistSlice";
import apiLoadSlice from "./slices/apiLoadSlice";

const store=configureStore({
    reducer:{
        watchlist:WatchlistSlice,
        apiLoad:apiLoadSlice,
    }
});

export default store;