import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    scrollDirection: "DOWN",
}
export const scrollSlice = createSlice({
    name: "trackScroll",
    initialState,
    reducers: {
        setScrollDirection: (state, action) => {
            state.scrollDirection = action.payload
        },
    },
})
export const { setScrollDirection } = scrollSlice.actions
export default scrollSlice.reducer
