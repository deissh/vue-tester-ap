import { plainToClass } from 'class-transformer';
import { UserDto } from '@/core/dto/user.dto';

export class CurrentUserDto extends UserDto {
  static fromJSON(data: unknown): UserDto {
    return plainToClass(CurrentUserDto, data);
  }
}
