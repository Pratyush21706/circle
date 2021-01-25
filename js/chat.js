var alphabets =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var bucket;

function setup(){
    wrapper = select(".wrapper");
    input1 = select(".ip1");
    input2 = select(".ip2")
    puch = select(".bg")
    profilePage = select(".profile")    
    chatPage = select(".chatPage");
    msgInput  = select(".msgIp");
    cont = select(".container");
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

     var ref = database.ref(localStorage.number);
    ref.on("value", gotData, errData);
    
    // Create a root reference
var storageRef = firebase.storage().ref();

// Create a reference to 'mountains.jpg'
var mountainsRef = storageRef.child('ob1.jpg');

// Create a reference to 'images/mountains.jpg'
var mountainImagesRef = storageRef.child('images/mountains.jpg');

// While the file names are the same, the references point to different files
mountainsRef.name === mountainImagesRef.name;           // true
mountainsRef.fullPath === mountainImagesRef.fullPath;   // false 

}


function changt1(){
    console.log("1")
    document.getElementById("propic").src ="img/Avatars/1.jpg";
     document.getElementById("propicB").src ="img/Avatars/1.jpg";

    localStorage.avatar = 1;

}
function changt2(){
    console.log("2")
    document.getElementById("propic").src ="img/Avatars/2.jpg";
    document.getElementById("propicB").src ="img/Avatars/2.jpg";
    localStorage.avatar = 2;

}

function changt3(){
    console.log("3")
    document.getElementById("propic").src ="img/Avatars/3.jpg";
     document.getElementById("propicB").src ="img/Avatars/3.jpg";

    localStorage.avatar = 3;

}
function changt4(){
    console.log("4")
    document.getElementById("propic").src ="img/Avatars/4.jpg";
     document.getElementById("propicB").src ="img/Avatars/4.jpg";

    localStorage.avatar = 4;

}

function changt5(){
    console.log("5")
    document.getElementById("propic").src ="img/Avatars/5.jpg";
   document.getElementById("propicB").src ="img/Avatars/5.jpg";

    localStorage.avatar = 5;

}

function changt6(){
    console.log("6")
    document.getElementById("propic").src ="img/Avatars/6.jpg";
    document.getElementById("propicB").src ="img/Avatars/6.jpg";

    localStorage.avatar = 6;

}

function changt7(){
    console.log("7")
    document.getElementById("propic").src ="img/Avatars/7.jpg"; 
    document.getElementById("propicB").src ="img/Avatars/7.jpg";

    localStorage.avatar = 7;

}
function changt8(){
    console.log("8")
    document.getElementById("propic").src ="img/Avatars/8.jpg";   
    document.getElementById("propicB").src ="img/Avatars/8.jpg";

    localStorage.avatar = 8;

}

function changt9(){
    console.log("9")
    document.getElementById("propic").src ="img/Avatars/9.jpg";   document.getElementById("propicB").src ="img/Avatars/9.jpg";

    
    localStorage.avatar = 9;

}
function changt0(){
    console.log("0")
    document.getElementById("propic").src ="img/Avatars/10.jpg";
    document.getElementById("propicB").src ="img/Avatars/10.jpg";

    localStorage.avatar = 0;

}


