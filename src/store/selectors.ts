import { Selector } from "react-redux";
import { createSelector } from "reselect";
import { State } from "./reducer";
import { User } from "../types";

const getSearchList: Selector<State, Record<string, number>> = (state) =>
  state.byLastFirstNames;

const getUsersList: Selector<State, Record<string, User>> = (state) =>
  state.usersList;

const getSearchValue: Selector<State, string> = (state) => state.searchValue;

const getLoading: Selector<State, boolean> = (state) => state.loading;

const getCurrentUserId: Selector<State, string> = (state) =>
  state.currentUserId;

export const selectCurrentUser: Selector<State, User> = createSelector(
  [getUsersList, getCurrentUserId],
  (userList, id) => userList[id]
);

const getSearchSelect: Selector<State, number[]> = createSelector(
  [getSearchList, getSearchValue],
  (searchArray, searchValue) => {
    const idsArray = [] as number[];
    Object.entries(searchArray).forEach(
      ([key, value]) =>
        key.includes(searchValue.toLowerCase()) && idsArray.push(value)
    );
    return idsArray;
  }
);

export const selectSearchUsers: Selector<
  State,
  {
    data: User[];
    loading: boolean;
  }
> = createSelector(
  [getUsersList, getSearchSelect, getLoading],
  (collection, dataSearch, loading) => ({
    data: dataSearch.map((id) => collection[id]),
    loading,
  })
);
