from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm

from app.api_v1.schemas import token

router = APIRouter()


@router.post("/authorize", response_model=token.CreateTokenResponse)
def login_access_token(
    form_data: OAuth2PasswordRequestForm = Depends()
) -> token.CreateTokenResponse:
    if form_data.username is not 'admin' and form_data.password != '123':
        raise HTTPException(status_code=401, detail="Not authenticated")

    return token.CreateTokenResponse(
        access_token='access_token',
        refresh_token='refresh_token'
    )
