from fastapi import APIRouter

from app.api_v1.endpoints import auth, user

api_router = APIRouter()
api_router.include_router(auth.router, prefix='/oauth', tags=["oauth"])
api_router.include_router(user.router, prefix='/user', tags=["user"])
