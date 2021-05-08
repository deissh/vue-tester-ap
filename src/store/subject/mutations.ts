import { MutationTree } from 'vuex';
import { State } from './state';
import * as types from './types';

export const mutations: MutationTree<State> = {
  [types.ADD_SUBJECT]: (state, action: types.AddSubject) => {
    state.subjects.push(action.payload);
  },
};
