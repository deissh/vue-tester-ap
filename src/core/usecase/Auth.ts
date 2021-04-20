import { CurrentUserDto } from '@/core/dto/current_user';
import { useStore } from '@/store';

import { SetCurrentUser } from '@/store/auth';

export class AuthUseCase {
  private store = useStore();

  async login(username: string, password: string) {
    // api req
    const user = CurrentUserDto.fromJSON({});

    this.store.commit(new SetCurrentUser(user));
  }
}
