import { AxiosResponse } from "axios";
import { IResponse } from "../Common.types";
import { postCall, getCall } from "../../apiCalls";

export const endpoints = {
  USER_URL: "/user",
  WALLET_URL: "/wallet",
  TRANSACTION_URL: "/transactions",
};

interface IUser {}

export const getAllUsers = (
  data = { pageSize: 10, pageNumber: 1 },
  params = null,
  headerConfig = null,
) =>
  getCall(endpoints.TRANSACTION_URL, data, params, headerConfig).then(
    (res) => res.data,
  );

export const getUsersByFilter = (data, params = null, headerConfig = null) =>
  GETCall(endpoints.USER_URL, data, params, headerConfig) as Promise<
    AxiosResponse<IResponse & { users: IUser[] }>
  >;

export const getUsersBySearchQuery = (
  data,
  params = null,
  headerConfig = null,
) =>
  getCall(endpoints.GET_WALLET, data, params, headerConfig) as Promise<
    AxiosResponse<IResponse & { users: IUser[] }>
  >;
