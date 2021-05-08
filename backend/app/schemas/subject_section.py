from typing import List, Optional

from datetime import datetime
from pydantic import BaseModel


class SubjectSection(BaseModel):
    subject_id: int

    title: str
    prompt: str = ''
    default_file_types: List[str] = []

    task_count: int = 0


class TestSubjectSection(SubjectSection):
    date_start: Optional[datetime]
    date_end: Optional[datetime]

    max_score: int = 0


class LaboratoryWorkSubjectSection(SubjectSection):
    pass
