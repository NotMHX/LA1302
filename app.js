var questions = [
    {
        "id" : 1,
        "question" : "Was ist der längste Fluss der Welt?",
        "answerA" : "Nil",
        "answerB" : "Amazonas",
        "answerC" : "Donau",
        "answerD" : "Rhein",
        "correct" : "nil"
    },
    {
        "id" : 2,
        "question" : "Welche Stadt war die Hauptstadt Russlands vor Moskau?",
        "answerA" : "St. Petersburg",
        "answerB" : "Kiew",
        "answerC" : "Wolgograd",
        "answerD" : "Wladiwostok",
        "correct" : "st. petersburg"
    },
    {
        "id" : 3,
        "question" : "Welche dieser Länder grenzt nicht an China?",
        "answerA" : "Vietnam",
        "answerB" : "Laos",
        "answerC" : "Thailand",
        "answerD" : "Afghanistan",
        "correct" : "thailand"
    },
    {
        "id" : 4,
        "question" : "Wer war der letzter Präsident der Sowjetunion?",
        "answerA" : "Josif W. Stalin",
        "answerB" : "Nikita Chruschtschow",
        "answerC" : "Michail Sergejewitsch Gorbatschow",
        "answerD" : "Leo Trotzkij",
        "correct" : "gichail sergejewitsch gorbatschow"
    },
    {
        "id" : 5,
        "question" : "In welchem Jahr erreichte das Römische Reiche seine grösste Ausdehnung?",
        "answerA" : "Im Jahr 47",
        "answerB" : "Im Jahr 250",
        "answerC" : "Im Jahr 1207",
        "answerD" : "Im Jahr 116",
        "correct" : "im jahr 116"
    },
    {
        "id" : 6,
        "question" : "Wie viele Pyramiden haben die Antiken Ägypter gebaut?",
        "answerA" : "291",
        "answerB" : "118",
        "answerC" : "492",
        "answerD" : "57",
        "correct" : "118"
    },
    {
        "id" : 7,
        "question" : "Wie viele Punische Kriege gab es?",
        "answerA" : "3",
        "answerB" : "5",
        "answerC" : "10",
        "answerD" : "12",
        "correct" : "3"
    },
    {
        "id" : 8,
        "question" : "Welches Land erklärte zuerst den Krieg und begann den 1. Weltkrieg?",
        "answerA" : "Deutschland",
        "answerB" : "Österreich-Ungarn",
        "answerC" : "Serbien",
        "answerD" : "Russland",
        "correct" : "österreich-ungarn"
    },
    {
        "id" : 9,
        "question" : "Welche grosse Macht hat im 1. Weltkrieg gegen Deutschland kapituliert?",
        "answerA" : "Frankreich",
        "answerB" : "Grossbritannien",
        "answerC" : "Italien",
        "answerD" : "Russland",
        "correct" : "russland"
    },
    {
        "id" : 10,
        "question" : "Welches Land liegt in den meisten Zeitzonen?",
        "answerA" : "Russland",
        "answerB" : "USA",
        "answerC" : "Frankreich",
        "answerD" : "Grossbritanien",
        "correct" : "frankreich"
    },
    {
        "id" : 11,
        "question" : "Wie viele Zeitzonen hat Frankreich?",
        "answerA" : "10",
        "answerB" : "11",
        "answerC" : "12",
        "answerD" : "13",
        "correct" : "12"
    },
    {
        "id" : 12,
        "question" : "Wie viele Inselstaaten gibt es?",
        "answerA" : "46",
        "answerB" : "14",
        "answerC" : "39",
        "answerD" : "23",
        "correct" : "46"
    }
]

var current = 0;
var points = 0;
var soundCheck = document.getElementById('playSounds').checked;

document.getElementById('start1').addEventListener("click", createMultipleChoice);
document.getElementById('start2').addEventListener("click", createTextQuiz);
document.getElementById('countdown').style.display = "none";
document.getElementById('pause').style.display = "none";



function createMultipleChoice() {
    soundCheck = document.getElementById('playSounds').checked;

    console.log(questions);
    if (current == 0) {
        countdown();
        document.getElementById('pause').addEventListener('click', function() {
            alert("Quiz pausiert.");
        });
    }
    document.getElementById('start1').style.display = "none";
    document.getElementById('start2').style.display = "none";
    document.getElementById('title').style.display = "none";
    document.getElementById('content').style.display = "none";

    document.getElementById('countdown').style.display = "block";
    document.getElementById('pause').style.display = "block";

        var answerA = questions[current].answerA;
        var answerB = questions[current].answerB;
        var answerC = questions[current].answerC;
        var answerD = questions[current].answerD;

        var questionBox = document.getElementById('question');
        questionBox.innerHTML = questions[current].question;

        var answerBox = document.getElementById('points');
        answerBox.innerHTML = "Punkte: " + points;
        
        
        // Hier werden alle Antworten von allen Fragen angezeigt, es soll aber nur die Antworten einer Frage angezeigt werden.
        createBox(1, "row1", answerA, current);
        createBox(2, "row1", answerB, current);
        createBox(3, "row2", answerC, current);
        createBox(4, "row2", answerD, current);
    
    
}

