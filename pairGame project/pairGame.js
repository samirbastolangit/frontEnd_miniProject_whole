        let score = 0;
        // storing expected answer and operand in an array
        const ansArr = [12, 10, -14, 100, 0];
        const operatorArr = ['+', '/','*','-','%'];
        let updateScore = document.getElementById("scorepnt"); 
        // generating questions
        function generateQuestion(cameFrom){ 
          if( cameFrom === "next" && document.getElementById("yourResult").textContent === ""){
            alert("click check button at first!");
            console.log("hi");
          }
          else{
          if(cameFrom === "skip") {
            score -= 2;
            console.log("user click skip button and content of yourResult is :"
            +document.getElementById("yourResult").textContent);
          }
          if(cameFrom === "next"){
            console.log("user click next button and content of yourResult is :"
            +document.getElementById("yourResult").textContent);
            if (document.getElementById("yourResult").textContent === "correct"){
              score += 4;
            }
            else if(document.getElementById("yourResult").textContent === "incorrect"){
              score -= 1;
            }
          }
          updateScore.textContent = score;

          document.getElementById("yourResult").textContent = "";
            const ansPick = Math.floor(Math.random() * ansArr.length);
            const operatorPick = Math.floor(Math.random() * operatorArr.length);

            console.log(ansPick+" is pick from ans");
            console.log(operatorPick+" is pick from operator");

        document.getElementById("result").textContent = ansArr[ansPick];
        document.getElementById("operator").textContent = operatorArr[operatorPick];
        }
      }

        function checkAns(){

            
            var num1Element = document.getElementById("num1");
            var num1 = Number(num1Element.value);
            var num2 = Number(document.getElementById("num2").value);
            var operator = document.getElementById("operator").textContent;
            var result = document.getElementById("result").textContent;

        // checking
            console.log("your num 1 is "+num1);
            console.log("your num 2 is "+num2);
            console.log("your operator is "+operator);
            console.log("correct answer is: "+result);

            let userAns = calculate(num1, num2, operator);
            if ( userAns == result){
                console.log("your answer come: "+userAns);
                document.getElementById("yourResult").textContent = "correct";
                document.getElementById("yourResult").style.color = "blue";
              }
              else{
                document.getElementById("yourResult").textContent = "incorrect";
                console.log("user ans is: "+userAns);
                document.getElementById("yourResult").style.color = "red";
            }

        }
        function calculate(num1, num2, operator) {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else if (operator === '*') {
    return num1 * num2;
  } else if (operator === '/') {
    if (num2 === 0) {
      return "Division by zero";
    }
    return num1 / num2;
  } else if (operator === '%') {
    if (num2 === 0) {
      return "Modulo by zero";
    }
    return num1 % num2;
  } else if (operator === '**') {
      return num1 ** num2;
  } else {
    return "Invalid operator";
  }
}