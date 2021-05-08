import { Module } from 'vuex';

import { initState, State } from './state';
import { mutations } from './mutations';

export * from './state';
export { SetCurrentUser } from './types';

export const store: Module<State, any> = {
  state: initState(),
  mutations,
};
