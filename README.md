# HNGx Backend Track
![Repo size](https://img.shields.io/github/repo-size/atonya-bravin/IntAlert )
![Repo License](https://img.shields.io/github/license/atonya-bravin/IntAlert.svg)
![Latest commit](https://img.shields.io/github/last-commit/atonya-bravin/IntAlert?style=round-square)

This is a repository containing all the tasks from the HNGx internship program.

## Featured files and tasks
  
**Task 1**
In this task, we are required to create an api endpoint that returns the following information in JSON format;
- Slack name
- Current day of the week
- Current UTC time (with validation of +/-2)
- Track
- The GitHub URL of the file being run
- The GitHub URL of the full source code.
- A  Status Code of Success
  
An example of the JSON object the api endpoint should return is as under;
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

