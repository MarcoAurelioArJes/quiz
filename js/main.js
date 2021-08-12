let questaoAtual = 0;
let questaoCerta = 0;

questions();

document.querySelectorAll(".question").forEach( questoes => {
    questoes.addEventListener('click', questionSelect);
});

function questionSelect() {
    document.querySelector('.barra').style.width = '50%';
    questaoAtual++;
    questions();
}

function questions() {

    let q = questoes[questaoAtual];
    if (questoes[questaoAtual]) {
        document.querySelector('.questionsList').style.display = 'block';

        document.querySelector('.titleQuestion').innerHTML = q.pergunta;

        let respostaHTML = '';
        for(let i in q.respostas) {
            respostaHTML += `<li class="question"><span class="numeroQ">${parseInt(i)+1}</span>${q.respostas[i]}</li>`;
        }
        document.querySelector('.questionsList').innerHTML = respostaHTML;
        
    } else {
        resultado();
    }
}

function resultado() {
    document.querySelector('.questionsList').style.display = 'none';
    document.querySelector('.mainResultado').style.display = 'block';
}