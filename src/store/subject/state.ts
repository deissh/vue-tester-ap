import { SubjectDto } from '@/core/dto/subject.dto';

export interface State {
  subjects: SubjectDto[];
}

export const initState = (): State => ({
  subjects: [
    new SubjectDto(),
    new SubjectDto(),
    new SubjectDto(),
    new SubjectDto(),
  ],
});
