import { Reducer, ReducersMapObject, Middleware } from "@reduxjs/toolkit";
import { pokemonApi } from "./pokemon-api";

interface IProcessedAPIs {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reducer: Reducer<unknown, any> | ReducersMapObject<unknown, any>;
  middleware: Middleware[];
}

const initialProcessedAPIs: IProcessedAPIs = {
  reducer: {},
  middleware: [],
};

const arrRawApis = [pokemonApi];

export const processAPIs = () =>
  arrRawApis.reduce((accApi: IProcessedAPIs, currApi) => {
    return {
      reducer: { ...accApi.reducer, [currApi.reducerPath]: currApi.reducer },
      middleware: [...accApi.middleware, currApi.middleware],
    };
  }, initialProcessedAPIs);
