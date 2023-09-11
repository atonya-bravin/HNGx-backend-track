import arrow
from fastapi import FastAPI, Query

from datetime import datetime, timezone


app = FastAPI()

day_of_week = datetime.now().strftime("%A")

utc_time = datetime.now(timezone.utc)
formatted_utc_time = utc_time.strftime("%Y-%m-%dT%H:%M:%SZ")


@app.get("/api")
def respond(slack_name: str = Query(...), track: str = Query(...)):
    return {
        "slack_name": f"{slack_name}",
        "current_day": f"{day_of_week}",
        "utc_time": formatted_utc_time,
        "track": f"{track}",
        "github_file_url": "https://github.com/atonya-bravin/HNGx-backend-track/blob/main/User-Information-api/app.py",
        "github_repo_url": "https://github.com/atonya-bravin/HNGx-backend-track/tree/main",
        "status_code": 200
    }