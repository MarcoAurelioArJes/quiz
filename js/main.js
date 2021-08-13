let questaoAtual = 0;
let questaoCerta = 0;
let questaoErrada = 0;

questions();

function questions() {
    //Adicionando o objeto questão há uma variável
    let q = questoes[questaoAtual];
    if (q) {
        document.querySelector('.mainResultado').style.display = 'none';
        document.querySelector('.questionsList').style.display = 'block';

        document.querySelector('.titleQuestion').innerHTML = q.pergunta;

        barraDeProgresso();

        let respostaHTML = '';
        if (q.respostas) {
            for(let i in q.respostas) {
                respostaHTML += `<li class="question" data-answer=${i}><span class="numeroQ">${parseInt(i)+1}</span>${q.respostas[i]}</li>`;
            }
        } else if (q.respostasM) {
            for(let i in q.respostasM) {
                respostaHTML += `<li class="question" data-answer=${i}><span class="numeroQ">${parseInt(i)+1}</span><input type="checkbox" value=${q.respostasM[i]}></li>`;
            }
        }
        document.querySelector('.questionsList').innerHTML = respostaHTML;

        //Evento para chamar a função opcao escolhida
        document.querySelectorAll(".question").forEach( questoes => {
            //Passando como valor a função opcaoEscolhida();
            questoes.addEventListener('click', opcaoEscolhida);
        });
        
    } else {
        //Invocando a função
        resultado();
        barraDeProgresso();
    }
}

function barraDeProgresso() {
    let porcentagem = ((questaoAtual)/questoes.length)*100;
    document.querySelector('.barra').style.width = `${porcentagem}%`;
}

function opcaoEscolhida(event) {
    let selecionada = parseInt(event.target.getAttribute('data-answer'));
    if (questoes[questaoAtual].correta === selecionada) {
        questaoCerta++;
    } else if (questoes[questaoAtual].correta !== selecionada) {
        questaoErrada++;
    }

    mudaQuestao();
}

function mudaQuestao() {
    questaoAtual++;
    questions();
}

function resultado() {
    document.querySelector('.allQuestions').style.display = 'none';
    document.querySelector('.mainResultado').style.display = 'block';

    let acertos = (questaoCerta/questoes.length)*100;
    let erros = (questaoErrada/questoes.length)*100;

    let acertosHTML = document.querySelector('.acertos');
    let errosHTML = document.querySelector('.erros');
    
    acertosHTML.style.height = `${acertos}%`;
    errosHTML.style.height = `${erros}%`;

    acertosHTML.innerHTML = `${acertos}%`;
    errosHTML.innerHTML = `${erros}%`;
}

function restart() {

}