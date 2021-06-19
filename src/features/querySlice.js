import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    queryInput: null
}

const querySlice = createSlice({
    name: 'query',
    initialState,
    reducers: {
        setQueryActive: (state, action) => {
            state.queryInput = action.payload.queryInput
        },
        setQueryInactiveState: state => {
            state.queryInput = null
        }
    }
});

export const { setQueryActive, setQueryInactiveState } = querySlice.actions

export const selectQuery = state => state.query.queryInput

export default querySlice.reducer