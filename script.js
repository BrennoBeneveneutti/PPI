let nome = "Romulo";
var sobrenome;
const pi=3.14857639;
let peso;
let altura;

if (nome == "Romulo") {
    sobrenome = "docinho";
    var idade = 20;
    var pet = "dog";
    console.log("Nome: " + nome + " Sobrenome: " + sobrenome + " Idade: " + idade + " Pet :" + pet);
}
console.log("Nome: " + nome + " Sobrenome: " + sobrenome + " Pet :" + pet);

idade=18;   
if (idade ==20){
    console.log("nome: "+nome);
}
else{
    console.log("nome: "+"Gustavo");
}

if(idade ==="18"){
    console.log("B");
}

peso=80;
altura=1.80;
imc=peso/(altura*altura);

if(imc<18.5){
    console.log("Abaixo do peso")
}
else{
    console.log("Acima do peso")
}
a=2;

switch(a){
    case a**a==4: console.log("A");break;
    case a==2: console.log("B");break;
    case 3==3: console.log("C");break;
    default: console.log("D");
}

let i=0;
while(i<5){
    console.log(i);
    i++;
}

for (let i=0; i<5; i++){
    console.log(i);
}

let carnes = ["Frango", "Carne de porco", "Carne de boi", "Peixer"];

carnes.forEach( (v1) => {
    console.log(v1);
} );


b=2.0;
a="2";

if(b==a){
    console.log("igual");
}

if(!(b===a)){
    console.log("diferente");
}

nome="Joao Henrrique Marcelo Boos";
nome2="Xhakinha";

let nomes=nome.split(" ").reverse().join(" ");
console.log(nomes);

let nomes2=nome2.split("").reverse().join("");
console.log(nomes2);

console.log(carnes.length.filter((v1) => {
    return v1.length>5;
}  
