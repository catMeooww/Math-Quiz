question_turn = "player1";
answer_turn = "player2";
function load(){
    p1 = localStorage.getItem("p1");
    p2 = localStorage.getItem("p2");
    p1_score=0;
    p2_score=0
    document.getElementById("player1_name").innerHTML = p1;
    document.getElementById("player2_name").innerHTML = p2;
    document.getElementById("player1_score").innerHTML = p1_score;
    document.getElementById("player2_score").innerHTML = p2_score;
    document.getElementById("playerQ").innerHTML = p1;
    document.getElementById("playerA").innerHTML = p2;
}
function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    answer = parseInt(number1)*parseInt(number2);
    question = "<h4>"+number1+"X"+number2+"</h4>";
    input = "<br>resposta : <input type='text' id='check_box'";
    button = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row = question + input + button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = " ";
    document.getElementById("number2").value = " ";
}
function check(){
getAnswer = document.getElementById("check_box").value;
if(getAnswer == answer){
    if(answer_turn == "player1"){
        p1_score++
        document.getElementById("player1_score").innerHTML = p1_score
    }else{
        p2_score++
        document.getElementById("player2_score").innerHTML = p2_score
    }
    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("playerQ").innerHTML = p2;
        answer_turn = "player1";
        document.getElementById("playerA").innerHTML = p1;
    }else{
        question_turn = "player1";
        document.getElementById("playerQ").innerHTML = p1;
        answer_turn = "player2";
        document.getElementById("playerA").innerHTML = p2;
    }
    document.getElementById("output").innerHTML = "";
}
}