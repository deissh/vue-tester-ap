import store from '@/store';
import { SubjectDto } from '@/core/dto/subject.dto';

export class SubjectRepository {
  public get all(): SubjectDto[] {
    return store.state.subject.subjects;
  }
}
