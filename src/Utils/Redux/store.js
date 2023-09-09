import {configureStore} from "@reduxjs/toolkit";
import ToogleMenuSlice from "./ToogleMenuSlice";

const store = configureStore({
    reducer:{
        appMenu: ToogleMenuSlice,
    }
});

export default store;