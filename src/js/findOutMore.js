var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send();
};

function updateFeatures(json){
  var features__image = document.getElementsByClassName('features__image');
  var features__title = document.getElementsByClassName('features__title');
  for(var i=0; i<6; i++){
      var random = Math.floor(Math.random() * (json.length - 0)) + 0;
      features__title[i].innerHTML = json[random].title;
      features__image[i].setAttribute('src', json[random].thumbnailUrl)
  }
}

getJSON('https://jsonplaceholder.typicode.com/photos',
function(err, data) {
  if (err != null) {
    alert('Something went wrong: ' + err);
  } else {
    var masthead__button = document.getElementsByClassName('masthead__button');
    masthead__button[0].onclick = function(){ updateFeatures(data) };
  }
});
