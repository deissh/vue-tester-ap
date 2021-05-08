import { CurrentUserDto } from '@/core/dto/current_user.dto';
import { TokenDto } from '@/core/dto/token.dto';

export const LS_TOKEN_KEY = 'LS_TOKEN_KEY';

export interface State {
  currentUser: CurrentUserDto | null;

  token: TokenDto | null;
}

export const initState = (): State => ({
  currentUser: null,
  token: TokenDto.fromJSON(localStorage.getItem(LS_TOKEN_KEY)) || null,
});
