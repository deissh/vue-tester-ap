import { plainToClass } from 'class-transformer';

export class UserDto {
  public id!: number;

  public email!: string

  public is_staff!: boolean;

  public is_active!: boolean;

  public first_name!: string;

  public middle_name!: string;

  public last_name!: string;

  public phone!: string;

  public last_login!: string

  public date_joined!: string;

  static fromJSON(data: any): UserDto {
    return plainToClass(this, data);
  }
}
