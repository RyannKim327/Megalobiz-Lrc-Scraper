# Megalobiz-Lrc-Scraper
### Megalobiz Lrc Scraper was made with use of axios and cheerio
---

# How to install (NodeJS)
> npm i Megalobiz-Lrc-Scraper

---

# How to use (NodeJS):
> Search
``` NodeJS
const lrc = require("Megalobiz-Lrc-Scraper")

(async () => {
	let data = await lrc.search("Song Title")
	console.log(data)
})
```
> Output
``` JSON
[
	{
		"url": "sample link"
	},
	{ ... }
]
```

---

> Lyrics
``` NodeJS
const lrc = require("Megalobiz-Lrc-Scraper")

(async () => {
	let data = await lrc.lyrics("Song Url")
	console.log(data)
})
```

> Output
``` JSON
[
	{
		"data": "sample lyrics with time which is ready to download."
	}
]
```

---

<h5 align="center">Documentation By RyannKim327</h5>