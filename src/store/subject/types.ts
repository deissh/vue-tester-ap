import { FluxStandardAction } from '@/store/types';
import { SubjectDto } from '@/core/dto/subject.dto';

export const ADD_SUBJECT = 'subject/ADD_SUBJECT';

export class AddSubject implements FluxStandardAction<SubjectDto> {
  type = ADD_SUBJECT

  constructor(public payload: SubjectDto) {}
}
