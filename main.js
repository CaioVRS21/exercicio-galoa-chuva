$(document).ready(function() {
	  
    $(".txtResumo").shorten({
        "showChars" :550,
        "moreText"	: "Ver mais",
        "lessText"	: "Ver menos",
    });

});

function mostrarForm(){
    let x = document.getElementById('novoComent')
    let y = document.getElementById('conteudo-disc')
    let z = document.getElementById('caixa_novo_coment')
    x.style.display = "block";
    y.style.display = "none";
    // z.style.display = "block";
}
//   if (x.style.display === "none" && y.style.display === "block" && z.style.display === "none") {
//     x.style.display = "block";
//     y.style.display = "none";
//     z.style.display = "block";
//   } else {
//     x.style.display = "none";
//     y.style.display = "block";
//     z.style.display = "none";
//   }
// }

function concluirComent(){
  let x = document.getElementById('novoComent')
  let y = document.getElementById('conteudo-disc')
  let z = document.getElementById('caixa_novo_coment')
  x.style.display = "none";
  y.style.display = "block";
  z.style.display = "block";

}

function mostrarComent(){
  let x = window.document.getElementById('comentario')
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function mostrarComent2(){
    let x = document.getElementById('comentario2')
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}