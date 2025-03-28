const quesArr = ["1. What is the capital of china ? a) ktm b)delhi c)tokyo d)beijing",
    "2. Where is mt.everest situated ? a) nepal b)india c)srilanka d)singapore",
    "3. Father of modern science is consider to: a) charles babbage b)einstein c)edison d)newton",
    "4. How many days in a year ? a) 300 b) 365 c) 400 d) 366",
    "5. I am a student,_____(tag question) a) amn't I? b)aren't I? c) don't I? d) am I? "];
const ansArr = ['d','a','b','b','b'];
let point = Number(document.getElementById('point').textContent);
let tried = 0;
let count = 0;
let count2;
function loadQues(){
if (count >= quesArr.length){
    document.getElementById('mainBox').textContent = "no more question added. your final score is "+point;
    document.getElementById('mainBox').classList.add("overClass");
}
document.getElementById('strBtn').style.display = "none";
document.getElementById('nxtBtn').style.display = "inline";

document.getElementById('result').textContent = "";
document.getElementById('questionId').textContent = quesArr[count];
document.getElementById('answerOpt').style.display = "inline";
count2 = count;
tried = 0;
count++;
}
function checkAns(userChoose, optId){
    
let correctAns = ansArr[count2];
if(correctAns == userChoose){
    if(tried == 0){
        point += 10;
    }
    document.getElementById('result').textContent = "Correct "+userChoose;
    document.getElementById('result').style.backgroundColor = "green";
    document.getElementById('result').style.color = "white";
    document.getElementById('point').textContent = point;
}
else{
    tried++;
    document.getElementById('result').textContent = "Wrong "+userChoose;
    document.getElementById('result').style.backgroundColor = "red"
}
}