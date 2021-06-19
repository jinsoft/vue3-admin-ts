import axios from "axios";

export interface AjaxResponse {
  code: number;
  message: string;
  data: any;
}

axios.defaults.baseURL =
  process.env.NODE_ENV == "product"
    ? "//api.ainiok.com/"
    : "//api.test.ainiok.com";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers["token"] = localStorage.getItem("token") || "";

// 添加响应拦截器
// axios.interceptors.response.use(
//   (res: AjaxResponse) => {
//   if (typeof res.data !== "object") {
//     return Promise.reject(res);
//   }
// })

axios.interceptors.response.use(
  function(response) {
    // 2xx 范围内的状态码都会触发该函数。
    return response;
  },
  function(error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    return Promise.reject(error);
  }
);

export default axios;
