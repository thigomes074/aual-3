//documento object model
//modle de objetos do documento
function troca(){
let li = document.body.children[2].children[1];
// o segundo filho do terceiro filho do body
li.textContent='geografia';//html
li.style.color='blue';//css
li.parentElement.style.backgroundColor='red';
//DOM TRAVERSING (navegação no DOM)
}

document.body.children[5].onclick=troca;
