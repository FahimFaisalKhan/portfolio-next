import { createSlice } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import counterSlice from './counterSlice'



const initialState = {
    curPageSections: [],
    curSection: ""
}

export const sectionsSlice = createSlice({

    name: "pageSections",
    initialState,
    reducers: {
        setSections: (state, action) => {
            state.curPageSections = action.payload
        },
        setCurSection: (state, action) => {
            state.curSection = action.payload
        }
    }
})

export const { setSections, setCurSection } = sectionsSlice.actions
export default sectionsSlice.reducer