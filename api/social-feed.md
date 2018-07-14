---
layout: default
---
<div class="page-info" markdown="1">

[Back](/api)
## [Social Feed](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/social-feed-rest-api-reference-for-sharepoint)

</div>

### Code Reference
```ts
// JavaScript
var $REST = require("gd-sprest");

// Get the current user's information
$REST.SocialFeed.my().execute(function(profile) {
    // Code goes here
});

// TypeScript
import { SocialFeed } from "gd-sprest";

// Get the current user's information
SocialFeed.my().execute(function(profile) {
    // Code goes here
});
```

### Methods

| Name | Description |
| --- | --- |
| actor(_accountName: string_) | Gets information about the specified user and the current user. |
| actorFeed(_accountName: string_) | Gets the feed of activity by the specified user (Personal feed type) or gets the specified site feed. |
| clearMyUnreadMentionCount() | Gets the feed of microblog posts that mention the current user, represented by MentionReference thread types, and sets the user's unread mention count to 0. |
| my() | Gets information about the current user. |
| myFeed() | Gets the feed of activity by the current user (Personal feed type). |
| myLikes() | Gets the feed of microblog posts that the current user likes, represented by LikeReference thread Types.SP. See Reference threads and digest threads in SharePoint Server 2013 social feeds. |
| myMentionFeed() | Gets the feed of microblog posts that mention the current user. |
| myNews() | Gets the feed of activity by the current user and by people and content the user is following, sorted by last modified date (News feed type). |
| myTimelineFeed() | Gets the feed of activity by the current user and by people and content the user is following, sorted by created date (Timeline feed type). |
| myUnreadMentionCount() | Gets the count of unread mentions for the current user. |
| postToFeed(_accountName: string, postInfo: SocialPostCreationData_) | Creates a root post in the specified site feed. |
| postToMyFeed(_creationData: SocialPostCreationData_) | Creates a root post in the current user's feed. |