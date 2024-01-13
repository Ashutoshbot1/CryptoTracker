import { createSlice } from "@reduxjs/toolkit";

const WatchlistSlice = createSlice({
  name: "watchlist",
  initialState: [],
  reducers: {
    addWatchlist(state, action) {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
        localStorage.setItem("watchlist", JSON.stringify(state));
      }
    },
    deleteWatchlist(state, action) {
      let newState = state.filter((coin) => coin !== action.payload);
      localStorage.setItem("watchlist", JSON.stringify(newState));
      return newState;
    },
  },
});

export default WatchlistSlice.reducer;
export const { addWatchlist, deleteWatchlist } = WatchlistSlice.actions;
