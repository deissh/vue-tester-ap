import { CurrentUserDto } from '@/core/dto/current_user';

export interface State {
  currentUser: CurrentUserDto | null;
}

export const initState = (): State => ({
  currentUser: null,
});
