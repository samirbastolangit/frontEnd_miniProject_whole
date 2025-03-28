
        const btnOne = document.getElementById("btnOne");
        const btnTwo = document.getElementById("btnTwo");
        const btnThree = document.getElementById("btnThree");
        const btnFour = document.getElementById("btnFour");
        const btnFive = document.getElementById("btnFive");
        const btnSix = document.getElementById("btnSix");
        const btnSeven = document.getElementById("btnSeven");
        const btnEight = document.getElementById("btnEight");
        const btnNine = document.getElementById("btnNine");
        const displayFirst = document.getElementById("displayFirst");
        let gridFilled = 1;
        let firstTurn = '';
        let successiveTurn = '';
        let winner = 1 + Math.floor(Math.random() * 2);

        // setting first and successive turn
        if(Number(winner) === 1 && gridFilled === 1){
            firstTurn = 'X';
            successiveTurn = 'O';
        }
        else if(Number(winner) === 2 && gridFilled === 1){
            firstTurn = 'O';
            successiveTurn = 'X';
        }
        // unimp for console help
        console.log("random value from 1 and 2: ",winner);
        console.log("first turn won by ",firstTurn);
        console.log("new grid filled value: ",gridFilled);


        document.getElementById("displayTurn").textContent = firstTurn;
        function func(pressed){
            console.log("pressed button id: ",pressed);
            if(Number(gridFilled) === 1){
                document.getElementById(pressed).textContent = firstTurn;
                document.getElementById("displayTurn").textContent = successiveTurn;
                gridFilled++;
                console.log("new grid filled value: ",gridFilled);
            }
            if(document.getElementById(pressed).textContent === ""){
                if((gridFilled % 2) === 1){
                    document.getElementById(pressed).textContent = firstTurn;
                    document.getElementById("displayTurn").textContent = successiveTurn;
                }
                else if ((gridFilled % 2) === 0){
                    document.getElementById(pressed).textContent = successiveTurn;
                    document.getElementById("displayTurn").textContent = firstTurn;
                }
                gridFilled++;
                console.log("new grid filled value: ",gridFilled);
            }
            if(gridFilled >= 6){
                if(btnOne.textContent === btnTwo.textContent && btnOne.textContent === btnThree.textContent && btnOne.textContent !== ""){
                    document.getElementById("displayFirstId").style.display = "block";
                    displayFirst.textContent = btnOne.textContent;
                    btnOne.style.backgroundColor = "yellow";
                    btnTwo.style.backgroundColor = "yellow";
                    btnThree.style.backgroundColor = "yellow";

                    document.getElementById("container").style.opacity = "0.5";
                    document.getElementById("tap").style.display = "block";
                    console.log("game is won by: ",bthOne.textContent);
                }


                else if(btnFour.textContent === btnFive.textContent && btnFive.textContent === btnSix.textContent && btnFive.textContent !== ""){
                    document.getElementById("displayFirstId").style.display = "block";
                    displayFirst.textContent = btnFive.textContent;
                    btnFour.style.backgroundColor = "yellow";
                    btnFive.style.backgroundColor = "yellow";
                    btnSix.style.backgroundColor = "yellow";

                    document.getElementById("container").style.opacity = "0.5";
                    document.getElementById("tap").style.display = "block";
                    console.log("game is won by: ",bthFour.textContent);
                }

                else if(btnSeven.textContent === btnEight.textContent && btnEight.textContent === btnNine.textContent && btnSeven.textContent !== ""){
                    document.getElementById("displayFirstId").style.display = "block";
                    displayFirst.textContent = btnSeven.textContent;
                    btnSeven.style.backgroundColor = "yellow";
                    btnEight.style.backgroundColor = "yellow";
                    btnNine.style.backgroundColor = "yellow";

                    document.getElementById("container").style.opacity = "0.5";
                    document.getElementById("tap").style.display = "block";
                    console.log("game is won by: ",bthNine.textContent);
                }

                else if(btnOne.textContent === btnFour.textContent && btnOne.textContent === btnSeven.textContent && btnOne.textContent !== ""){
                    document.getElementById("displayFirstId").style.display = "block";
                    displayFirst.textContent = btnOne.textContent;
                    btnOne.style.backgroundColor = "yellow";
                    btnFour.style.backgroundColor = "yellow";
                    btnSeven.style.backgroundColor = "yellow";

                    document.getElementById("container").style.opacity = "0.5";
                    document.getElementById("tap").style.display = "block";
                    
                    console.log("game is won by: ",bthOne.textContent);
                }

                else if(btnFive.textContent === btnTwo.textContent && btnTwo.textContent === btnEight.textContent && btnTwo.textContent !== ""){
                    document.getElementById("displayFirstId").style.display = "block";
                    displayFirst.textContent = btnTwo.textContent;
                    btnTwo.style.backgroundColor = "yellow";
                    btnFive.style.backgroundColor = "yellow";
                    btnEight.style.backgroundColor = "yellow";

                    document.getElementById("container").style.opacity = "0.5";
                    document.getElementById("tap").style.display = "block";
                    
                    console.log("game is won by: ",bthTwo.textContent);
                }

                else if(btnThree.textContent === btnSix.textContent && btnSix.textContent === btnNine.textContent && btnThree.textContent !== ""){
                    document.getElementById("displayFirstId").style.display = "block";
                    displayFirst.textContent = btnOne.textContent;
                    btnThree.style.backgroundColor = "yellow";
                    btnSix.style.backgroundColor = "yellow";
                    btnNine.style.backgroundColor = "yellow";

                    document.getElementById("container").style.opacity = "0.5";
                    document.getElementById("tap").style.display = "block";
                    
                    console.log("game is won by: ",btnThree.textContent);
                }
                else if(btnOne.textContent === btnFive.textContent && btnFive.textContent === btnNine.textContent && btnOne.textContent !== ""){
                    document.getElementById("displayFirstId").style.display = "block";
                    displayFirst.textContent = btnOne.textContent;
                    btnOne.style.backgroundColor = "yellow";
                    btnFive.style.backgroundColor = "yellow";
                    btnNine.style.backgroundColor = "yellow";

                    document.getElementById("container").style.opacity = "0.5";
                    document.getElementById("tap").style.display = "block";
                    console.log("game is won by: ",bthOne.textContent);
                }
                else if(btnThree.textContent === btnFive.textContent && btnFive.textContent === btnSeven.textContent && btnThree.textContent !== ""){
                    document.getElementById("displayFirstId").style.display = "block";
                    displayFirst.textContent = btnOne.textContent;
                    btnThree.style.backgroundColor = "yellow";
                    btnFive.style.backgroundColor = "yellow";
                    btnSeven.style.backgroundColor = "yellow";

                    document.getElementById("container").style.opacity = "0.5";
                    document.getElementById("tap").style.display = "block";
                    
                    console.log("game is won by: ",btnThree.textContent);
                }


            }
        }
        function restart(){
            location.reload();
        }