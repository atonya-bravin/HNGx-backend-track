from fastapi import FastAPI, Query

from datetime import datetime, timezone


app = FastAPI()

day_of_week = datetime.now().strftime("%A")

now = datetime.now(timezone.utc)
formatted_utc_time = now.strftime('%Y-%m-%dT%H:%M:%S%z').replace('+0000', '+00:00')

@app.get("/api")
def respond(slack_name: str = Query(...), track: str = Query(...)):
    return {
        "slack_name": f"{slack_name}",
        "current_day": f"{day_of_week}",
        "utc_time": f"{formatted_utc_time}",
        "track": f"{track}",
        "github_file_url": "https://github.com/atonya-bravin/HNGx-backend-track/blob/main/User-Information-api/app.py",
        "github_repo_url": "https://github.com/atonya-bravin/HNGx-backend-track/tree/main",
        "status_code": 200
    }