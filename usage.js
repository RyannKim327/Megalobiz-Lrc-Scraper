// Loading the dependencies
const axios = require("axios");
const cheerio = require('cheerio');
//const fs = require("fs");

let search = async (song) => {
	// Get the HTML content
	const { data } = await axios.get(`https://www.megalobiz.com/search/all?qry=${song.replace(/ /gi, "+")}`)

	// Load to cheerio
	const $ = await cheerio.load(data)

	// Select all the list items in entity_full_member_image class
	const listItems = $(".entity_full_member_image")

	// Initiate an array for multiple outputs
	let arr = []

	// Loop all the values or content that .entity_full_member_image has
	listItems.each((i, e) => {
		const json = {}

		// Get the URL link
		json.url = $(e).children("a")[0].attribs.href

		// Populate the array with the json content
		arr.push(json)
	})
	return arr
}

let lyrics = async (urlID) => {
	const { data } = await axios.get(`https://www.megalobiz.com${urlID}`)
	const $ = await cheerio.load(data)
	const list = $("[class='lyrics_details entity_more_info']")
	let title = $('.profile_h1').text()
	let arr = []
	list.each((i, e) => {
		const json = {}
		json.data = $(e).children("span").text()
		arr.push(json)
	})
	return arr
}

module.exports = async () => {
	lyrics,
	search
}