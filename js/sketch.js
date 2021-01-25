localStorage.name;
localStorage.number;
localStorage.avatar;
localStorage.random;

function setup(){
    loginPage = select(".container")
    numPage = select(".p1")
    detPage = select(".p2")
    profile =select(".pic")
    numInput = select(".phoneInput");
    nameInput = select(".ipp");

      var firebaseConfig = {
  apiKey: "AIzaSyBnNj8bNh5QHXSRxRdxoAlgmrPEA-nFUjw",
    authDomain: "chat-56398.firebaseapp.com",
    databaseURL: "https://chat-56398.firebaseio.com",
    projectId: "chat-56398",
    storageBucket: "chat-56398.appspot.com",
    messagingSenderId: "291372313538",
    appId: "1:291372313538:web:60f67a12d7fdb59745045b"
  };
        //Initialising Firebase here
  firebase.initializeApp(firebaseConfig);
//    Console Logging firebase
  console.log(firebase);
//  Initialising the firebase database
 database = firebase.database();

}

function openLogin(){
    loginPage.style("display","block")
}

function lassan(){
    numPage.style("display","none");
    detPage.style("display","block");
   document.body.style = "background  : red";
    localStorage.number = numInput.value();
    console.log(localStorage.number)
}
function changt1(){
    console.log("1")
    document.getElementById("propic").src ="img/Avatars/1.jpg";
    localStorage.avatar = 1;

}
function changt2(){
    console.log("2")
    document.getElementById("propic").src ="img/Avatars/2.jpg";
    localStorage.avatar = 2;

}

function changt3(){
    console.log("3")
    document.getElementById("propic").src ="img/Avatars/3.jpg";
    localStorage.avatar = 3;

}
function changt4(){
    console.log("4")
    document.getElementById("propic").src ="img/Avatars/4.jpg";
    localStorage.avatar = 4;

}

function changt5(){
    console.log("5")
    document.getElementById("propic").src ="img/Avatars/5.jpg";
    localStorage.avatar = 5;

}

function changt6(){
    console.log("6")
    document.getElementById("propic").src ="img/Avatars/6.jpg";
    localStorage.avatar = 6;

}

function changt7(){
    console.log("7")
    document.getElementById("propic").src ="img/Avatars/7.jpg";
    localStorage.avatar = 7;

}
function changt8(){
    console.log("8")
    document.getElementById("propic").src ="img/Avatars/8.jpg";
    localStorage.avatar = 8;

}

function changt9(){
    console.log("9")
    document.getElementById("propic").src ="img/Avatars/9.jpg";
    localStorage.avatar = 9;

}
function changt0(){
    console.log("0")
    document.getElementById("propic").src ="img/Avatars/10.jpg";
    localStorage.avatar = 0;

}

function finalSend(){
    localStorage.name = nameInput.value();
    console.log("Name :"+localStorage.name +" Avatar: "+localStorage.avatar+" Number : "+localStorage.number)
     var data ={
          name : localStorage.name,
         number : localStorage.number,
         avatar : localStorage.avatar,
          type : "first"
     }
     database.ref(localStorage.number).push(data,finished);
          localStorage.random=1

}

function finished(error) {
  if (error) {
    console.log('ooops');
  } else {
    console.log('data saved!');
 window.location.href = "./home.html";
      localStorage.random=1
  }
}

function draw(){
    console.log(localStorage.random)
    if(localStorage.random==null){
        console.log("op")
    }
    if(localStorage.random==1){
          window.location.href = "./home.html"
        console.log("jj")
    }  
}
