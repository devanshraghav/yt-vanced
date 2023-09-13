import {configureStore} from "@reduxjs/toolkit";
import ToogleMenuSlice from "./ToogleMenuSlice";
import SearchCacheSlice from "./SearchCacheSlice";

const store = configureStore({
    reducer:{
        MenuToogler: ToogleMenuSlice,
        searchCache: SearchCacheSlice,
    }
});

export default store;