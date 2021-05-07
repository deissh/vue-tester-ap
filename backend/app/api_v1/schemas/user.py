from pydantic.main import BaseModel

from app.schemas.current_user import CurrentUser


class GetMeResponse(BaseModel):
    data: CurrentUser
