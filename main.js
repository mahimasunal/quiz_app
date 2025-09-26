const quizData = [
    {
        question : "Which method is used to select an element by its ID in the DOM?",
        answers : ["document.querySelector('.id')",
                 "document.getElementById('id')",
                 "document.getElementsByClassName('id')",
                 "document.querySelectorAll('#id')"
        ],
        correct : "document.getElementById('id')",
        isAnswered : false
    },
    {
        question : "Which method converts a JSON string into a JavaScript object?",
        answers : ["JSON.stringify()",
                   "JSON.parse()",
                  " JSON.convert()",
                   "JSON.object()"],
        correct : "JSON.parse()",
        isAnswered : false,
       
    },
    {
        question : "What will typeof NaN return in JavaScript?",
        answers : ["NaN","number","undefined","object"],
        correct : "number",
        isAnswered : false
    },
    {
        question : "Which keyword is used to create a constant variable?",
        answers : ["let","var","const","static"],
        correct : "const",
        isAnswered : false
    },
    {
        question : "What is the full form of DOM?",
        answers : ["Document Object Model", "Data Object Model","Digital Output Model","Design Object Method"],
        correct : "Document Object Model",
        isAnswered : false
    }
]


const ques = document.querySelector('.ques');
const ans = document.querySelectorAll('.ans');
const nextBtn = document.querySelector('.next_btn')
const prevBtn = document.querySelector('.prev_btn')
const quizContainer = document.querySelector('.quiz_container')
const mainContaier = document.querySelector('.main_container')

let current = 0
let score = 0


game(current)

function game(current){

    ques.innerHTML = quizData[current].question
    ans.forEach((answer,i)=>{    
        answer.style.backgroundColor = 'blue'    
       answer.innerHTML = quizData[current].answers[i] 
       if(quizData[current].selectedAnswerIndex && quizData[current].selectedAnswerIndex === i ){
        answer.style.backgroundColor = 'orange'
       }
    }) 
}


     nextBtn.addEventListener('click',()=>{
    
         current++

        if(current === quizData.length){
           quizContainer.classList.add('hidden')
           const p = document.createElement('p')
           p.classList.add("para")
           p.innerHTML = `your score is ${score}`
           mainContaier.appendChild(p)
       }
        game(current)

        if(current>0){
           prevBtn.classList.remove('hidden')
        }
       
    })


    prevBtn.addEventListener('click',()=>{
        
        current = current -1
        game(current)
        // console.log(current);
        if(current === 0){
            prevBtn.classList.add('hidden')
        }
    })
    

    ans.forEach((ans,i)=>{
    
        ans.addEventListener('click',()=>{
            if(quizData[current].isAnswered)return;
            // quizData[current].selectedAnswer = ans.innerHTML;
            quizData[current].selectedAnswerIndex = i
                if(ans.innerHTML === quizData[current].correct){
                    score = score + 1
                    ans.style.backgroundColor = 'yellow'
                     ans.style.color = 'black'
                }else {
                    ans.style.backgroundColor = "red";
     
                }
            quizData[current].isAnswered = true;

        console.log(quizData);
          })
    })
