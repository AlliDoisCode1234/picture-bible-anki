import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    bibleVersionId: '685d1470fe4d5c3b-01'
}

const bibleSlice = createSlice({
    name: 'bible',
    initialState,
    reducers: {
        setBibleVersionId: (state, action) => {
            state.bibleVersionId = action.payload.bibleVersionId
        }
    }
});

export const { setBibleVersionId } = bibleSlice.actions

export const selectBibleVersionId = state => state.bible.bibleVersionId

export default bibleSlice.reducer