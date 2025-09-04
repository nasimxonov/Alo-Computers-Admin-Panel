import axios from "axios";

interface PropTypes {
  url: string;
  method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
  params?: object;
  headers?: object;
  body?: object;
}

export const useAxios = () => {
  const response = (props: PropTypes) => {
    const { url, method, params, headers, body } = props;
    return axios({
      url: import.meta.env.VITE_BASE_URL + `/${url}`,
      method,
      params: {
        ...params,
      },
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      data: body,
    });
  };

  return response;
};

