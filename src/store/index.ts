import { createStore } from 'vuex';

import * as authModule from './auth';
import * as subjectModule from './subject';

export interface RootState {
  auth: authModule.State;
  subject: subjectModule.State;
}

export default createStore<RootState>({
  modules: {
    auth: authModule.store,
    subject: subjectModule.store,
  },
});
