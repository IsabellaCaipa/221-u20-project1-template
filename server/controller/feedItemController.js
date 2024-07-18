
var feedItem = require('../model/feedItem')

exports.getAllFeedItems = (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(currentfeed));
}
// Create an array called currentfeed
var currentfeed = [];


// Create 3 instances of feedItem and add them to the array as elements
var feedItem1 = feedItem.createFeedItem("Open Houses Available", "Open houses and campus tours being given, click for more info.", "https://www.marist.edu/openhouse/", "images/campus.png");
var feedItem2 = feedItem.createFeedItem("New menu", "The meal switch is official! Click here for the new menu items.", "https://dineoncampus.com/marist", "images/news_pic.jpg");
var feedItem3 = feedItem.createFeedItem("Brightspace info", "This is oficially our 2nd year of replacing Sekai with Brightspace, if you need assinstance click here.", "https://my.de.marist.edu/brightspace-help", "images/hancock.jpeg");

currentfeed.push(feedItem1);
currentfeed.push(feedItem2);
currentfeed.push(feedItem3);

exports.getAllFeedItems = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(currentfeed);
}

exports.getFeedItem = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
  	res.send(currentfeed[req.params.feedItemID]);
}

exports.saveFeedItem = function(req, res) {
	let newFeedItem = feedItem.createFeedItem(req.body.title, req.body.body, req.body.linkUrl, req.body.imageUrl);
	currentfeed.push(newFeedItem);
	res.setHeader('Content-Type', 'application/json');
	res.send(currentfeed);
}

exports.deleteFeedItem = function(req, res) {
	currentfeed.splice(req.params.feedItemID, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(currentfeed);
}


exports.updateFeedItem = function(req, res) {
	// get the existing user from the array
	var updatedFeedItem = currentfeed[req.params.feedItemID];

	// check to see what has been passed and update the local copy
	console.log(req.body.title);
	if(req.body.title)
		updatedFeedItem.title = req.body.title;
	if(req.body.body)
		updatedFeedItem.lastName = req.body.body;
	if(req.body.linkUrl)
		updatedFeedItem.linkUrl= req.body.linkUrl;
	if(req.body.imageUrl)
		updatedFeedItem.imageUrl = req.body.imageUrl;

	// save the local copy of the user back into the array
	currentfeed[req.params.feedItemID] = updatedFeedItem;

	res.setHeader('Content-Type', 'application/json');
	res.send(currentfeed[req.params.feedItemID]);
}

exports.replaceFeedItem = function(req, res) {
	// get the existing user from the array
	var updatedFeedItem = currentfeed[req.params.feedItemID];

	// check to see what has been passed and update the local copy
	console.log(req.body.title);
	if(req.body.title && req.body.body && req.body.linkUrl && req.body.imageUrl)
		updatedFeedItem.title = req.body.title;
		updatedFeedItem.lastName = req.body.body;
		updatedFeedItem.linkUrl= req.body.linkUrl;
		updatedFeedItem.imageUrl = req.body.imageUrl;

	// save the local copy of the user back into the array
	currentfeed[req.params.feedItemID] = updatedFeedItem;

	res.setHeader('Content-Type', 'application/json');
	res.send(currentfeed[req.params.feedItemID]);
}