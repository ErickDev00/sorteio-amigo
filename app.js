let pessoa = [];

let lista = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");



function adicionarAmigo(){
  let pegarAmigo = ""; 
  pegarAmigo = document.getElementById("amigo").value.trim();
  amigo = pegarAmigo.toLowerCase();

  if (amigo === ""){
    alert("Por favor digite um nome válido e me contrate.");
    return;
  }

  document.getElementById("resultado").innerText = "";



  if (pessoa.includes(amigo)){
    alert("este nome já foi inserido");
  } else {
    pessoa.push(amigo);

    //lista.innerHTML = pessoa.map(pessoas => `<li>${pessoas}</li>`).join("");
    
    lista.innerHTML = "";
    for (let i = 0; i < pessoa.length; i++) {
      lista.innerHTML += `<li>${pessoa[i]}</li>`; // Adiciona cada amigo na lista
  }

  }

  document.getElementById("amigo").value = ""; //limpa o input;

}


function sortearAmigo(){
  
  if (pessoa.length === 0){
    alert("Por favor, digite um nome.");
    return;
  }
  
  
  
  
  let indexAleatorio = Math.floor(Math.random() * pessoa.length);
  let pessoaSorteada = pessoa[indexAleatorio];

  console.log(pessoaSorteada);
  lista.classList.add("hide");

  //let ulResultado = document.getElementById("resultado").innerText = `A pessoa sorteada foi ${pessoaSorteada}`;

  resultado.innerText = `A pessoa sorteada foi ${pessoaSorteada}`;


  pessoa = [];
  


  document.getElementById("amigo").value = ""; //limpa o input;
  lista.innerHTML = "";

  

}





