from pydantic import BaseModel


class User(BaseModel):
    id: int
    email: str
    is_staff: bool
    is_active: bool
    first_name: str
    middle_name: str
    last_name: str
    phone: str
    last_login: str
    date_joined: str
