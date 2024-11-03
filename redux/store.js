import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./slieces/counterSlice"
import dataReducer from "./slieces/dataSlice"
import sectionsReducer from "./slieces/sectionsSlice"
import scrollReducer from "./slieces/scrollSlice"
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        data: dataReducer,
        pageSections: sectionsReducer,
        trackScroll: scrollReducer,
    },
})
