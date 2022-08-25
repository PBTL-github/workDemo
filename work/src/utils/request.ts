import axios from "axios";

export const apiHost = "localhost:5173";
//务必要去vite.config.ts映射接口

//1. 创建axios对象
const service = axios.create({
    baseURL: `http://${apiHost}`,
});

// 请求拦截器
service.interceptors.request.use(
    (config) => {
        console.log("request", config);
        return config;
    },
    (error) => {
        console.log("request", error);
        return Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    (res) => {
        if (res.status !== 200)
            return Promise.reject(new Error(`response code: ${res.status}`));

        console.log("response", res);
        return res;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

export { service };
