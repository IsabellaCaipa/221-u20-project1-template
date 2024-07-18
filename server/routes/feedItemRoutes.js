const express = require('express')
const router = express.Router();
let feedItemController = require("../controller/feedItemController.js");


router.route('/')
    .get(feedItemController.getAllFeedItems)
    .post(feedItemController.saveFeedItem)

router.route('/:feedItemID')
    .get(feedItemController.getFeedItem)
    .delete(feedItemController.deleteFeedItem)
    .patch(feedItemController.updateFeedItem)
    .put(feedItemController.replaceFeedItem)

module.exports = router;