const gplay = require('google-play-scraper');
const fs = require('fs');

const apps = [
  { id: 'com.ubercab', name: 'Uber' },
  { id: 'me.lyft.android', name: 'Lyft' },
  { id: 'ee.mtakso.client', name: 'Bolt' },
];

const getReviews = async (app) => {
  const result = await gplay.reviews({
    appId: app.id,
    sort: gplay.sort.NEWEST,
    num: 200,
    lang: 'en', 
    country: 'us' 
  });

  return result.data.map((r) => ({
    AppName: app.name,
    User: r.userName,
    Rating: r.score,
    Review: r.text,
    Date: r.date,
    ThumbsUp: r.thumbsUp,
  }));
};

(async () => {
  let allReviews = [];

  for (const app of apps) {
    console.log(`Fetching ${app.name}...`);
    const reviews = await getReviews(app);
    allReviews = allReviews.concat(reviews);
  }

  fs.writeFileSync(
    'english_app_reviews.json',
    JSON.stringify(allReviews, null, 2)
  );

  console.log('Done! Data saved to english_app_reviews.json');
})();
