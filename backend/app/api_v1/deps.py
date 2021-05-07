from fastapi import Depends
from fastapi.security import OAuth2PasswordBearer

from app.schemas.current_user import CurrentUser

reusable_oauth2 = OAuth2PasswordBearer(
    tokenUrl=f"/api/v1/authorize"
)


def get_current_user(token: str = Depends(reusable_oauth2)) -> CurrentUser:
    # TODO: validate token and fetch user profile from database
    return CurrentUser(
        id=1,
        email='admin@google.com',
        is_staff=False,
        is_active=True,
        first_name='John',
        middle_name='Doe',
        last_name='',
        phone='-',
        last_login='',
        date_joined='',
    )
