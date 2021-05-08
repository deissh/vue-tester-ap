import { plainToClass } from 'class-transformer';

export class SubjectDto {
  public id!: number;

  public title!: string;

  public description!: string;

  public icon!: string;

  static fromJSON(data: unknown): SubjectDto {
    return plainToClass(this, data);
  }
}
