import { createStore, useStore as useBaseStore } from 'vuex';

import * as authModule from './auth';

export interface RootState {
  auth: authModule.State;
}

export default createStore<RootState>({
  modules: {
    auth: authModule.store,
  },
});

export const useStore = () => useBaseStore<RootState>();
