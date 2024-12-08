import { createSlice } from '@reduxjs/toolkit'

interface CounterState {
    actionNav: any
}

const initialState: CounterState = {
    actionNav: 3,
}

export const localSlice = createSlice({
    name: 'localSlice',
    initialState,
    reducers: {
        setActionNav: (state, action) => {
            state.actionNav = action.payload
        },

    },
    extraReducers: (builder) => {

    },
})

const { reducer, actions } = localSlice
export const { setActionNav } = actions;
export default reducer;