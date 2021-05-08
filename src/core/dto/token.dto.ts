import { plainToClass, classToPlain } from 'class-transformer';

export class TokenDto {
  public access_token!: string;

  public refresh_token!: string;

  public expired_at!: number;

  static fromJSON(data: unknown): TokenDto {
    return plainToClass(this, data);
  }

  public toJSON(): string {
    return JSON.stringify(
      classToPlain(this),
    );
  }
}
