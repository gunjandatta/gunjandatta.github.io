---
layout: default
---

## People Manager
[Documentation](https://msdn.microsoft.com/en-us/library/office/dn790354.aspx#bk_PeopleManager)

### Code Example

```ts
// JavaScript
var $REST = require("gd-sprest");
// Get the people manager
$REST.PeopleManager()
    // Get my properties
    .getMyProperties()
    // Execute the request
    .execute(function(myProps) {
        // Code goes here
    });

// TypeScript
import { PeopleManager } from "gd-sprest";

// Get the people manager
PeopleManager()
    // Get my properties
    .getMyProperties()
    // Execute the request
    .execute(myProps => {
        // Code goes here
    });
```

### Properties

| Name | Type | Description |
| --- | --- | --- |
| EditProfileLink | _string_ | The URL of the edit profile page for the current user. |
| IsMyPeopleListPublic | _boolean_ | A **Boolean** value that indicates whether the current user's **People I'm Following** list is public. |

### Methods

| Name | Description |
| --- | --- |
| amIFollowedBy(_accountName:string_) | Checks whether the specified user is following the current user. |
| amIFollowing(_accountName:string_) | Checks whether the current user is following the specified user. |
| follow(_accountName:string_) | Adds the specified user to the current user's list of followed users. |
| followTag(_id:string_) | Adds the specified tag to the current user's list of followed tags. |
| getFollowedTags(_maxCount: number_) | Gets tags that the user is following. |
| getFollowersFor(_accountName: string_) | Gets the people who are following the specified user. |
| getMyFollowers() | Gets the people who are following the current user. |
| getMyProperties() | Gets user properties for the current user. |
| getMySuggestions() | Gets suggestions for who the current user might want to follow. |
| getPeopleFollowedBy(_accountName:string_) | Gets the people who the specified user is following. |
| getPeopleFollowedByMe() | Gets the people who the current user is following. |
| getPropertiesFor(_accountName:string_) | Gets user properties for the specified user. |
| getTrendingTags() | Gets the most popular tags. Static method. |
| getUserProfilePropertyFor(_accountName:string, propName: string_) | Gets the specified user profile property for the specified user. |
| hideSuggestion(_accountName:string_) | Removes the specified user from the user's list of suggested people to follow. |
| isFollowing(_possibleFollowerAccountName: string, possibleFolloweeAccountName: string_) | Checks whether the first user is following the second user. |
| setMyProfilePicture(_stream: any_) | Uploads and sets the user profile picture. Users can upload a picture to their own profile only. |
| stopFollowing(_accountName:string_) | Remove the specified user from the current user's list of followed users. |
| stopFollowingTag(_id: string_) | Remove the specified tag from the current user's list of followed tags. |