var questionBank= [
    {
        question: ' 800 gramas de uma certa substância foi aquecida de 30°C para 90°C, e para isso foi necessário 3000 calorias qual é o calor específico de subatancia em questão?',
        option: ['0,0628 cal/g °F', '0,0620 cal/g °C', '0,0625 cal/g °C', '0,0625 cal/g °F'],
        answer: '0,0625 cal/g °C'
    },

    
    {
        question: 'Em um copo possui 400g de água a 60°C, então foi coloado 200g de uma substancia X a 30°C de calor especifico 2 cal/°C. Determine q temperatura de equilibrio do sistema água e substância X Calor específico água= 1 cal/g°C ',
        option:['45°F', '35°C', '40°F', '45°C'],
        answer: '45°C'
    },

    {
        question: 'Estabelece que "se dois corpos A e B estão separadamente em equilibrio térmico com um terceiro corpo C, então A e B estão em equilibrio térmico entre si "a que lei está se referindo o artigo a cima ',
        option:['lei da relatividade','lei zero da termodinâmica','lei de trânsito', '2° lei de newton' ],
        answer: 'lei zero da termodinâmica'
    },

    {
        question: ' Qual a quantidade de calor necessário para transformar 200g de gelo em 200g de água? ',
        option: ['1600 cal', '8000 cal', 'N.D.A','1200 cal' ],
        answer: '1600 cal'
    },

    {
        question: 'Paulo Henrique ganso e Alexandre Pato precisavam fazer um trabalho de física onde era necessário calcular o calor específico da água porém eles não tinham variação de temperatura e a quantidade de calor da água, eles tinham apenas a massa da água e a capacidade térmica. É possível descobrir o calor específico da água com essas informações? ',
        option: ['Sim, pois utilizando graus do conceito de capacidade térmica em C=m.c consegue descobrir o calor específico','Não, pois falta informação',' Não, pois a única forma de descobrir o calor específico é através do Q=m.c. delta T', 'Sim, pela 3 lei de newton' ],
        answer: 'Sim, pois utilizando graus do conceito de capacidade térmica em C=m.c consegue descobrir o calor específico'
    }
]



var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Questão"+' '+(i+1)+' '+'de'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();