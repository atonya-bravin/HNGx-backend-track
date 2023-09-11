const express = require("express");
const moment = require("moment");

const app = express();

const port  = process.env.PORT || 3000;

app.get('/api', (req, res) => {
  const slackName = req.query.slack_name;
  const track = req.query.track;

  // Check if slackName is missing
  if (!slackName) {
    res.status(400).json({
      error: 'Kindly check your slack_name and try again',
    });
    return;
  }

  const day = moment().utc();
  const utc_time = day.format('YYYY-MM-DDTHH:mm:ss[Z]');

  const current_day = moment().format('dddd');

  // JSON response construction
  const response = {
    slack_name: slackName,
    current_day: current_day,
    utc_time: utc_time,
    track: track,
    github_file_url: 'https://github.com/atonya-bravin/HNGx-backend-track/blob/main/User-Information-api/app.js',
    github_repo_url: 'https://github.com/atonya-bravin/HNGx-backend-track/tree/main',
    status_code: 200,
  };

  // Send the JSON response
  res.json(response);
});

app.listen(port, ()=>{
    console.log(`App is listening to port ${port}`);
});