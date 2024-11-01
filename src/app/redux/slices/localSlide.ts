import { createSlice } from '@reduxjs/toolkit'

interface CounterState {
    actionNav: any
}

const initialState: CounterState = {
    actionNav: 0,
}

export const localSlice = createSlice({
    name: 'localSlice',
    initialState,
    reducers: {
        setAction: (state, action) => {
            state.actionNav = action.payload
        },

    },
    extraReducers: (builder) => {

    },
})

const { reducer, actions } = localSlice
export const { setAction } = actions;
export default reducer;