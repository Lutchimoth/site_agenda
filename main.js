const form = document.getElementById('form-adicionar-num');
const btnAdiciona = document.getElementById('btn-adiciona');
const imgAdicionar = '<img src="./images/adicionar.png" alt="Imagem do +">';
const imgRetirar = '<img src="./images/subtrair.png" alt="Imagem do -">';
let contatos = [];

btnAdiciona.addEventListener('click', function () {
    form.style.display = form.style.display === 'none' ? 'flex' : 'none';
    btnAdiciona.innerHTML = form.style.display === 'none' ? imgAdicionar : imgRetirar;
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    adicionaContato();
    atualizaTabela();
});

function adicionaContato() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumContato = document.getElementById('num-contato');

    if (!inputNomeContato.value || !inputNumContato.value) {
        alert('Por favor, preencha ambos os campos.');
        return;
    }

    const existente = contatos.find(contato => contato.nome === inputNomeContato.value);

    if (existente) {
        alert(`O número: ${inputNomeContato.value} já está na lista.`);
    } else {
        const novoContato = {
            nome: inputNomeContato.value,
            numero: inputNumContato.value
        };

        contatos.push(novoContato);
    }

    inputNomeContato.value = '';
    inputNumContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = '';

    contatos.forEach(contato => {
        const linha = `<tr>
            <td>${contato.nome}</td>
            <td>${contato.numero}</td>
            <td><button class="btn-excluir" onclick="excluirContato('${contato.nome}')">Excluir</button></td>
        </tr>`;

        corpoTabela.innerHTML += linha;
    });
}

function excluirContato(nome) {
    contatos = contatos.filter(contato => contato.nome !== nome);
    atualizaTabela();

    
}
