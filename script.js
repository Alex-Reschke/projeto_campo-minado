const LINHA = 9;
const COLUNA = 9;
const MINAS = 10;

const tabuleiroEl = document.getElementById("tabuleiro");
const quantidadeMinas = document.getElementById("minas");
const reiniciar = document.getElementById("reiniciar-botao");
const timer = document.getElementById("timer");
let tabuleiro = [];

function criarTabuleiro() {
    tabuleiroEl.innerHTML = "";
    for (let l = 0; l < LINHA; l++) {
        for (let c = 0; c < COLUNA; c++) {
           const celula = document.createElement("div");
           celula.classList.add("celula");
           celula.dataset.linha = l;
           celula.dataset.coluna = c;
           tabuleiroEl.appendChild(celula);


        }
    }

}

function criarMatriz() {
    for (let l = 0; l < LINHA; l++){
        let linha = [];
        for (let c = 0; c < COLUNA; c++){
            const celula = {mina:0 , revelada:false , bandeira:false , vizinhas:0 };
            linha.push(celula);
            

        }
        tabuleiro.push(linha);
    }
}
criarMatriz();

criarTabuleiro(); 
