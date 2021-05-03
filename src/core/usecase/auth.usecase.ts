import store from '@/store';
import { CurrentUserDto } from '@/core/dto/current_user.dto';

import { SetCurrentUser } from '@/store/auth';

export class AuthUseCase {
  async login(username: string, password: string) {
    // api req
    console.log('try login', username, password);
    const user = CurrentUserDto.fromJSON({});

    store.commit(new SetCurrentUser(user));
  }
}
