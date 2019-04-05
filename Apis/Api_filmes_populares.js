
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


// filmes populares
var request1 = new XMLHttpRequest();
request1.open('GET', url + populares + api_key, true);
request1.onload = function () {

  var data = JSON.parse(this.response);


  if (request1.status >= 200 && request1.status < 400) {


    var lista_filmes_populares = [data.results];
    var Elements = "";


    lista_filmes_populares.forEach(results => {

      results.forEach(res => {
        // lista de filmes populares na tela principal

        Elements += "<article>";
        Elements += "<a href = 'generic.html#/"+ res.id +"' class='image'><img src = '" + img + res.poster_path + "' alt=''></a>";
        Elements += "<h3>" + res.title + "</h3>";
        Elements += "<p>" + res.overview + "</p>";
        Element += "<ul class='actions'>";
        Elements += "<li><a href = 'generic.html#/"+ res.id +"' class='button'>More</a></li>";
        Elements += "</ul>";
        Elements += "</article>";


      });
      var tela = document.getElementById("filmes_populares").innerHTML = Elements;
    });


  } else {
    console.log('erro');
  }
}

request1.send();

