var header__nav = document.getElementsByClassName('header__nav');
var header__button = document.getElementsByClassName('header__button');
var works__title = document.getElementsByClassName('works__title');
var works__caption = document.getElementsByClassName('works__caption');
var header__link = document.getElementsByClassName('header__link');
var navbar_collapse = document.getElementsByClassName('navbar-collapse');
var html = document.documentElement;
var el = document.body.getElementsByTagName('*');


function setCenter(...el){
  for(var i = 0; i<el.length; i++){
    for(var j = 0; j < el[i].length; j++){
      el[i][j].style.marginLeft = "-" + (el[i][j].offsetWidth/2) + "px";
    }
  }
}

setCenter(works__title,works__caption,header__nav);

window.addEventListener('resize', function(){
  setCenter(works__title,works__caption,header__nav);
},true);


header__button[0].onclick = function(){
  if(this.getAttribute('aria-expanded') == 'false'){
    for (var i = 0; i < el.length; i++) {
      el[i].style.opacity = 0.2;
    }
    html.style.overflow = "hidden";
    for(var i = 0; i<header__link.length; i++){
      header__link[i].onclick = function(){
        for (var i = 0; i < el.length; i++) {
          if(el[i].classList.contains('works__bg') || el[i].classList.contains('works__title') || el[i].classList.contains('works__caption')){
            el[i].style.opacity = 0;
          }
          else{el[i].style.opacity = 1;}
        }
        html.style.overflow = "auto";
        navbar_collapse[0].classList.remove("show");
      }
    }
  }
  else{
    for (var i = 0; i < el.length; i++) {
        if(el[i].classList.contains('works__bg') || el[i].classList.contains('works__title') || el[i].classList.contains('works__caption')){
          el[i].style.opacity = 0;
        }
        else{el[i].style.opacity = 1;}
    }
    html.style.overflow = "auto";
  }
}
