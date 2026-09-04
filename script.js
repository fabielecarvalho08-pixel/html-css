// 1. Seleciona APENAS os botões de reação dentro dos artigos
const botoesReacao = document.querySelectorAll("article button");

botoesReacao.forEach(function (botao) {
   let curtiu = false;
   
   botao.addEventListener("click", function () {
      let texto = botao.querySelector("span");
      
      // Converte o texto para número de forma segura
      let contador = Number(texto.textContent);

      if (!curtiu) {
         texto.textContent = contador + 1;
         curtiu = true;
      } else { 
         texto.textContent = contador - 1;
         curtiu = false;
      }
   });
});

// 2. Seleciona o botão com a classe exata usada no seu HTML (btn-modo-escuro)
const btnModoEscuro = document.querySelector(".btn-modo-escuro");

if (btnModoEscuro) {
   btnModoEscuro.addEventListener("click", function () {
      // Alterna a classe 'tema-escuro' no body da página
      document.body.classList.toggle("tema-escuro");
   });
}