function createBox(boxNr, row, content, i) {
    console.log("The ID is " + current);
    if (i > 0) {
        var boxID = `box${boxNr}`;
        document.getElementById(boxID).remove();
    }

    var box = document.createElement('div');
    box.className = "box";
    box.id = "box" + boxNr;
    box.appendChild(document.createTextNode(content));
    document.getElementById(row).append(box);

    checkAnswers(box, i);
    
}

function createTextQuiz() {
    soundCheck = document.getElementById('playSounds').checked;

    document.getElementById('start1').style.display = "none";
    document.getElementById('start2').style.display = "none";
    document.getElementById('title').style.display = "none";
    document.getElementById('content').style.display = "none";

    document.getElementById('countdown').style.display = "block";
    document.getElementById('pause').style.display = "block";

    if (current == 0) {
        countdown();
        document.getElementById('pause').addEventListener('click', function() {
            alert("Quiz pausiert.");
        });
    }
    if (current > 0) {
        document.getElementById('submit').remove();
        document.getElementById('input').remove();
    }

    var answer = document.getElementById("answer");
    var input = document.createElement("input");
    input.id = "input";
    answer.append(input);

    var button = document.createElement("button");
    button.innerHTML = "Los!";
    button.id = "submit";
    answer.append(button);
    console.log("Before checking " + current);
    var answerText = questions[current].correct;
        
    var questionBox = document.getElementById('question');
    questionBox.innerHTML = questions[current].question;
        
    var answerBox = document.getElementById('points');
    answerBox.innerHTML = "Punkte: " + points;
    

    button.addEventListener("click", function() {
        checkTextAnswers(input, answerText)});

    input.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                checkTextAnswers(input, answerText, current);
            }
        });
}

function checkTextAnswers(input, answerText, index) {

console.log(input);
        // macht erster buchstabe gross
        input.value = input.value.toLowerCase();

            if (input.value == answerText) {
                if (soundCheck) {
                    var audio = new Audio('sounds/correct.wav');
                    audio.loop = false;
                    audio.play();
                }

                setTimeout(() => {
                    alert("Korrekt!");
                  }, 500) 
                points++;
            }  

            else {
                if (soundCheck) {
                    var audio = new Audio('sounds/wrong.mp3');
                    audio.loop = false;
                    audio.play();
                }
                setTimeout(() => {
                    alert(`Falsch!\nDie korrekte Antwort wäre: ${answerText}`);
                  }, 500) 
                
            }
    
            current++;
            console.log("After checking " + current);
            createTextQuiz();


}

function checkAnswers(box, index) {

    box.addEventListener("click", function() {
        
        box.innerHTML = box.innerHTML.toLowerCase();
        
        console.log ("Selected: " + box.innerHTML);
        console.log("Correct: " + questions[index].correct);
            if (box.innerHTML === questions[index].correct) {
                if (soundCheck) {
                    var audio = new Audio('sounds/correct.wav');
                    audio.loop = false;
                    audio.play();
                }
                setTimeout(() => {
                    alert("Korrekt!");
                  }, 500)  
                points++;

            }
    
            else {
                if (soundCheck) {
                    var audio = new Audio('sounds/wrong.mp3');
                    audio.loop = false;
                    audio.play();
                }
                
                setTimeout(() => {
                    alert(`Falsch!\nDie korrekte Antwort wäre: ${questions[index].correct}`);
                  }, 500)
            }

            current++;
            console.log("The current question is " + current);
            createMultipleChoice();

    })
} 


// timer
var mins = 1;


var secs = mins * 60;


function countdown() {
    setTimeout('Decrement()', 60);
}

function Decrement() {
    if (document.getElementById) {
        minutes = document.getElementById("minutes");
        seconds = document.getElementById("seconds");


        if (seconds < 59) {
            seconds.value = secs;
        }


        else {
            minutes.value = getminutes();
            seconds.value = getseconds();
        }

        if (mins < 0 || current == questions.length) {
            if (soundCheck) {
                var audio = new Audio('sounds/wow.mp3');
                    audio.loop = false;
                    audio.play();
            }
            
            setTimeout(() => {
                alert(`Das Quiz ist vorbei!\nDeine Punktzahl lautet: ${points} / ${questions.length}`);
              }, 500) 
            
            minutes.value = 0;
            seconds.value = 0;
            setTimeout(() => {
                window.location.reload(true);
              }, 2000) 
            
            // end the quiz
        }
        else {
            secs--;
            setTimeout('Decrement()', 1000);
        }
    }
}

function getminutes() {
    mins = Math.floor(secs / 60);
    return mins;
}

function getseconds() {

    return secs - Math.round(mins * 60);
}

