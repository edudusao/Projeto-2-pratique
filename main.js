const form = document.getElementById("formulario");
const dados = [];

let linhas = "";

form.addEventListener("submit", function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const inputNome = document.getElementById("inserir-nome");
    const inputTelefone = document.getElementById("inserir-telefone");

    if(dados.includes(inputNome.value) && dados.includes(inputTelefone.value)){
        alert("Os dados já foram inseridos");
    } else {
        dados.push(inputNome.value);
        dados.push(inputTelefone.value);

        let linha = "<tr>";
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += `</td>`;

        linhas += linha;

        inputNome.value = "";
        inputTelefone.value = "";
    }

    
}

function atualizaTabela(){
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}