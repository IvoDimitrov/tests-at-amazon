$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("amazon_test.feature");
formatter.feature({
  "line": 1,
  "name": "Test add item to and edit basket at https://www.amazon.co.uk/",
  "description": "\r\nAs a non-registered user\r\nI want to search items on Amazon\r\nSo that I can add items to basket and edit basket",
  "id": "test-add-item-to-and-edit-basket-at-https://www.amazon.co.uk/",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Search from search bar",
  "description": "",
  "id": "test-add-item-to-and-edit-basket-at-https://www.amazon.co.uk/;search-from-search-bar",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "web browser is at web page \"\u003cWeb page\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user chooses section from dropdown \"\u003cDropdown section\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enters item in search field \"\u003cItem title\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "results for item are shown \"\u003cItem title\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "first item that appears in search result has type \"\u003cItem type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "first item that appears in search result has price \"\u003cItem price\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "test-add-item-to-and-edit-basket-at-https://www.amazon.co.uk/;search-from-search-bar;",
  "rows": [
    {
      "cells": [
        "Web page",
        "Dropdown section",
        "Item title",
        "Item type",
        "Item price"
      ],
      "line": 16,
      "id": "test-add-item-to-and-edit-basket-at-https://www.amazon.co.uk/;search-from-search-bar;;1"
    },
    {
      "cells": [
        "Amazon.co.uk: Low Prices in Electronics, Books, Sports Equipment \u0026 more",
        "Books",
        "Harry Potter and the Cursed Child - Parts One \u0026 Two",
        "Paperback",
        "£3.99"
      ],
      "line": 17,
      "id": "test-add-item-to-and-edit-basket-at-https://www.amazon.co.uk/;search-from-search-bar;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5618815201,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Search from search bar",
  "description": "",
  "id": "test-add-item-to-and-edit-basket-at-https://www.amazon.co.uk/;search-from-search-bar;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "web browser is at web page \"Amazon.co.uk: Low Prices in Electronics, Books, Sports Equipment \u0026 more\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user chooses section from dropdown \"Books\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enters item in search field \"Harry Potter and the Cursed Child - Parts One \u0026 Two\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "results for item are shown \"Harry Potter and the Cursed Child - Parts One \u0026 Two\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "first item that appears in search result has type \"Paperback\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "first item that appears in search result has price \"£3.99\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon.co.uk: Low Prices in Electronics, Books, Sports Equipment \u0026 more",
      "offset": 28
    }
  ],
  "location": "SearchFromSearchBar.webBrowserIsAtWebPage(String)"
});
formatter.result({
  "duration": 217067352,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 36
    }
  ],
  "location": "SearchFromSearchBar.userChoosesSectionFromDropdown(String)"
});
formatter.result({
  "duration": 1924303585,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter and the Cursed Child - Parts One \u0026 Two",
      "offset": 34
    }
  ],
  "location": "SearchFromSearchBar.userEntersItemInSearchField(String)"
});
formatter.result({
  "duration": 2245221013,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter and the Cursed Child - Parts One \u0026 Two",
      "offset": 28
    }
  ],
  "location": "SearchFromSearchBar.resultsForItemAreShown(String)"
});
formatter.result({
  "duration": 154915844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Paperback",
      "offset": 51
    }
  ],
  "location": "SearchFromSearchBar.firstItemThatAppearsInSearchResultHasType(String)"
});
formatter.result({
  "duration": 73339109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£3.99",
      "offset": 52
    }
  ],
  "location": "SearchFromSearchBar.firstItemThatAppearsInSearchResultHasPrice(String)"
});
formatter.result({
  "duration": 85774931,
  "status": "passed"
});
formatter.after({
  "duration": 964594599,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Navigate to item details",
  "description": "",
  "id": "test-add-item-to-and-edit-basket-at-https://www.amazon.co.uk/;navigate-to-item-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "web browser is at web page \"\u003cWeb page\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user chooses section from dropdown \"\u003cDropdown section\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user enters item in search field \"\u003cItem title\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user clicks on first item that appears in search result",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "new web page is loaded with item details \"\u003cItem title\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "item has title \"\u003cItem title\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "item has type \"\u003cItem type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "item has price \"\u003cItem price\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "test-add-item-to-and-edit-basket-at-https://www.amazon.co.uk/;navigate-to-item-details;",
  "rows": [
    {
      "cells": [
        "Web page",
        "Dropdown section",
        "Item title",
        "Item type",
        "Item price"
      ],
      "line": 30,
      "id": "test-add-item-to-and-edit-basket-at-https://www.amazon.co.uk/;navigate-to-item-details;;1"
    },
    {
      "cells": [
        "Amazon.co.uk: Low Prices in Electronics, Books, Sports Equipment \u0026 more",
        "Books",
        "Harry Potter and the Cursed Child",
        "Paperback",
        "£3.99"
      ],
      "line": 31,
      "id": "test-add-item-to-and-edit-basket-at-https://www.amazon.co.uk/;navigate-to-item-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4888608819,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Navigate to item details",
  "description": "",
  "id": "test-add-item-to-and-edit-basket-at-https://www.amazon.co.uk/;navigate-to-item-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "web browser is at web page \"Amazon.co.uk: Low Prices in Electronics, Books, Sports Equipment \u0026 more\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user chooses section from dropdown \"Books\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user enters item in search field \"Harry Potter and the Cursed Child\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user clicks on first item that appears in search result",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "new web page is loaded with item details \"Harry Potter and the Cursed Child\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "item has title \"Harry Potter and the Cursed Child\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "item has type \"Paperback\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "item has price \"£3.99\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon.co.uk: Low Prices in Electronics, Books, Sports Equipment \u0026 more",
      "offset": 28
    }
  ],
  "location": "SearchFromSearchBar.webBrowserIsAtWebPage(String)"
});
formatter.result({
  "duration": 66696827,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 36
    }
  ],
  "location": "SearchFromSearchBar.userChoosesSectionFromDropdown(String)"
});
formatter.result({
  "duration": 1842805948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter and the Cursed Child",
      "offset": 34
    }
  ],
  "location": "SearchFromSearchBar.userEntersItemInSearchField(String)"
});
formatter.result({
  "duration": 2679094805,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToItemDetails.userClicksOnFirstItemThatAppearsInSearchResult()"
});
formatter.result({
  "duration": 2303684767,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter and the Cursed Child",
      "offset": 42
    }
  ],
  "location": "NavigateToItemDetails.newWebPageIsLoadedWithItemDetails(String)"
});
formatter.result({
  "duration": 92680970,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter and the Cursed Child",
      "offset": 16
    }
  ],
  "location": "NavigateToItemDetails.itemHasTitle(String)"
});
formatter.result({
  "duration": 79411200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Paperback",
      "offset": 15
    }
  ],
  "location": "NavigateToItemDetails.itemHasType(String)"
});
formatter.result({
  "duration": 69647372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£3.99",
      "offset": 16
    }
  ],
  "location": "NavigateToItemDetails.itemHasPrice(String)"
});
formatter.result({
  "duration": 147509890,
  "status": "passed"
});
formatter.after({
  "duration": 880576907,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Add item to basket",
  "description": "",
  "id": "test-add-item-to-and-edit-basket-at-https://www.amazon.co.uk/;add-item-to-basket",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "web browser is at web page \"\u003cWeb page\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "user chooses section from dropdown \"\u003cDropdown section\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user enters item in search field \"\u003cItem title\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user clicks on first item that appears in search result",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user clicks on add button",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "notification is shown \"\u003cNotification\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "item has quantity \"\u003cQuantity\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 42,
  "name": "",
  "description": "",
  "id": "test-add-item-to-and-edit-basket-at-https://www.amazon.co.uk/;add-item-to-basket;",
  "rows": [
    {
      "cells": [
        "Web page",
        "Dropdown section",
        "Item title",
        "Notification",
        "Quantity"
      ],
      "line": 43,
      "id": "test-add-item-to-and-edit-basket-at-https://www.amazon.co.uk/;add-item-to-basket;;1"
    },
    {
      "cells": [
        "Amazon.co.uk: Low Prices in Electronics, Books, Sports Equipment \u0026 more",
        "Books",
        "Harry Potter and the Cursed Child - Parts One \u0026 Two",
        "Added to Basket",
        "1"
      ],
      "line": 44,
      "id": "test-add-item-to-and-edit-basket-at-https://www.amazon.co.uk/;add-item-to-basket;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4036047579,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Add item to basket",
  "description": "",
  "id": "test-add-item-to-and-edit-basket-at-https://www.amazon.co.uk/;add-item-to-basket;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "web browser is at web page \"Amazon.co.uk: Low Prices in Electronics, Books, Sports Equipment \u0026 more\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "user chooses section from dropdown \"Books\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user enters item in search field \"Harry Potter and the Cursed Child - Parts One \u0026 Two\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user clicks on first item that appears in search result",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user clicks on add button",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "notification is shown \"Added to Basket\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "item has quantity \"1\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon.co.uk: Low Prices in Electronics, Books, Sports Equipment \u0026 more",
      "offset": 28
    }
  ],
  "location": "SearchFromSearchBar.webBrowserIsAtWebPage(String)"
});
formatter.result({
  "duration": 1705423511,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 36
    }
  ],
  "location": "SearchFromSearchBar.userChoosesSectionFromDropdown(String)"
});
formatter.result({
  "duration": 297010617,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter and the Cursed Child - Parts One \u0026 Two",
      "offset": 34
    }
  ],
  "location": "SearchFromSearchBar.userEntersItemInSearchField(String)"
});
formatter.result({
  "duration": 2073136526,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToItemDetails.userClicksOnFirstItemThatAppearsInSearchResult()"
});
formatter.result({
  "duration": 2175792443,
  "status": "passed"
});
formatter.match({
  "location": "AddItemToBasket.userClicksOnAddButton()"
});
formatter.result({
  "duration": 1005611726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Added to Basket",
      "offset": 23
    }
  ],
  "location": "AddItemToBasket.notificationIsShown(String)"
});
formatter.result({
  "duration": 73090149,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 19
    }
  ],
  "location": "AddItemToBasket.itemHasQuantity(String)"
});
formatter.result({
  "duration": 74472380,
  "status": "passed"
});
formatter.after({
  "duration": 848433039,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 46,
  "name": "Edit basket",
  "description": "",
  "id": "test-add-item-to-and-edit-basket-at-https://www.amazon.co.uk/;edit-basket",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 47,
  "name": "web browser is at web page \"\u003cWeb page\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "user chooses section from dropdown \"\u003cDropdown section\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user enters item in search field \"\u003cItem title\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "user clicks on first item that appears in search result",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "user clicks on add button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "user clicks on edit button",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "new page \"\u003cBasket web page\u003e\" is loaded with basket details \"\u003cBasket details\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "item in basket has title \"\u003cItem title\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "item in basket has type \"\u003cItem type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "item in basket has price \"\u003cItem price\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "item in basket has quantity \"\u003cQuantity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "basket has total price \"\u003cTotal price\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 60,
  "name": "",
  "description": "",
  "id": "test-add-item-to-and-edit-basket-at-https://www.amazon.co.uk/;edit-basket;",
  "rows": [
    {
      "cells": [
        "Web page",
        "Dropdown section",
        "Item title",
        "Basket web page",
        "Basket details",
        "Item type",
        "Item price",
        "Quantity",
        "Total price"
      ],
      "line": 61,
      "id": "test-add-item-to-and-edit-basket-at-https://www.amazon.co.uk/;edit-basket;;1"
    },
    {
      "cells": [
        "Amazon.co.uk: Low Prices in Electronics, Books, Sports Equipment \u0026 more",
        "Books",
        "Harry Potter and the Cursed Child",
        "Amazon.co.uk Shopping Basket",
        "Shopping Basket",
        "Paperback",
        "£3.99",
        "1",
        "£3.99"
      ],
      "line": 62,
      "id": "test-add-item-to-and-edit-basket-at-https://www.amazon.co.uk/;edit-basket;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5016454196,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Edit basket",
  "description": "",
  "id": "test-add-item-to-and-edit-basket-at-https://www.amazon.co.uk/;edit-basket;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 47,
  "name": "web browser is at web page \"Amazon.co.uk: Low Prices in Electronics, Books, Sports Equipment \u0026 more\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "user chooses section from dropdown \"Books\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user enters item in search field \"Harry Potter and the Cursed Child\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "user clicks on first item that appears in search result",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "user clicks on add button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "user clicks on edit button",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "new page \"Amazon.co.uk Shopping Basket\" is loaded with basket details \"Shopping Basket\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "item in basket has title \"Harry Potter and the Cursed Child\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "item in basket has type \"Paperback\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "item in basket has price \"£3.99\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "item in basket has quantity \"1\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "basket has total price \"£3.99\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon.co.uk: Low Prices in Electronics, Books, Sports Equipment \u0026 more",
      "offset": 28
    }
  ],
  "location": "SearchFromSearchBar.webBrowserIsAtWebPage(String)"
});
formatter.result({
  "duration": 70955057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 36
    }
  ],
  "location": "SearchFromSearchBar.userChoosesSectionFromDropdown(String)"
});
formatter.result({
  "duration": 1919312981,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter and the Cursed Child",
      "offset": 34
    }
  ],
  "location": "SearchFromSearchBar.userEntersItemInSearchField(String)"
});
formatter.result({
  "duration": 2288241495,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToItemDetails.userClicksOnFirstItemThatAppearsInSearchResult()"
});
formatter.result({
  "duration": 2107963484,
  "status": "passed"
});
formatter.match({
  "location": "AddItemToBasket.userClicksOnAddButton()"
});
formatter.result({
  "duration": 1264256438,
  "status": "passed"
});
formatter.match({
  "location": "EditBasket.userClicksOnEditButton()"
});
formatter.result({
  "duration": 1140417771,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon.co.uk Shopping Basket",
      "offset": 10
    },
    {
      "val": "Shopping Basket",
      "offset": 71
    }
  ],
  "location": "EditBasket.newPageIsLoadedWithBasketDetails(String,String)"
});
formatter.result({
  "duration": 127229375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter and the Cursed Child",
      "offset": 26
    }
  ],
  "location": "EditBasket.itemInBasketHasTitle(String)"
});
formatter.result({
  "duration": 85159783,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Paperback",
      "offset": 25
    }
  ],
  "location": "EditBasket.itemInBasketHasType(String)"
});
formatter.result({
  "duration": 66487699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£3.99",
      "offset": 26
    }
  ],
  "location": "EditBasket.itemInBasketHasPrice(String)"
});
formatter.result({
  "duration": 767900234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    }
  ],
  "location": "EditBasket.itemInBasketHasQuantity(String)"
});
formatter.result({
  "duration": 68107227,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£3.99",
      "offset": 24
    }
  ],
  "location": "EditBasket.basketHasTotalPrice(String)"
});
formatter.result({
  "duration": 69697448,
  "status": "passed"
});
formatter.after({
  "duration": 889708516,
  "status": "passed"
});
});