# Megalobiz-Lrc-Scraper
Megalobiz Lrc Scraper was made with use of axios and cheerio

# Note
In your nodejs you need to have an Axios and Cheerio Installed first to use this.

# Website Link used
"https://www.megalobiz.com/Search/all?qry="

change "Test" into your input string

# Usage
// Loading the dependencies
const axios = require("axios");
const cheerio = require('cheerio');

//URL that we want to scrape
const url = "https://www.megalobiz.com/search/all?qry=Test";

// Fetch HTML of the page we want to scrape
    const { data } = await axios.get(url);

// Load the HTML we fetched
    const $ = cheerio.load(data);

// Select all the list items in entity_full_member_image class
    const listItems = $(".entity_full_member_image");

// Stores data for all the Q
  const Q = [];

// Use .each method to loop through the entity_full_member_image class we selected
  listItems.each((idx, el) => {

// Object holding data for each E
    const E = {};

// Select the text content of "a" elements and Store the textcontent in the above object
    E.data = $(el).children("a")[0].attribs.href;

// Populate Q array with E data
    Q.push(E);
    });

//logs the all the scraped data into the console
//console.dir(Q)

//here we get the value of Q put in the url
  const newUrl = Q[0].data;
  const Newurl = "https://www.megalobiz.com"+newUrl;

//and repeat the steps above
  const Data = await axios.get(Newurl);
    const R = cheerio.load(Data.data);
    const list = R("[class='lyrics_details entity_more_info']");
  let title = R('.profile_h1');
  const V = [];
  list.each((idx, el) => {
    const P = {};
    P.data = R(el).children("span").text();
    V.push(P);
    });

//writing a file with the contents of V[0].data
  var Title = title.text();
fs.writeFile("SharedFiles/music_lyrics.lrc",V[0].data, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
