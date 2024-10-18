import {configureStore} from "@reduxjs/toolkit";
import SlideReducer from "./SlideSlice";

const AppStore = configureStore({
    reducer : {
        slide : SlideReducer,
    }

})

export default AppStore;
