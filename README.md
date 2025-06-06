# Final Paper - Sentiment Analysis of Online Transportation App Reviews

This project analyzes user reviews from the Google Play Store for three ride-hailing applications: Uber, Lyft, and Bolt. The goal is to extract sentiment information from user reviews and evaluate how well automatic sentiment analysis aligns with user ratings.

## Project Structure
data/
  - english_app_reviews.csv : Cleaned dataset in CSV format, ready for use in Orange
  - english_app_reviews.json : Raw review data collected from scraping
  - english_app_reviews.xlsx : Spreadsheet version of the dataset
  - sentiment-output-from-orange/ : Output files exported from Orange (optional)

script/
  - scraping.js : Script to scrape app reviews using google-play-scraper
  - js_to_csv.js : Script to convert JSON to CSV and add computed columns such as review length and sentiment label

orange-online-transport-playstore-reviews.ows : Orange Data Mining workflow

## How to Run
1. Scrape the review data:
   node script/scraping.js
2. Convert JSON to CSV:
   node script/js_to_csv.js
3. Open the .ows file in Orange and import `english_app_reviews.csv` using the Corpus widget.

## Methods Used
- Preprocessing: Tokenization, lowercase transformation, stopword removal
- Sentiment Analysis: Lexicon-based method (Liu-Hu)
- Modeling: Naive Bayes and Random Forest to predict sentiment labels
- Visualization: Word cloud, box plot, scatter plot, and bar plot
