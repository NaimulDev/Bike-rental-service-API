import { Response } from "express";

type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  data: T;
  token?: string;
};
// const sendResponse = <T>(res: Response, data: TResponse<T>) => {
//   res.status(data.statusCode).json({
//     success: data.success,
//     message: data.message,
//     data: data.data,
//   });

// };

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  const response: any = {
    success: data.success,
    message: data.message,
    data: data.data,
    token: data.token,
  };
  if (data.token) {
    response.token = data.token;
  }
  res.status(data.statusCode).json(response);
};
export default sendResponse;
