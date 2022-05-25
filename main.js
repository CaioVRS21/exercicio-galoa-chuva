$(document).ready(function() {
	  
    $(".txtResumo").shorten({
        "showChars" :550,
        "moreText"	: "Ver mais",
        "lessText"	: "Ver menos",
    });

});

function mostrarForm(){
    const novoComent = document.getElementById('novoComent')
    const conteudoDisc = document.getElementById('conteudo-disc')
    novoComent.style.display = "block";
    conteudoDisc.style.display = "none";
}

function concluirComent(){
  const novoComent = document.getElementById('novoComent')
  const conteudoDisc = document.getElementById('conteudo-disc')
  const caixaNovoComent = document.getElementById('caixa_novo_coment')
  novoComent.style.display = "none";
  conteudoDisc.style.display = "block";
  caixaNovoComent.style.display = "block";


  const txtEscreverNovoComent = document.getElementById('txtComp')
  const tituloNovoComent = document.getElementById('assunto_novo_coment')
  const textoNovoComent = document.getElementById('txt_novo_coment')
  const assuntoNovoComent = document.getElementById('assunto')

  tituloNovoComent.innerHTML = assuntoNovoComent.value
  textoNovoComent.innerHTML = txtEscreverNovoComent.value

}

function mostrarComent(){
  const comentario = window.document.getElementById('comentario')
  if (comentario.style.display === "none") {
    comentario.style.display = "block";
  } else {
    comentario.style.display = "none";
  }
}

function mostrarComent2(){
    const comentario2 = document.getElementById('comentario2')
  if (comentario2.style.display === "none") {
    comentario2.style.display = "block";
  } else {
    comentario2.style.display = "none";
  }
}