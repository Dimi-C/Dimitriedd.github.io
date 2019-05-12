
function generate(){
    var randomNum =  Math.floor(Math.random()*4)
    console.log(randomNum)
    return(randomNum)
}

function answer(){
    var temp= generate()
  if(temp === 0){
    document.getElementById(1).innerHTML ="Better not tell you now"
  }else if(temp === 1){
    document.getElementById(1).innerHTML ="It is decidedly so"
  }else if(temp === 2){
    document.getElementById(1).innerHTML ="Don't count on it"
  }else if(temp === 3){
    document.getElementById(1).innerHTML ="Signs point to yes"
  }else if(temp === 4){
    document.getElementById(1).innerHTML ="Outlook not so good"
  }else
  {console.log("error")}
}
