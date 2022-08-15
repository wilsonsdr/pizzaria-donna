// executa a função é mostra as colunas
filterSelection("tradicional") 
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("pizza");
  if (c == "tradicional") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "mostrar");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "mostrar");
  }
}

// mostra os elementos filtrados
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// esconde os elementos não selecionados
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// adiciona uma classe "ativo" botão clicado
var cardapioEspecialidades = document.getElementById("cardapioEspecialidades");
var link = cardapioEspecialidades.getElementsByClassName("especialidades");
for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function(){
    var atual = document.getElementsByClassName("ativo");
    atual[0].className = atual[0].className.replace(" ativo", "");
    this.className += " ativo";
  });
}