function gotData(data) {
    console.log("Chata")
    var listings = selectAll(".chat");
    for(var i =0; i<listings.length; i++){
        listings[i].remove();
    }
  var fruits = data.val();
  // Grab the keys to iterate over the object
  var keys = Object.keys(fruits);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
     console.log(key)
    // Look at each fruit object!
     fruit = fruits[key];
      console.log(fruit);
     if(fruit.type == "first"){ 
    document.getElementById("kam").innerHTML = fruit.name;
    document.getElementById("num").innerHTML = "+91 "+fruit.number;
  document.getElementById("kitna").innerHTML = keys.length-1;
         
                               
                              }
        
    if(fruit.type =="chat"){
        chat = createDiv("").addClass("chat").parent(wrapper);
     ppc = createButton("").addClass("op").parent(chat)
createImg("img/Avatars/user.png","profile").addClass("avt").parent(ppc);
      createP(fruit.name).addClass("name").parent(chat);
        createP("I am not a Dev").addClass("lms").parent(chat).id("lams");
        jij = createA("#",key).parent(ppc).addClass("thanks")
        jij.mousePressed(openChat);
      
    }
      if(fruit.avatar==1){
    changt1()
}
      if(fruit.avatar==2){
    changt2()
}
      if(fruit.avatar==3){
    changt3()
}
      if(fruit.avatar==4){
    changt4()
}
      if(fruit.avatar==5){
    changt5()
}
      if(fruit.avatar==6){
    changt6()
}
      if(fruit.avatar==7){
    changt7()
}
      if(fruit.avatar==8){
    changt8()
}
      if(fruit.avatar==9){
    changt9()
}
      if(fruit.avatar==0){
    changt0()
}
      
  }
}


function draw(){
         name = input2.value();
     number = input1.value();
//    console.log(name)
}

function errData(error) {
  if (error) {
    console.log('ooops');
  } else {
    console.log('Wow');
  }
}


function addSend(){
     i = Math.round(random(0,25))
         i2 = Math.round(random(0,25))
 bucket = alphabets[i]+Math.round(random(10,90))+alphabets[i2]+Math.round(random(0,9))
     var data ={
          name : name,
         number : number,
        bucket : bucket,
          type : "chat"
     }
     database.ref(localStorage.number).push(data,finished);
    
    var bd = {
        type : "declaration"
    }
    
    database.ref(bucket).push(bd,finished);
   
    addFriendSend();
}
function addFriendSend(){
     var data ={
          name : localStorage.name,
         number : localStorage.number,
         avatar : localStorage.avatar,
         bucket : bucket,
          type : "chat"
     }
     database.ref(number).push(data,finished);
   
     var ref = database.ref(localStorage.number);
    ref.on("value", gotData, errData);
}

function finished(error) {
  if (error) {
    console.log('ooops');
  } else {
    console.log('data saved!');
      puch.style("display","none");
     
// window.location.href = "./home.html"
  }
}

function newFriend(){
    puch.style("display","block")
}

function backHome(){
    profilePage.style("display","none")
}

function showProfile(){
    profilePage.style("display","block")
}

function openChat(){
    msgTo = localStorage.number+"/"+this.html();
    chatPage.style("display","block");
    var ref = database.ref(msgTo);
    ref.on("value", gotChat, errData);

}
function gotChat(data) {
  var credits = data.val();
    bucket  = credits.bucket;
    console.log(bucket)
document.getElementById("nam").innerHTML = credits.name;
    
     var ref = database.ref(bucket);
    ref.on("value", gotChatData, errData);
}

function gotChatData(data) {
    console.log("Chata")
    var listings = selectAll(".msg");
    for(var i =0; i<listings.length; i++){
        listings[i].remove();
    }
  var fruits = data.val();
  // Grab the keys to iterate over the object
  var keys = Object.keys(fruits);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
     console.log(key)
    // Look at each fruit object!
     fruit = fruits[key];
      console.log("Console :" +fruit.type)
      if(fruit.type=="msg"){
    if(fruit.by==localStorage.name){
        console.log(fruit.msg)
        createDiv(fruit.msg).addClass("ms1").parent(cont).addClass("msg")
          }else{
              createDiv(fruit.msg).addClass("ms2").parent(cont).addClass("msg")
          }
      }
  }
    console.log(fruit.msg);
    document.getElementById("lams").innerHTML = fruit.msg;
}


function addChatData(){
    var mssg = msgInput.value();
    console.log(mssg);
 document.getElementById("msi").value = "";
    var data ={
        msg : mssg,
        type : "msg",
        by: localStorage.name
    }
    
database.ref(bucket).push(data,finished);
}


function closeChat(){
   chatPage.style("display","none")
}
