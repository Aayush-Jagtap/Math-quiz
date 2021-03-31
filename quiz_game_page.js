answer_turn = "player2";
question_turn = "player1";


player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;


document.getElementById("player_question").innerHTML ="Question Turn -" + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn -" + player2_name;

function send()
{
    answer_value = document.getElementById("number_1").value * document.getElementById("number_2").value; 
    number_1 =  document.getElementById("number_1").value;
    number_2 =  document.getElementById("number_2").value;
    console.log("answer" + answer_value);

    question = "<h4 id='numder_display'> Q. " + number_1 + "X" + number_2+"</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";

}

function check()
{
    answer = document.getElementById("input_check_box").value;

    if(answer == answer_value)
    {

        if(answer_turn == "player1")
        {
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if(question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question_Turn - " + player2_name;
    }
    else
    {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question_Turn - " + player1_name;
    }

    if(answer_turn == "player1")
    {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer_Turn - " + player2_name;
    }
    else
    {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }   

    document.getElementById("output").innerHTML = "";
}
