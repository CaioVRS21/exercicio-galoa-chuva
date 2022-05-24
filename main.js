$(document).ready(function() {
	  
    $(".txtResumo").shorten({
        "showChars" :550,
        "moreText"	: "Ver mais",
        "lessText"	: "Ver menos",
    });

});

function mostrarForm(){
    var x = document.getElementById('novoComent')
    var y = document.getElementById('conteudo-disc')
  if (x.style.display === "none" && y.style.display === "block") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}

function concluirComent(){
    var y = document.getElementById('conteudo-disc')
    var z = document.getElementById('caixa_novo_coment')
    if (y.style.display === "none" && z.style.display === "none") {
        y.style.display = "block";
        z.style.display === "block";
      } else {
        y.style.display = "none";
        z.style.display === "none"
      }
}

function mostrarComent(){
    var x = document.getElementById('comentario')
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function mostrarComent2(){
    var x = document.getElementById('comentario2')
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}