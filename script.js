let score = 0; 


function startQuiz() {
    document.getElementById('start-button').style.display = 'none'; 
    document.getElementById('question-1').style.display = 'block'; 
}


function nextQuestion(questionNumber) {
   
    if (questionNumber === 1 && event.target.textContent === "Brasília") {
        score++;
    } else if (questionNumber === 2 && event.target.textContent === "Leonardo da Vinci") {
        score++;
    } else if (questionNumber === 3 && event.target.textContent === "Júpiter") {
        score++;
    }

   
    document.getElementById('question-' + questionNumber).style.display = 'none';

   
    if (questionNumber === 1) {
        document.getElementById('question-2').style.display = 'block';
    } else if (questionNumber === 2) {
        document.getElementById('question-3').style.display = 'block';
    } else {
        showResult(); 
    }
}


function showResult() {
    const resultMessage = score === 3 ? 'Parabéns! Você acertou todas as perguntas!' :
                         score === 2 ? 'Você acertou 2 perguntas. Boa tentativa!' :
                         score === 1 ? 'Você acertou 1 pergunta. Melhor sorte da próxima vez!' :
                         'Você não acertou nenhuma pergunta. Tente novamente!';

    const resultDiv = document.createElement('div');
    resultDiv.className = 'alert alert-info';
    resultDiv.innerHTML = `Você acertou ${score} pergunta(s). <br> ${resultMessage}`;
    document.getElementById('result').appendChild(resultDiv);

    
    document.getElementById('restart-button').style.display = 'inline-block';
}


function restartQuiz() {
   
    score = 0;

    
    document.getElementById('result').innerHTML = '';
    document.getElementById('restart-button').style.display = 'none';


    document.getElementById('start-button').style.display = 'inline-block';

    
    document.getElementById('question-1').style.display = 'none';
    document.getElementById('question-2').style.display = 'none';
    document.getElementById('question-3').style.display = 'none';
}
