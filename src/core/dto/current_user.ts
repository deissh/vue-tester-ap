import { plainToClass } from 'class-transformer';
import { UserDto } from '@/core/dto/user';

export class CurrentUserDto extends UserDto {
  static fromJSON(data: any): UserDto {
    return plainToClass(CurrentUserDto, data);
  }
}
