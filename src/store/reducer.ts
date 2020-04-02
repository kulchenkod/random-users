import { Reducer } from "redux";
import * as type from "./types";
import { User } from "../types";
import { Actions } from "./actions";

const initialState = {
  loading: false as boolean,
  usersList: {} as Record<string, User>,
  byLastFirstNames: {} as Record<string, number>,
  searchValue: "" as string,
  currentUserId: "" as string,
  error: null as string | null
};

export type State = typeof initialState;

const reducer: Reducer<State, Actions> = (state = initialState, action) => {
  switch (action.type) {
    case type.CLEAR_SEARCH_VALUE:
      return {
        ...state,
        searchValue: ""
      };
    case type.CLEAR_CURRENT_USER:
      return {
        ...state,
        currentUserId: ""
      };
    case type.GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case type.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        usersList: action.payload.reduce(
          (start, item) => ({
            ...start,
            [item.login.uuid]: item
          }),
          {}
        ),
        byLastFirstNames: action.payload.reduce(
          (start, item) => ({
            ...start,
            [item.name.first
              .toLowerCase()
              .concat(`&&&${item.name.last.toLowerCase()}`)]: item.login.uuid
          }),
          {}
        )
      };
    case type.SET_SEARCH_VALUE_SUCCESS:
      return {
        ...state,
        searchValue: action.payload
      };
    case type.GET_DETAILS_USER:
      return {
        ...state,
        currentUserId: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
