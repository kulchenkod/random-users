import { ThunkAction } from "redux-thunk";
import api from "../api/apiSetup";
import * as type from "./types";
import { ENDPOINTS, DEFAULT_QTY_GET_USERS } from "../environment";
import { User } from "../types";
import { State } from "./reducer";

const getUsersRequest = () => ({
  type: type.GET_USERS_REQUEST
});

const getUsersSuccess = (results: User[]) => ({
  type: type.GET_USERS_SUCCESS,
  payload: results
});

const getUsersFailure = (error: string) => ({
  type: type.GET_USERS_FAILURE,
  payload: error
});

export const getAllUsers = (): ThunkAction<
  Promise<void>,
  State,
  unknown,
  Actions
> => async dispatch => {
  dispatch(getUsersRequest());
  try {
    const {
      data: { results }
    } = await api.get(ENDPOINTS.users, {
      params: DEFAULT_QTY_GET_USERS
    });
    dispatch(getUsersSuccess(results));
  } catch (error) {
    dispatch(getUsersFailure(error));
  }
};

export const setSearchValue = (value: string) => ({
  type: type.SET_SEARCH_VALUE_SUCCESS,
  payload: value
});

export const getDetailsUser = (id: string) => ({
  type: type.GET_DETAILS_USER,
  payload: id
});

export const clearSearchValue = () => ({
  type: type.CLEAR_SEARCH_VALUE
});

export const clearCurrentUser = () => ({
  type: type.CLEAR_CURRENT_USER
});

export type Actions =
  | ReturnType<typeof setSearchValue>
  | ReturnType<typeof getDetailsUser>
  | ReturnType<typeof clearSearchValue>
  | ReturnType<typeof clearCurrentUser>
  | ReturnType<typeof getUsersRequest>
  | ReturnType<typeof getUsersSuccess>
  | ReturnType<typeof getUsersFailure>;
