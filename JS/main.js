/*COMENTARIO */
/*var nome = "Lucas Ribeiro";
var n1 = 5;
var n2 = 3;
var final = n1 * n2;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos!");

alert(final);

console.log(nome);
console.log(idade);
console.log(frase.toLowerCase());*/

let line = gets().split();
let A = parseInt(line[0]);
let B = parseInt(line[1]);
let total = A + B ; // Altere o valor da variável com o cálculo esperado
console.log("X = " + total);


//array
//var lista = ["Maça", " Pêra", " Laranja"];
//lista.push(" Uva");
//lista.pop(" Uva");
//console.log(lista.toString());
//console.log(lista.join(" - "));
//console.log(lista.join(" | "));
//alert(lista);


/*
//dicionario
var fruta = {nome: "maça", cor: "vermelha"}
console.log(fruta.nome);
alert("Qual a cor da fruta? " + fruta.cor);
*/

/*
//dicionario
var frutas = [{nome: "maça", cor: "vermelha"},{nome: "uva", cor: "roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/


/*
//if else
var idade = prompt("Qual sua idade?");
var idade = 18;
if(idade >= 18){
    alert("Maior de idade!");
}   else{
    alert("Menor de idade");
};

*/


/*
//Laço de repetição = while
var count = 0;
while (count < 5){
    console.log(count);
    count = count + 1;
}

*/


/*
//Laço de repetição = For
var count;
for(count = 0; count <= 7; count++){
    alert(count);
};

*/


/*
//date

var d = new Date();
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());

*/



/*funções
//funções

function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));

*/


//function soma(n1, n2){
   // return n1 + n2;}


/*
   function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validade = false
    }
    return validar;
}

    var idade = prompt("Qual sua idade?");
    console.log(validaIdade(idade));

    */



    function clicou(){
        console.log(document.getElementById("agradecimento").innerHTML = "<b>Valeu por clicar!</b>");
      //console.log(document.getElementById("agradecimento"));
        //alert("Obrigado por clicar!");
    }

    function redirecionar(){
    window.open("https://www.google.com/");
    window.location.href = "https://www.google.com/";

    }

    function trocar(elemento){
        elemento.innerHTML = "Obrigado por passar o mouse";
        //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
       //alert("Trocar texto");
    }

    function voltar(elemento){
        elemento.innerHTML = "Passe o mouse aqui";
        //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    }


    function load(){
        alert("Página carregada");
    }

    function funcaoChange(elemento){
    console.log(elemento.value)

    }


    