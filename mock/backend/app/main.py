from fastapi import FastAPI

app = FastAPI(title=config.PROJECT_NAME, openapi_url="/api/v1/openapi.json")

