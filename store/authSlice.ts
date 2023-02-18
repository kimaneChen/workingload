import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
// eslint-disable-next-line import/no-cycle
import { AppState } from './store'

export interface AuthState {
  authState: boolean
}

const initialState: AuthState = {
  authState: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.authState = action.payload
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({
      ...state,
      ...action.payload.auth,
    }),
  },
})

export const { setAuthState } = authSlice.actions

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const selectAuthState = (state: AppState) => state.auth.authState

export default authSlice.reducer
