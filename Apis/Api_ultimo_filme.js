
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

//ultimo Filme Lançado 

var request = new XMLHttpRequest();
request.open('GET', url + lasted + api_key, true);
request.onload = function () {

  var data = JSON.parse(this.response);

  // lista de filmes populares
  if (request.status >= 200 && request.status < 400) {

    var Elements_ultimo_filme = "";
    var button_ultimo = "";

    if (data.adult == false) {
      Elements_ultimo_filme += "<article>";
      Elements_ultimo_filme += "<a href = 'generic.html#/"+ data.id +"' class = 'image'><img src = '" + img + data.poster_path + "' alt = ''/></a>";
      Elements_ultimo_filme += "<p>" + data.title + "</p>";
      Elements_ultimo_filme += "</article>";
      
      button_ultimo += "<li><a href = 'generic.html#/"+ data.id +"' class='button'>More</a></li>";
      
      
    }
    
    else{
      Elements_ultimo_filme += "<article>";
      Elements_ultimo_filme += "<h1>Filme Adulto</h1>";
      Elements_ultimo_filme += "<p>" + data.title + "</p>";
      Elements_ultimo_filme += "</article>";
      
    }





    var tela = document.getElementById("ultimo_filme").innerHTML = Elements_ultimo_filme;
    var tela1 = document.getElementById("button_ultimo_filme").innerHTML = button_ultimo;


  } else {

    Elements_ultimo_filme += "<article>";
    Elements_ultimo_filme += "<h1>Filme sem Foto</h1>";
    Elements_ultimo_filme += "<p>" + data.title + "</p>";
    Elements_ultimo_filme += "</article>";
    
    var tela_erro = document.getElementById("ultimo_filme").innerHTML = Elements_ultimo_filme;
    
    console.log('erro');
  }
}

request.send();