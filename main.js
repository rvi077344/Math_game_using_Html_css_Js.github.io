let play = false;
let score;
let action;
let x; //time remaining

document.getElementById('startreset').onclick = ravi;
function ravi()
{
    if(play == true)
    {
        location.reload();
    }
    else
    {
        play = true;
        score = 0;
        document.getElementById('scorevalue').innerHTML = score;
        //document.getElementById('timeleft').style.display = "block";
        show('timeleft');
        x = 60;
        document.getElementById('timeremvalue').innerHTML=x;
        document.getElementById('startreset').innerHTML="Reset Game";
        ctDwn();

        generateQA();
        
    }
}

//click event for rigth or wrong answer by user
let i = 1;
while(i<5)
{
    document.getElementById("box" + i).onclick = function()
    {
        if(play == true)
        {
            if(this.innerHTML == correctAns)
            {
                score ++ ;
                document.getElementById('scorevalue').innerHTML = score;
                hide('wrong');
                show('correct')
                setTimeout(function(){
                    hide('correct');
                }, 1000);
            // Generate new Q&a
            generateQA();
        }
        else{    
            hide('correct'); 
            show('wrong')
            setTimeout(function(){
                hide('wrong');
            }, 1000);
        }
    }
}
i++;
}

//function
function ctDwn(){
    action = setInterval(function(){
        x -= 1;
        document.getElementById('timeremvalue').innerHTML=x;
        if(x === 0)
        {
           clearInterval(action);
           //document.getElementById('gameover').style.display ="block";
           show('gameover');
           document.getElementById('gameover').innerHTML = 
           "<p> game over :) </p><p>Your Score " + score +".</p>";
           hide('timeleft');
           hide('correct');
           hide('wrong');
           play = false;
           document.getElementById('startreset').innerHTML = "Start Game";
        }

    },1000);
}
function hide(Id){
    document.getElementById(Id).style.display="none";
}
function show(Id){
    document.getElementById(Id).style.display="block";
}

//generate q&a and multiple answer
function generateQA(){
    let m = 1+ Math.round(9*Math.random());
    let n = 1+ Math.round(9*Math.random());
    correctAns = m * n;
    document.getElementById("question").innerHTML=m+"X"+n;
    let correctposition = 1 + Math.round(3*Math.random());
    document.getElementById('box' + correctposition).innerHTML = correctAns;//it will fill one box with correct answer

    //wrong ans boxes
    let answers = [correctAns] ;
    for( i=1; i<5; i++)
    {
        if(i != correctposition)
        {
            let wrongAns ;
            do
            { 
            wrongAns = (1+ Math.round(9*Math.random()) * 1+ Math.round(9*Math.random()));
            
            }
            while (answers.indexOf(wrongAns)>-1) 
            
            document.getElementById('box'+i).innerHTML = wrongAns;
            answers.push(wrongAns);
        }
    }

}
