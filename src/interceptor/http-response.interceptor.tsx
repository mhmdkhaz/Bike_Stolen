import { AxiosError } from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { ErrorResponse } from "../types/error-response.interface";
import { _axios as Axios } from "./http-config";

export const HttpResponseInterceptor = (navigate: any) => {
  Axios.interceptors.response.use(
    (response) => {
      if (
        ["post", "put", "patch", "delete"].includes(response?.config?.method!)
      ) {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      return response;
    },
    (error: AxiosError<ErrorResponse>) => {
      const status = error?.response?.status;
      const message = error?.response?.data?.message;

      switch (status) {
        case 404:
          toast.error(message as string, {
            position: "top-right",
            autoClose: 3000,
          });
          break;
        case 400:
        case 422:
          if (!message) {
            toast.error("An unexpected error occurred. Please try again later");
          } else if (typeof message === "object") {
            Object.values(message).forEach((errorMessages) => {
              (errorMessages as string[]).forEach((errorMessage) => {
                toast.error(errorMessage);
              });
            });
          } else if (typeof message === "string") {
            toast.error(message);
          }
          break;
        case 500:
        case 409:
        case 405:
          toast.error(message as string, {
            position: "top-right",
            autoClose: 3000,
          });
          break;
        case 401:
          navigate("/");
          toast.error(message as string, {
            position: "top-right",
            autoClose: 3000,
          });
          break;
        case 403:
          navigate("/");
          toast.error(message as string, {
            position: "top-right",
            autoClose: 3000,
          });
          break;
        default:
          toast.error(message as string, {
            position: "top-right",
            autoClose: 3000,
          });
          break;
      }

      return Promise.reject(error);
    }
  );
};
