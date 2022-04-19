# Megalobiz-Lrc-Scraper
Megalobiz Lrc Scraper was made with use of axios and cheerio

# In NodeJS
const axios = require("axios");
const cheerio = require('cheerio');


const url = "https://www.megalobiz.com/search/all?qry=Test";
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const listItems = $(".entity_full_member_image");
  const Q = [];
  listItems.each((idx, el) => {
    const E = {};
    E.data = $(el).children("a")[0].attribs.href;
    Q.push(E);
    });
  const newUrl = Q[0].data;
  const Newurl = "https://www.megalobiz.com"+newUrl;
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
  var Title = title.text();
fs.writeFile("SharedFiles/music_lyrics.lrc",V[0].data, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
