var dice=1;
var player  = 0;s
var player1 =2;
var ladderflag=0;
var ladderstart =[3,31,66,86];
var ladderend = [38,68,80,97];
var snakehead=[27,71,96,99];
var snaketail=[5,46,72,11];
var name = "player1";
var Name2 = "player2";
var playerflag =0;
var myAudio = document.createElement("audio");
myAudio.src = "backgroundaudio.mp3";


function backgroudSound()
{ 
    myAudio.play();
    document.getElementById("soundimg").style.visibility="hidden";
    document.getElementById("nosoundimg").style.visibility="visible";

}

function noBackgroudSound()
{
         myAudio.pause();
         document.getElementById("nosoundimg").style.visibility="hidden";
         document.getElementById("soundimg").style.visibility="visible";
}





var playernumber = "player1";
var playernumber1 = "player2"

var startflag = 0;
function snake() {
    if(player<=100)
    {
    if (startflag == 0) {
        rollDice();
        if (dice == 6) {
            startflag = 1;
        }
    } 
    else {

        if(playernumber == document.getElementById("player1").nodeValue) 
        {
             movePlayer();
            //  document.getElementById("player2").style.visibility="hidden";
        }
            else if(playernumber1 == document.getElementById("player2").nodeValue)
            {
             movePlayer1();
             document.getElementById("player1").style.visibility="hidden";
             document.getElementById("player2").style.visibility="visible";
            }



       snakedinner();

        

    }

}
};

function snakedinner()
{
    if(player == 100)
    {
        alert("player 1 Winner");
    }
}


function rollDice() {
    // dice=1;
    dice = Math.floor(Math.random() * 6+1);
    document.getElementById("button").innerHTML = dice;
    console.log(dice);

}


function snakeBite()
{
    for(var i=0;i<=3;i++){
    if(snakehead[i] == player)
        {
            console.log("i m snakeBite")
               player = snaketail[i] ;
                x = document.getElementById(snaketail[i]).appendChild(x); 
                img=document.getElementById(snakehead[i]).lastChild;
                document.getElementById(snakehead[i]-1).removeChild(img);
            
        }
    }
}


function ladderBonus()
{
    for(var i=0;i<=3;i++){
    if(ladderstart[i] == player)
        {
            console.log("i m snakeBite")
               player = ladderend[i] ;
                x = document.getElementById(ladderend[i]).appendChild(x); 
                img=document.getElementById(ladderstart[i]).lastChild;
                document.getElementById(ladderstart[i]-1).removeChild(img);
            
        }
    }
}

function gitiShow1()
{
    if(player<=100)
    {
    x = document.createElement('img'); 

        x.src =  "giti.png";
     x = document.getElementById(player).appendChild(x); 
     img=document.getElementById(player-dice).lastChild;
    document.getElementById(player-dice).removeChild(img);

}
}


function gitiShow2()
{
    if(player<=100)
    {
    x = document.createElement('img'); 

        x.src =  "giti2.png";
     x = document.getElementById(player).appendChild(x); 
     img=document.getElementById(player-dice).lastChild;
    document.getElementById(player-dice).removeChild(img);

}
}



var cp = player;

function movePlayer() {
    console.log("i am player 1");
    dice = Math.floor(Math.random() * 6+1);
    document.getElementById("button").innerHTML = dice;
    // dice = 6;
   // if(playerflag == 1)
// {
    player1 = dice+player;
    // playerflag =0;
  //  gitiShow2();
// }


};



function movePlayer1() {
    console.log("i am player 2");
    dice = Math.floor(Math.random() * 6+1);
    document.getElementById("button").innerHTML = dice;
    // dice = 6;
   // if(playerflag == 1)
// {
    player = dice+player;
    // playerflag =0;
  //  gitiShow2();
// }


};














   













// var s= document.getElementById("gitiimg");
//   s.value = player;




//  function tuktuk()
// {
//     // x = document.createElement('img'); 
//     // x.src =  "giti.png";
//     var cp = player;
//     var i =1;
//     x = document.createElement('img'); 
//        x.src =  "giti.png";
//      for(i = 1;i<=5;i++)
//      {     
//         console.log(i);
//         x = document.getElementById(player+1).appendChild(x); 
//         if(player!=0)
//          {
//             x = document.createElement('img');
//             x.src =  "giti.png";
//              img=document.getElementById(player-1).lastChild;
//             document.getElementById(player-1).removeChild(null);
//         }
     
// }
// }










