import { configureStore } from "@reduxjs/toolkit";
import { processAPIs } from "@/lib/api";
import { processSlices } from "@/lib/slice";

const APIs = processAPIs();
const Slices = processSlices();

const makeStore = () => {
  return configureStore({
    reducer: {
      ...Slices,
      ...APIs.reducer,
    },
    devTools: import.meta.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(APIs.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const store = makeStore();
