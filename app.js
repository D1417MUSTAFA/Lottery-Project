let num = document.getElementById("num");
let button = document.getElementById("button");
let liste = document.getElementById("output");

button.addEventListener("click", () =>{
  function result(number){
  
  function lottery6() {
    let arr1=[]
    while (arr1.length < 6) {
      let one = Math.trunc(Math.random()*90) + 1
      if(!arr1.includes(one)){
        arr1.push(one)
      }
    }
    return arr1.join("-")
  }
  
  function lotteryJoker(){
    let arr = lottery6().split("-")
    let one = Math.trunc(Math.random()*90) + 1
    if(!arr.includes(one)){
      return one
    }
  }
  
  function lotterySuper() {
      return Math.trunc(Math.random()*90) + 1
  }
  
  let x=0
  let aa = ""
  while(x<number){
   x++
   aa += (`${lottery6()} | ${lotteryJoker()} | ${lotterySuper()}</br>`  )
  } 
    return aa
  }
  liste.innerHTML=result(num.value);
})






  

  
