/* eslint-disable @typescript-eslint/camelcase */
import store from '@/store';
import { CurrentUserDto } from '@/core/dto/current_user.dto';

import { SetCurrentUser } from '@/store/auth';

class UseCase {
  async login(username: string, password: string) {
    // api req
    console.log('try login', username, password);

    const user = CurrentUserDto.fromJSON({
      first_name: 'Some',
      last_name: 'Username',
    });

    store.commit(new SetCurrentUser(user));
  }
}

export const authUseCase = new UseCase();
