const form = document.getElementById('form-agendaContato');
const botao = document.getElementById('excluir-contato')
const names = [];
const emails = [];
const phones = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});


function adicionaLinha() {
    const inputNomeCompleto = document.getElementById('nomeCompleto-contato');
    const inputEmail = document.getElementById('e-mail-contato');
    const inputTelefone = document.getElementById('telefone-contato');

    if (phones.includes(inputTelefone.value)) {
        alert(`O telefone: ${inputTelefone.value} já foi inserido!`);
    } else {
        names.push(inputNomeCompleto.value);
        emails.push(inputEmail.value);
        phones.push(inputTelefone.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeCompleto.value}</td>`;
        linha += `<td>${inputEmail.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>'

        linhas += linha;

    }

    inputNomeCompleto.value = '';
    inputEmail.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


