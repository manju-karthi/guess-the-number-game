//selecting elements
var inputbox=document.getElementById("inputbox")
var result=document.getElementById("result")
var guesscount=document.getElementById("guesscount")
var noofguess=3

//generate ranmdom number from 1 to 5
var randomnumber=Math.floor(Math.random()*10)+1//1 to 10
if(randomnumber>5)
{
    randomnumber=randomnumber-5
}

//event header function
function checkthenumber()
{
    if(inputbox.value==randomnumber)
    {
        alert("You got it Right,Congratulation")
        result.textContent="You are Right"
    }    
    else{
        noofguess=noofguess-1
        if(noofguess==0)
        {
            alert("You Lost,Generated Random number is:"+randomnumber)
        }
        guesscount.textContent="Available Guesses:"+noofguess
        result.textContent="You are wrong!"
    }
}