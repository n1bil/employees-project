import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL + '/api',
    prepareHeaders(headers, api) {
        const token = (api.getState() as RootState).auth.user?.token || localStorage.getItem('token');

        if (token && token !== null) {
            headers.set('authorization', `Bearer ${token}`);
        } 
    },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
    reducerPath: 'splitApi',
    baseQuery: baseQueryWithRetry,
    refetchOnMountOrArgChange: true,
    endpoints: () => ({}),
});