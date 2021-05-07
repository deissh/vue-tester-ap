from fastapi import APIRouter, Depends

from app.api_v1 import deps
from app.api_v1.schemas import user

router = APIRouter()


@router.get("/me", response_model=user.GetMeResponse)
def read_user_me(current_user=Depends(deps.get_current_user)) -> user.GetMeResponse:
    return user.GetMeResponse(
        data=current_user,
    )
