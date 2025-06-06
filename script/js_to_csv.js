const fs = require('fs');
const path = require('path');

const rawData = fs.readFileSync(path.join(__dirname, '../data/english_app_reviews.json'));
const reviews = JSON.parse(rawData);

const headers = ['AppName', 'User', 'Rating', 'Review', 'Date', 'ThumbsUp', 'SentimentFromRating', 'ReviewLength'];
const csvRows = [headers.join(',')];

for (const r of reviews) {
  let sentiment;
  if (r.Rating < 3) {
    sentiment = 'negative';
  } else if (r.Rating === 3) {
    sentiment = 'neutral';
  } else {
    sentiment = 'positive';
  }

  const reviewText = r.Review.replace(/"/g, '""').replace(/\n/g, ' ');
  const reviewLength = reviewText.split(/\s+/).length;

  const row = [
    `"${r.AppName}"`,
    `"${r.User.replace(/"/g, '""')}"`,
    r.Rating,
    `"${reviewText}"`,
    `"${r.Date}"`,
    r.ThumbsUp,
    sentiment,
    reviewLength
  ];
  csvRows.push(row.join(','));
}

const outputPath = path.join(__dirname, '../data/english_app_reviews.csv');
fs.writeFileSync(outputPath, csvRows.join('\n'), 'utf-8');
