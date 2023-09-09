from fastapi import FastAPI, Query

from datetime import datetime, timedelta, timezone


app = FastAPI()

now = datetime.now()
day_of_week = datetime.now().strftime("%A")

utc_time = now.replace(tzinfo=timezone.utc)

iso_utc_time = utc_time.isoformat()[:-5] + 'Z'

@app.get("/api")
def respond(slack_name: str = Query(...), track: str = Query(...)):
    return {
        "slack_name": f"{slack_name}",
        "current_day": f"{day_of_week}",
        "utc_time": f"{iso_utc_time}",
        "track": f"{track}",
        "github_file_url": "https://github.com/atonya-bravin/HNGx-backend-track/blob/main/User-Information-api/app.py",
        "github_repo_url": "https://github.com/atonya-bravin/HNGx-backend-track/tree/main",
        "status_code": 200
    }