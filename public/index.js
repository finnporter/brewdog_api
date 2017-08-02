var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();

  request.addEventListener('load', callback);

  request.open('GET', url);
  request.send();
};

var requestComplete = function() {
  console.log("this. is:", this);
  if (this.status !== 200) return;
  var jsonString = this.responseText;
  var beers = JSON.parse(jsonString);
}

var app = function () {
  var url = "https://api.punkapi.com/v2/beers";
  makeRequest(url, requestComplete)

}

window.addEventListener('load', app);
