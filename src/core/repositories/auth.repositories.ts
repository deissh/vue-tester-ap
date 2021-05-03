import store from '@/store';
import { UserDto } from '@/core/dto/user.dto';

export class AuthRepositories {
  public get currentUser(): UserDto {
    const user = store.state.auth.currentUser;
    if (user === null) throw new Error('Invalid user');

    return user;
  }

  public get isLogined(): boolean {
    return !!store.state.auth.currentUser;
  }
}
