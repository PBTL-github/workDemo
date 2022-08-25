import { service } from "../request";

export function register(data: { username: string; password: string }) {
    return service.request({
        method: "post",
        url: "/api/user/register",
        data,
    });
}

export function login(data: { username: string; password: string }) {
    return service.request({
        method: "post",
        url: "/api/user/login",
        data,
    });
}
