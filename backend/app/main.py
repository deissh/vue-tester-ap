import logging
import uvicorn

from fastapi import FastAPI

from app.api_v1.router import api_router

app = FastAPI(
    title="CodeTester",
)

app.include_router(api_router, prefix='/api/v1')


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
