import { AxiosResponse } from "axios";
import { IResponse } from "../Common.types";
import { postCall, getCall } from "../../apiCalls";

export const endpoints = {
  USER_URL: "/user",
  WALLET_URL: "/wallet",
  TRANSACTION_URL: "/transactions",
};

export const getAllUsersTransactions = (
  data = { pageSize: 10, pageNumber: 1 },
  params = null,
  headerConfig = null,
) => getCall(endpoints.TRANSACTION_URL, headerConfig).then((res) => res.data);

export const getUserProfile = (data = null, headerConfig = null) =>
  getCall(endpoints.USER_URL, headerConfig) as Promise<
    AxiosResponse<IResponse & any>
  >;

export const getUserWallet = (
  data = null,
  params = null,
  headerConfig = null,
) =>
  getCall(endpoints.WALLET_URL, headerConfig) as Promise<
    AxiosResponse<IResponse & any>
  >;
