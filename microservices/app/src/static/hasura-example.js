console.log("Hello World");

$(document).ready(function() {
    fetchArticles();
});

function fetchArticles() {
  $("#outputContainer").html("Fetching articles...");
  $.ajax({
  	url: "https://data.babysitting89.hasura-app.io/v1/query", //replace babysitting89 with your cluster-name
  	contentType: "application/json",
  	headers: {
        "X-Hasura-Role": "anonymous",
        "X-Hasura-User-Id": "0"
  	},
  	data: JSON.stringify({
        "type": "select",
        "args": {
              "table": "article",
              "columns": [
                    "content",
                    "author_id",
                    "id",
                    "title",
                    "rating"
              ]
        }
  	}),
  	type: "POST",
  	dataType: "json"
  }).done(function(json) {
  	//Handle Response
    $("#outputContainer").empty();
    showArticleList(json);
  }).fail(function(xhr, status, errorThrown) {
  	console.log("Error: " + errorThrown);
  	console.log("Status: " + status);
  	console.dir(xhr);
  });
}

function showArticleList(articleList) {
  $("#articleListContainer").append('<h1>Article List</h1>')
  articleList.forEach(function(article) {
    $("#articleListContainer").append('<h3>' + article.title + '</h3> \n<p>' + article.content + '</p> \n<hr>')
  });
}
