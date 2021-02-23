//

    
// 0=グー、1＝パー、2＝チョキ


// apiを呼び出す関数ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// async function callApi(){
//     const res = await fetch("https://api.chucknorris.io/jokes/random");
//     const jokes =await res.json();
//     console.log(jokes.value);
//     $("#joke").html(jokes.value)
// }

// callApi();


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

let mycount = 0 ;
$("#myscore").html(mycount);
// console.log(mycount)

let comcount = 0 ;
$("#comscore").html(comcount);



let myGooBtn = document.querySelector(".rock");
myGooBtn.onclick = function(){
    const random = Math.floor(Math.random()*3);
    console.log(random);
    
  

if(random==0){
   console.log("あいこ");
    $("#result").html("あいこ");
    $("#computerhands").html(`<img src="https://www.silhouette-illust.com/wp-content/uploads/2016/11/17433-300x300.jpg" alt="">`);

 }else if(random==1){
    console.log("負け");
    comcount ++;
    $("#comscore").text(comcount);
  $("#result").html("負け");
  $("#computerhands").html(`<img src="https://www.silhouette-illust.com/wp-content/uploads/2016/11/17435-300x300.jpg" alt="">`);
 
 }else if(random==2){
    console.log("勝ち");
    mycount += 1 ;
   $("#myscore").html(mycount);
   $("#result").html("勝ち");
   $("#computerhands").html(`<img src="https://www.silhouette-illust.com/wp-content/uploads/2016/11/17434-300x300.jpg" alt="">`);

   async function callApi(){
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const jokes =await res.json();
    console.log(jokes.value);
    $("#joke").html(jokes.value)
}

callApi();
   
 return mycount;
 }
 }

let myChokiBtn = document.querySelector(".scissors");
myChokiBtn.onclick = function(){
    const random = Math.floor(Math.random()*3);

    if(random==0){
        console.log("負け");
        comcount ++;
        $("#comscore").text(comcount);
        $("#result").html("負け");
        $("#computerhands").html(`<img src="https://www.silhouette-illust.com/wp-content/uploads/2016/11/17433-300x300.jpg" alt="">`);
    }else if(random==1){
        console.log("勝ち");
        mycount += 1 ;
        $("#myscore").html(mycount);
        $("#result").html("勝ち");
        $("#computerhands").html(`<img src="https://www.silhouette-illust.com/wp-content/uploads/2016/11/17435-300x300.jpg" alt="">`);
        async function callApi(){
            const res = await fetch("https://api.chucknorris.io/jokes/random");
            const jokes =await res.json();
            console.log(jokes.value);
            $("#joke").html(jokes.value)
        }
        
        callApi();

    }else if(random==2){
        console.log("あいこ");
        $("#result").html("あいこ");
        $("#computerhands").html(`<img src="https://www.silhouette-illust.com/wp-content/uploads/2016/11/17434-300x300.jpg" alt="">`);

    }
    }

let myPaaBtn = document.querySelector(".paper");
myPaaBtn.onclick = function(){
    const random = Math.floor(Math.random()*3);
    if(random==0){
        console.log("勝ち");
        mycount += 1 ;
        $("#myscore").html(mycount);
        $("#result").html("勝ち");
        $("#computerhands").html(`<img src="https://www.silhouette-illust.com/wp-content/uploads/2016/11/17433-300x300.jpg" alt="">`);
      
        async function callApi(){
            const res = await fetch("https://api.chucknorris.io/jokes/random");
            const jokes =await res.json();
            console.log(jokes.value);
            $("#joke").html(jokes.value)
        }
        
        callApi();
    }else if(random==1){
        console.log("あいこ");
        $("#result").html("あいこ");
        $("#computerhands").html(`<img src="https://www.silhouette-illust.com/wp-content/uploads/2016/11/17435-300x300.jpg" alt="">`);
        
    }else if(random==2){
        console.log("負け");
        comcount ++;
        $("#comscore").text(comcount);
        $("#result").html("負け");
        $("#computerhands").html(`<img src="https://www.silhouette-illust.com/wp-content/uploads/2016/11/17434-300x300.jpg" alt="">`);
    }
    }
 
