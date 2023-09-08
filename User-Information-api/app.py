from fastapi import FastAPI, Query

from datetime import datetime, timedelta


app = FastAPI()


day_of_week = datetime.now().strftime("%A")

current_utc_time = datetime.utcnow()

formatted_utc_time = current_utc_time.strftime('%Y-%m-%d %H:%M:%S')

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