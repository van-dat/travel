import axios from "axios";

let token = "";
if (typeof window !== "undefined") {
  token = localStorage.getItem("jwt") || "";
}

const instance = axios.create({
  baseURL: "",
  // timeout: 1000,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

instance.interceptors.request.use(
  function (request) {
    const isPageLogin = window.location.href.indexOf("/login") !== -1;
    if (!token && !isPageLogin) {
      window.location.href = "/login";
    }
    // const token = getTokenInCookie();

    // const newHeaders = {
    //   ...request.headers,
    //   Authorization: token,
    // };

    return request;
  },
  function (error) {
    // Xử lý lỗi
    return Promise.reject(error);
  }
);

// FIXME: check token expired
axios.interceptors.response.use(
  function (response) {
    return response?.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const get = async (url: string, data?: object) => {
  try {
    const result: any = await instance.get(url, data);
    return result?.data;
  } catch (error: any) {
    console.log("=== get error ===", error);
  }
};

export const post = async (url: string, data: object, type?: string) => {
  try {
    const config = type ? { responseType: type as any } : {};
    const result: any = await instance.post(url, data, config);
    return result?.data;
  } catch (error: any) {
    console.log("=== post error ===", error);
  }
};

export const put = async (url: string, data: object) => {
  try {
    const result: any = await instance.put(url, data);
    return result?.data;
  } catch (error: any) {
    console.log("=== put error ===", error);
  }
};

export const patch = async (url: string, data: object) => {
  try {
    const result: any = await instance.patch(url, data);
    return result?.data;
  } catch (error: any) {
    console.log("=== put error ===", error);
  }
};

export const del = async (url: string) => {
  try {
    const result: any = await instance.delete(url);
    return result?.data;
  } catch (error: any) {
    console.log("=== del error ===", error);
  }
};

export default instance;