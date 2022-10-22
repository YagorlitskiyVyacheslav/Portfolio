import { configureStore, ThunkAction, AnyAction } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
});

export default store;

export type TStore = typeof store;
export type TRootState = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;
export type TAsyncAction = ThunkAction<void, TRootState, unknown, AnyAction>;
export type TSelector<P> = (s: TRootState) => P;
