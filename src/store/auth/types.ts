import { FluxStandardAction } from '@/store/types';
import { CurrentUserDto } from '@/core/dto/current_user.dto';
import { TokenDto } from '@/core/dto/token.dto';

export const SET_CURRENT_USER = 'auth/SET_CURRENT_USER';
export const SET_ACCESS_TOKEN = 'auth/SET_ACCESS_TOKEN';

export class SetCurrentUser implements FluxStandardAction<CurrentUserDto> {
  type = SET_CURRENT_USER

  constructor(public payload: CurrentUserDto) {}
}

export class SetAccessToken implements FluxStandardAction<TokenDto> {
  type = SET_ACCESS_TOKEN

  constructor(public payload: TokenDto) {}
}
