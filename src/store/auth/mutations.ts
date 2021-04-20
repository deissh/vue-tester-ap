import { MutationTree } from 'vuex';
import { State } from './state';
import * as types from './types';

export const mutations: MutationTree<State> = {
  [types.SET_CURRENT_USER]: (state, action: types.SetCurrentUser) => {
    state.currentUser = action.payload;
  },
};
