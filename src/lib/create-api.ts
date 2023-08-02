import {
  fetchBaseQuery,
  createApi as buildApi,
} from "@reduxjs/toolkit/query/react";

// use to code splitting
export function createApi(reducerPath: string, url?: string) {
  return buildApi({
    ...createApiPart(reducerPath, url),
    endpoints: () => ({}),
  });
}

function createApiPart(reducerPath: string, url?: string) {
  return {
    reducerPath,
    baseQuery: fetchBaseQuery({
      baseUrl: url || "https://jsonplaceholder.typicode.com/",
    }),
  };
}
