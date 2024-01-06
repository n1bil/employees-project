import { User } from '../../types';
import { api } from './api';


export type RequestUserData = Omit<User, 'id'>
type ResponseLoginData = User & { token: string }

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<ResponseLoginData, RequestUserData>({
            query: (requestUserData) => ({ url: '/user/login', method: 'POST', body: requestUserData }),
        }),
        register: builder.mutation<ResponseLoginData, RequestUserData>({
            query: (requestUserData) => ({ url: '/user/register', method: 'POST', body: requestUserData }),
        }),
        current: builder.query<ResponseLoginData, void>({
            query: () => ({ url: '/user/current', method: 'GET' }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useCurrentQuery } = authApi;

export const { endpoints: { login, register, current } } = authApi;