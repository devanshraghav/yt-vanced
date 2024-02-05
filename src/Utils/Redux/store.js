import {configureStore} from "@reduxjs/toolkit";
import ToogleMenuSlice from "./ToogleMenuSlice";
import SearchCacheSlice from "./SearchCacheSlice";
import VideoListSlice from "./VideoListSlice";

const store = configureStore({
    reducer:{
        MenuToogler: ToogleMenuSlice,
        searchCache: SearchCacheSlice,
        videoList: VideoListSlice,
    }
});

export default store;