
//carregar Api
var api_key = "?api_key=f7f27958a6eb8140f6f0257025e1137b"
var url = "https://api.themoviedb.org/3"


var populares = "/movie/popular"
var detalhes = "/movie/"
var lasted = "/movie/latest"
var melhores = "/movie/top_rated"
var lancamentos = "/movie/now_playing"
var embreve = "/movie/upcoming"


// repositorio das imagens
img = "https://image.tmdb.org/t/p/w500"

//Filmes em Breve 

var id = window.location.hash.slice(2)

console.log(id)

var request4 = new XMLHttpRequest();
request4.open('GET', url + detalhes + id + api_key, true);
request4.onload = function () {

  var data = JSON.parse(this.response);


  if (request4.status >= 200 && request4.status < 400) {


    var Elements = "";

    // Detalhes dos filmes
    Elements += "<header class='main' >";
    Elements += "<h1>" + data.title + "</h1>";
    Elements += "</header>";
    Elements += "<span href = 'generic.html#/"+ data.id +"' class='image'><img src = '" + img + data.backdrop_path + "' alt=''></span>";
    Elements += "<p>" + data.overview + "<p>";

    

    




    var tela = document.getElementById("detalhes_filmes").innerHTML = Elements;

  } else {
    console.log('erro');
  }
}

request4.send();