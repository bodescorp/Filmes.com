
//carregar Api
var api_key = "?api_key=f7f27958a6eb8140f6f0257025e1137b"
var url = "https://api.themoviedb.org/3"


var populares = "/movie/popular"
var detalhes = "/movie/{movie_id}"
var lasted = "/movie/latest"
var melhores = "/movie/top_rated"
var lancamentos = "/movie/now_playing"
var embreve = "/movie/upcoming"


// repositorio das imagens
img = "https://image.tmdb.org/t/p/w500"

//Filmes em Breve 

var request4 = new XMLHttpRequest();
request4.open('GET', url + embreve + api_key, true);
request4.onload = function () {

  var data = JSON.parse(this.response);


  if (request4.status >= 200 && request4.status < 400) {


    var lista_filmes_embreve = [data.results];
    var Elements = "";


    lista_filmes_embreve.forEach(results => {

      results.forEach(res => {
        // lista de filmes populares na tela principal

        Elements += "<article>";
        Elements += "<a href = 'generic.html#/"+ res.id +"' class='image'><img src = '" + img + res.backdrop_path + "' alt=''></a>";
        Elements += "<h3>" + res.title + "</h3>";
        Elements += "<p>" + res.overview + "</p>";
        Element += "<ul class='actions'>";
        Elements += "<li><a href = 'generic.html#/"+ res.id +"' class='button'>More</a></li>";
        Elements += "</ul>";
        Elements += "</article>";


      });
      var tela = document.getElementById("filmes_embreve").innerHTML = Elements;
    });

  } else {
    console.log('erro');
  }
}

request4.send();