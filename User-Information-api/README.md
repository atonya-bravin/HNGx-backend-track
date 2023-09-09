# User Information API
This is a project that implements an API endpoint in python, using fastAPI.

## Usage
To use the project, the link, [application link](https://user-information-api-f3ms.onrender.com/api?slack_name=Bravin&track=backend) can be used; where, slack_name is the user's name on slack, and track is the track the user is taking in the HNGx internship program. The api endpoint should return a JSON object structured as under;

```
{
  "slack_name": "example_name",
  "current_day": "Monday",
  "utc_time": "2023-08-21T15:04:05Z",
  "track": "backend",
  "github_file_url": "https://github.com/username/repo/blob/main/file_name.ext",
  "github_repo_url": "https://github.com/username/repo",
  "status_code": 200
}
```
