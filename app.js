const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;

    let dados = { nome, email };

    localStorage.setItem('Dados', JSON.stringify(dados));

    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';

    swal.fire({ /* sweete2 - popup customizado */
        icon: "success",
        title: 'Cadastrado com sucesso!',
        text: 'Você receberá nossas ofertas com exclusividade.',
        background: '#FFb629',
        confirmButtonColor: '#000'
    });

})

function oferta1() {
    window.location = "../pg-ofertas/pg-oferta1.html";
}
function oferta2() {
    window.location = "../pg-ofertas/pg-oferta2.html";
}
function oferta3() {
    window.location = "../pg-ofertas/pg-oferta3.html";
}