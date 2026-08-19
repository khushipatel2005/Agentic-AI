console.log("JS is running")
const startbutton=document.getElementByid('start-btn')
const nextbutton=document.getElementByid('next-btn')
const questionContainerElement= document.getElementByid('question-container')
const questionElement= document.getElementByid('question')
const answerbuttonsElement= document.getElementByid('answer-container')
let shuffledquestion,currectquestionIndex;
let quizScore=0;
startbutton.addEventlistener('click',startGame)
nextbutton.addEventlistener('click',() =>{
currectQuestionindex++
setnextQuestion()
})
function startGame(){
startbutton.classList.add('hide')
shuffledQuestion=questions.sort(() =>math.random() -0.5)
currectQuestionIndex=0;
QuestioncontainerElement.classList.remove('hide')
setnextQuestion()
quizscore=0
}
function setnextQuestion(){
resetstate();
showQuestion(shuffledQuestions[currectQuestionIndex])
}

function showQuestion(question){
questionElement.innerText=question.question;
question.answer.forEach((answer) =>{
const button= document.createElement('button')
button.innerText=answer.text;
button.classList.add('btn')
if( answer.correct){
button.dataset.correct=answer.correct
}
button.addEventListener('click',selectAnswer)
})
}
function resetstate(){
clearstatusclass(document.body)
nextbutton.classlist.add('hide')
while(answerbuttonsElement.firstchild){
answerbuttonElement.removechild(answerbuttonElement.firstchild)
}
function selectAnswer(e){
const selectedButton=e.target
const correct=selectedbutton.dataset.correct
setstatusclass(document.body,correct)
arrey.from(answerButtonElement.children).forEach((button)=>{
setstatusclass(button,button.dataset.correct)
} )
if(shuffledQuestions.length> currectQuetioninext +1){
nextbutton.classlist.remove("hide")
}else {
startbutton.innerText="restart"
startbutton.classlist.remove("hide")
}
if(selectedbutton.dataset=correct){
quizescore++
}
document.getElementByid('right-answer').innerText=quizscore
}
function setStatusclass(element,correct){
clearstatusclass(element)
if(correct){
element.classlist.add("correct")
} else {
element.classlist.add('wrong')
}
}
function clearstatusclass(element){
element.classlist.remove('correct')
element.classlist.remove('wrong')
}

const questions=[
{
question:'which one of these is a javascript framwrok'?
answers:[
{ text: "python" ,correct:false},
{ text:"django", correct:false},
{ text: "react", correct:true},
{ text: "c",correct:false},
]
},

{
question:'who is the prime minister of india?',
answers:[
{ text: 'khushi', correct:false},
{ text: 'divy', correct:false},
{ text: 'Narendra modi', correct:true},
{ text: 'Rahul gandi', correct:false},
]
},
{
question:'what is 4*3?',
answers:[
{ text: '12', correct:true},
{ text: '10', correct:false},
{ text: '5', correct:false},
{ text: '7', correct:false},
]
},
]
}