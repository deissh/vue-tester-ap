import { CurrentUserDto } from '@/core/dto/current_user.dto';

export interface State {
  currentUser: CurrentUserDto | null;
}

export const initState = (): State => ({
  currentUser: null,
});
