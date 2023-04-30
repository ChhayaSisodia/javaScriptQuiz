const questions = [
    {
        q: 'Inside which element do we put the JavaScript?',
        a: {
            A: '<js>',
            B: '<javascript>',
            C: '<script>',
            D: '<scripting>'
        },
        correctOpt: '<script>'
    },
    {
        q: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        a: {
            A: '<script href = "xxx.js">',
            B: '<script src = "xxx.js">',
            C: '<script name = "xxx.js">',
            D: '<script type = "xxx.js">'
        },
        correctOpt: '<script src = "xxx.js">'
    },
    {
        q: 'How do you write "Hello World" in an alert box?',
        a: {
            A: 'msg("Hello World");',
            B: 'msgBox("Hello World");',
            C: 'alert("Hello World");',
            D: 'alertBox("Hello World");'
        },
        correctOpt: 'alert("Hello World");'
    },
    {
        q: 'How do you create a function in JavaScript?',
        a: {
            A: 'function:myFunction()',
            B: 'alert("Hello World");',
            C: 'function = myFunction()',
            D: 'function myFunction()'
        },
        correctOpt: 'function myFunction()'
    },
    {
        q: 'How do call a function named "myFunction"?',
        a: {
            A: 'call myFunction()',
            B: 'call function myFunction()',
            C: 'function myFunction{}',
            D: 'myFunction()'
        },
        correctOpt: 'myFunction()'
    }
];

let i = 0;
let question = document.getElementById('question');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let option4 = document.getElementById('option4');

// function for setting questions
function setQuestion() {
    question.innerText = `${i + 1}. ${questions[i].q}`;
    option1.innerText = questions[i].a.A;
    option2.innerText = questions[i].a.B;
    option3.innerText = questions[i].a.C;
    option4.innerText = questions[i].a.D;

    // For setting green on right and red on wrong option on click event
    option1.addEventListener('click', () => {
        if (option1.innerText == questions[i].correctOpt) {
            option1.style.backgroundColor = '#00CC00';
        } else {
            option1.style.backgroundColor = '#FF0000';
        }
    })

    option2.addEventListener('click', () => {
        if (option2.innerText == questions[i].correctOpt) {
            option2.style.backgroundColor = '#00CC00';
        } else {
            option2.style.backgroundColor = '#FF0000';
        }
    })
    option3.addEventListener('click', () => {
        if (option3.innerText == questions[i].correctOpt) {
            option3.style.backgroundColor = '#00CC00';
        } else {
            option3.style.backgroundColor = '#FF0000';
        }
    })
    option4.addEventListener('click', () => {
        if (option4.innerText == questions[i].correctOpt) {
            option4.style.backgroundColor = '#00CC00';
        } else {
            option4.style.backgroundColor = '#FF0000';
        }
    })
}
setQuestion();



// For Next Button
let next = document.getElementById('next');
next.addEventListener('click', (e) => {
    console.log(e); i++;
    setQuestion();
    option1.style.background = 'none';
    option2.style.background = 'none';
    option3.style.background = 'none';
    option4.style.background = 'none';
})


// For Previous Button 
let previous = document.getElementById('previous');
previous.addEventListener('click', (e) => {
    i--;
    setQuestion();
    option1.style.background = 'none';
    option2.style.background = 'none';
    option3.style.background = 'none';
    option4.style.background = 'none';
})

