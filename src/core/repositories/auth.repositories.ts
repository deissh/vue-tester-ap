import store from '@/store';
import { UserDto } from '@/core/dto/user.dto';

export class AuthRepositories {
  public get currentUser(): UserDto | null {
    return store.state.auth.currentUser;
  }

  public get isLogined(): boolean {
    return !!store.state.auth.currentUser;
  }
}
