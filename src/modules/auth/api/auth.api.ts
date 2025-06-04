import apiPublic from "../../../shared/lib/api/apiPublic";
import { LoginBody, LoginResponse, RegisterBody, RegisterResponse } from "./auth.api.types";
import { AxiosPromise } from 'axios';

export async function registerApi(body: RegisterBody): AxiosPromise<RegisterResponse> {
    return apiPublic.post('/auth/register', body)
}

export async function loginApi(body: LoginBody): AxiosPromise<LoginResponse> {
    return apiPublic.post('/auth/login', body)
}