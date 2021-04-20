import { createStore, useStore as useBaseStore } from 'vuex';

import * as Auth from './auth';

export interface RootState {
  auth: Auth.State;
}

export default createStore<RootState>({
  modules: {
    Auth: Auth.store,
  },
});

export const useStore = () => useBaseStore<RootState>();
