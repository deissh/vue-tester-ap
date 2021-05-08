from typing import Optional

from pydantic import BaseModel


class Subject(BaseModel):
    title: str
    description: Optional[str]
    icon: str
