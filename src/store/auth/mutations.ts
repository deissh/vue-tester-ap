import { MutationTree } from 'vuex';
import { State, LS_TOKEN_KEY } from './state';
import * as types from './types';

export const mutations: MutationTree<State> = {
  [types.SET_CURRENT_USER]: (state, action: types.SetCurrentUser) => {
    state.currentUser = action.payload;
  },
  [types.SET_ACCESS_TOKEN]: (state, action: types.SetAccessToken) => {
    state.token = action.payload;
    localStorage.setItem(LS_TOKEN_KEY, action.payload.toJSON());
  },
};
