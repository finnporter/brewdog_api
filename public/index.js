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

  populateBeerList(beers);
  console.log(beers)
};

var populateBeerList = function(beers) {

  beers.forEach(function(beer) {
    displayBeer(beer);
  });
};

var displayBeer = function(beer) {
  var ul = document.querySelector('#beer-list');
  var liName = document.createElement('li');
  var liImg = document.createElement('img');
  liName.innerText = beer.name;
  liImg.src = beer.image_url;
  liImg.height = 150;
  ul.appendChild(liName);
  ul.appendChild(liImg);
}



var app = function () {
  var url = "https://api.punkapi.com/v2/beers";
  makeRequest(url, requestComplete)

}

window.addEventListener('load', app);
