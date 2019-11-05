---
layout: archive
title: "Search"
category: api
permalink: /api/search
---
[Documentation](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/sharepoint-search-rest-api-overview)

### Code Example

```ts
// JavaScript
var $REST = require("gd-sprest");
$REST.Search().postQuery({
    // Search parameters go here
}).execute(function(results) {
    // Code goes here
});

// TypeScript
import { Search } from "gd-sprest";
Search().postQuery({
    // Search parameters go here
}).execute(results => {
    // Code goes here
});
```

### Methods

| Method | Description |
| --- | --- |
| postQuery(_parameters: SearchRequest_) | Executes a POST request against the _/\_api/search/postquery_ endpoint. |
| searchQuery(_settings: SearchRequest_) | Executes a GET request against the _/\_api/search/query_ endpoint. |
| suggest(_settings: SearchSuggestion_) | Executes a GET request against the _/\_api/search/suggest_ endpoint. |

### Interfaces

#### Query Result

| Property | Type | Description |
| --- | --- | --- |
| CustomResults | CustomResult |
| QueryId | string |
| QueryRuleId | string |
| RefinementResults | RefinementResults |
| RelevantResults | RelevantResults |
| SpecialTermResults | SpecialTermResults |

#### Query Suggestion Query

| Property | Type | Description |
| --- | --- | --- |
| IsPersonal | boolean |
| Query | string |

#### Query Suggestion Result

| Property | Type | Description |
| --- | --- | --- |
| PeopleNames | string |
| PersonalResults | PersonalResultSuggestion |
| Queries | QuerySuggestionQuery |

#### Search Request

| Property | Type | Description |
| --- | --- | --- |
| BlockDedupeMode | number |
| BypassResultTypes | boolean | A Boolean value that specifies whether to perform result type processing for the query. |
| ClientType | string | The type of the client that issued the query. |
| CollapseSpecification | string | The managed properties that are used to determine how to collapse individual search  Results are collapsed into one or a specified number of results if they match any of the individual collapse specifications. Within a single collapse specification, results are collapsed if their properties match all individual properties in the collapse specification. |
| Culture | number | The locale ID (LCID) for the query (see Locale IDs Assigned by Microsoft). |
| DesiredSnippetLength | number | The preferred number of characters to display in the hit-highlighted summary generated for a search result. |
| EnableFql | boolean | A Boolean value that specifies whether the query uses the FAST Query Language (FQL). |
| EnableInterleaving | boolean | A Boolean value that specifies whether the result tables that are returned for the result block are mixed with the result tables that are returned for the original query. |
| EnableNicknames | boolean | A Boolean value that specifies whether the exact terms in the search query are used to find matches, or if nicknames are used also. |
| EnablePhonetic | boolean | A Boolean value that specifies whether the phonetic forms of the query terms are used to find matches. |
| EnableOrderingHitHighlightedProperty | boolean | A Boolean value that specifies whether the hit highlighted properties can be ordered. |
| EnableQueryRules | boolean | A Boolean value that specifies whether to enable query rules for the query. |
| EnableSorting | boolean | A Boolean value that specifies whether to sort search |
| EnableStemming | boolean | A Boolean value that specifies whether stemming is enabled. |
| GenerateBlockRankLog | boolean | A Boolean value that specifies whether to return block rank log information in the BlockRankLog property of the interleaved result table. A block rank log contains the textual information on the block score and the documents that were de-duplicated. |
| HiddenConstraints | string | The additional query terms to append to the query. |
| HitHighlightedMultivaluePropertyLimit | number | The number of properties to show hit highlighting for in the search. |
| HithighlightedProperties | Types.SP.Results.String | The properties to highlight in the search result summary when the property value matches the search terms entered by the user. |
| MaxSnippetLength | number | The maximum number of characters to display in the hit-highlighted summary generated for a search result. |
| QLSQuerySession | string |
| PersonalizationData | string | The GUID for the user who submitted the search query. |
| ProcessBestBets | boolean | A Boolean value that specifies whether to return best bet results for the query. |
| ProcessPersonalFavorites | boolean | A Boolean value that specifies whether to return personal favorites with the search. |
| Properties | KeyValue | Additional properties for the query. |
| QueryTag | string | Custom tags that identify the query. You can specify multiple query tags, separated by semicolons. |
| QueryTemplate | string | A string that contains the text that replaces the query text, as part of a query transform. |
| QueryTemplatePropertiesUrl | string | The location of the queryparametertemplate.xml file. This file is used to enable anonymous users to make Search REST queries. |
| Querytext | string | A string that contains the text for the search query |
| RankingModelId | string | The ID of the ranking model to use for the query. |
| RefinementFilters | Types.SP.Results.String | The set of refinement filters used when issuing a refinement query. For GET requests, the RefinementFilters parameter is specified as an FQL filter. For POST requests, the RefinementFilters parameter is specified as an array of FQL filters. |
| Refiners | string | The set of refiners to return in a search result. |
| ReorderingRules | Array<ReorderingRulesCreationInformation> | Special rules for reordering search  These rules can specify that documents matching certain conditions are ranked higher or lower in the results. |
| ResultsUrl | string | The URL for the search results page. |
| RowLimit | number | The maximum number of rows overall that are returned in the search  Compared to RowsPerPage, RowLimit is the maximum number of rows returned overall. |
| RowsPerPage | number | The maximum number of rows to return per page. Compared to RowLimit, RowsPerPage refers to the maximum number of rows to return per page, and is used primarily when you want to implement paging for search. |
| SelectProperties | Types.SP.Results.String | The managed properties to return in the search  To return a managed property, set the property's retrievable flag to true in the search schema. |
| SortList | Types.SP.Results.Object | The list of properties by which the search results are ordered. |
| SourceId | string | The result source ID to use for executing the search query. |
| StartRow | number | The first row that is included in the search results that are returned. You use this parameter when you want to implement paging for search. |
| SummaryLength | number | The number of characters to display in the result summary for a search result. |
| Timeout | number | The amount of time in milliseconds before the query request times out. The default value is 30000. |
| TimeZoneId | number |
| TotalRowsExactMinimum | number |
| TrimDuplicates | boolean | A Boolean value that specifies whether duplicate items are removed from the results. |
| TrimDuplicatesIncludeId | boolean |
| UIlanguage | number | The locale identifier (LCID) of the user export interface (see Locale IDs Assigned by Microsoft). |
| UseOLSQuery | number |

