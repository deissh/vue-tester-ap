from pydantic import BaseModel

from app.schemas.token import Token


class CreateTokenResponse(Token):
    token_type: str = 'bearer'
    pass
