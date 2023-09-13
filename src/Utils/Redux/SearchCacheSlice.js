import { createSlice } from "@reduxjs/toolkit";

const SearchCacheSlice = createSlice({
  name: "searchCache",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      // state = {...action.payload, ...state}
    //   state = { ...state, ...action.payload };
        state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheResults } = SearchCacheSlice.actions;
export default SearchCacheSlice.reducer;
