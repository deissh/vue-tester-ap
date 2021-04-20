import { FluxStandardAction } from '@/store/types';
import { CurrentUserDto } from '@/core/dto/current_user';

export const SET_CURRENT_USER = 'auth/SET_CURRENT_USER';

export class SetCurrentUser implements FluxStandardAction<CurrentUserDto> {
  type = SET_CURRENT_USER

  constructor(public payload: CurrentUserDto) {}
}
