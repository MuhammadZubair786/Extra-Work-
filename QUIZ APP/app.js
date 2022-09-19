var name1 = document.getElementById('name')
var cquestion = 0

function submit() {
    if (name1.value) {
        document.getElementById('main_div').style.display = 'block'
        document.getElementById('frm').style.display='none'
        questions(cquestion)
    }
    else {
        alert("Enter Your name")
    }

}


var arr = [
    {
        'Q ': 'What does HTML stand for?',
        'opt ': ['Home Tool Markup Language', 'Hyper Text Markup Language', 'HyperLink Mark up Language', 'HyperLink and Text Markup Language'],
        'cans': '2'

    },
    {
        'Q ': 'Choose the correct HTML element for the largest heading:',
        'opt ': ['<h1>', '<h3>', '<h6>', '<h4>'],
        'cans': '1'

    },
    {
        'Q ': 'What is the correct HTML element for inserting a line break?:',
        'opt ': ['<break>', '<rb>', '<br>', '<hr>'],
        'cans': '3'

    },
    {
        'Q ': 'Which character is used to indicate an end tag?:',
        'opt ': ['^', '<', '/', '*'],
        'cans': '3'

    },
    {
        'Q ': 'How can you open a link in a new tab/browser window?:',
        'opt ': ['<a href="url" new >', '<a href="url" target="_blank">', '<a href="url" target="new">', '<a href="url" targets="_blanks">'],
        'cans': '2'

    },
    {
        'Q ': 'Which of these elements are all <table> elements?:',
        'opt ': ['<table><tr><tt>', '<table><td><tr>', '<table><th><td>', '<table><tr><td>'],
        'cans': '4'

    },
    {
        'Q ': 'How can you make a numbered list?:',
        'opt ': ['<ol>', '<li>', '<ul>', '<list>'],
        'cans': '1'

    },
    {
        'Q ': 'What is the correct HTML for making a text input field?:',
        'opt ': ['<input type="textfield">', '<input type="text">', '<input type="field">', '<textinput type="textfield">'],
        'cans': '2'

    },
    {
        'Q ': 'In HTML,which attribute is used an input field must be filled out?:',
        'opt ': ['validate', 'placeholder', 'get', 'required'],
        'cans': '4'

    },
    {
        'Q ': 'Type Of Tag In Html:',
        'opt ': ['1', '3', '2', '4'],
        'cans': '3'

    },
]

question = document.getElementById('question')
op1 = document.getElementById('option1')
op2 = document.getElementById('option2')
op3 = document.getElementById('option3')
op4 = document.getElementById('option4')
q_no = document.getElementById('qof')

score = 0



function questions(q) {
    question.innerText = arr[q]["Q "]
    op1.innerText = arr[q]["opt "][0]
    op2.innerText = arr[q]["opt "][1]
    op3.innerText = arr[q]["opt "][2]
    op4.innerText = arr[q]["opt "][3]
    q_no.innerText = 'Question '+(q+1)+ " Of 5 "



}
function data(){
    var sOption = document.querySelector('input[type=radio]:checked');
   if(sOption == null){
       alert("Select Any One")
   }
   else{
      
       console.log("select Option",sOption.value)
       console.log("Correct Ans : ",arr[cquestion]["cans"])


       if(sOption.value == arr[cquestion]["cans"]){
           score++;

       }
       cquestion++;
       sOption.checked=false;
       if(5<=cquestion){
      
        document.getElementById('result').style.display='inline'
        document.getElementById('main_div').style.display='none'
        result()
    }

     questions(cquestion)

   }
}

function result(){
   document.getElementById('username').innerText="User Name :"+name1.value
   document.getElementById('Score').innerText="Score :"+score
   name1.value=''

}

function again(){
    document.getElementById('result').style.display='none'
    document.getElementById('frm').style.display='inline'

}