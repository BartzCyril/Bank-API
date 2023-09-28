import {configureStore, createSlice} from "@reduxjs/toolkit";

type stateStore = {
    token: string | null,
    firstName: string | null,
    lastName: string | null,
}

const initialState: stateStore = {
    token: null,
    firstName: null,
    lastName: null,
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        changeFirstName: (state: stateStore, action) => {state.firstName = action.payload},
        changeLastName: (state: stateStore, action) => {state.lastName = action.payload},
        userLogOut: () => {return  initialState},
        userLogIn: (_state: stateStore, action) => {return action.payload},
    }
})

export const {changeFirstName, changeLastName, userLogOut, userLogIn} = userSlice.actions

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
})