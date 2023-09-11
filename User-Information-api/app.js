const express = require("express");

const port  = process.env.PORT || 3000;

const app = express();

app.listen(port, ()=>{
    console.log(`App is listening to port ${port}`);
});
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

day = daysOfWeek[new Date().getDay()];

utc_time = new Date().toISOString().replace(/\.\d+/, "");

app.get('/', (req, res) => {
    res.send('Welcome to my HNGx the API is working!');
});

app.get('/api', (req, res) => {
    const githubFileUrl = "https://github.com/atonya-bravin/HNGx-backend-track/blob/main/User-Information-api/app.js";
    const githubRepoUrl = "https://github.com/atonya-bravin/HNGx-backend-track/tree/main";

    const {slack_name, track} = req.query;
    const response = {
        slack_name: slack_name,
        current_day: day,
        utc_time: utc_time,
        track: track,
        github_file_url: githubFileUrl,
        github_repo_url: githubRepoUrl,
        status_code: 200,
      };
      res.json(response);
});