#### Search Suggestion

| Property | Type | Description |
| --- | --- | --- |
| ClientType | string |
| Culture | number | The locale ID (LCID) for the query (see Locale IDs Assigned by Microsoft). |
| EnableStemming | boolean | A Boolean value that specifies whether stemming is enabled. |
| EnableQueryRules | boolean | A Boolean value that specifies whether to turn on query rules for this query. |
| fCapitalizeFirstLetters | boolean | A Boolean value that specifies whether to capitalize the first letter in each term in the returned query suggestions. |
| fHitHighlighting | boolean | A Boolean value that specifies whether to hit-highlight or format in bold the query suggestions. |
| fPrefixMatchAllTerms | boolean | A Boolean value that specifies whether to return query suggestions for prefix matches. |
| fPreQuerySuggestions | boolean | A Boolean value that specifies whether to retrieve pre-query or post-query suggestions. |
| iNumberOfQuerySuggestions | number | The number of query suggestions to retrieve. Must be greater than zero (0). The default value is 5. |
| iNumberOfResultSuggestions | number | The number of personal results to retrieve. Must be greater than zero (0). The default value is 5. |
| OLSQuerySession | string |
| Querytext | string | A string that contains the text for the search query |
| ShowPeopleNameSuggestions | boolean | A Boolean value that specifies whether to include people names in the returned query suggestions. |
| SourceId | string |
| UseOLSQuery | boolean |

#### Search Result

| Property | Type | Description |
| --- | --- | --- |
| ElapsedTime | number |
| PrimaryQueryResult | QueryResult |
| Properties | KeyValue |
| SecondaryQueryResults | QueryResult |
| SpellingSuggestion | string |
| TriggeredRules | string |