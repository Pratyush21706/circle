var alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var bucket;

function setup() {
  wrapper = select(".wrapper");
  input1 = select(".ip1");
  input2 = select(".ip2");
  puch = select(".bg");
  profilePage = select(".profile");
  chatPage = select(".chatPage");
  msgInput = select(".msgIp");
  cont = select(".container");
  var firebaseConfig = {
    apiKey: "AIzaSyBnNj8bNh5QHXSRxRdxoAlgmrPEA-nFUjw",
    authDomain: "chat-56398.firebaseapp.com",
    databaseURL: "https://chat-56398.firebaseio.com",
    projectId: "chat-56398",
    storageBucket: "chat-56398.appspot.com",
    messagingSenderId: "291372313538",
    appId: "1:291372313538:web:60f67a12d7fdb59745045b",
  };
  //Initialising Firebase here
  firebase.initializeApp(firebaseConfig);
  //    Console Logging firebase
  console.log(firebase);
  //  Initialising the firebase database
  database = firebase.database();
  console.log(localStorage.number);
  var ref = database.ref(localStorage.number);
  ref.on("value", gotData, errData);

  // Create a root reference
  var storageRef = firebase.storage().ref();

  // Create a reference to 'mountains.jpg'
  var mountainsRef = storageRef.child("ob1.jpg");

  // Create a reference to 'images/mountains.jpg'
  var mountainImagesRef = storageRef.child("images/mountains.jpg");

  // While the file names are the same, the references point to different files
  mountainsRef.name === mountainImagesRef.name; // true
  mountainsRef.fullPath === mountainImagesRef.fullPath; // false
}

function gotData(data) {
  console.log("Chata");
  var listings = selectAll(".chat");
  for (var i = 0; i < listings.length; i++) {
    listings[i].remove();
  }
  var fruits = data.val();
  // Grab the keys to iterate over the object
  var keys = Object.keys(fruits);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    console.log(key);
    // Look at each fruit object!
    fruit = fruits[key];
    console.log(fruit);
    if (fruit.type == "first") {
      document.getElementById("kam").innerHTML = fruit.name;
      document.querySelector(".avt").src = fruit.avatar;
      document.querySelector(".avt1").src = fruit.avatar;
      document.getElementById("num").innerHTML = "+91 " + fruit.number;
      document.getElementById("kitna").innerHTML = keys.length - 1;
    }

    if (fruit.type == "chat") {
      chat = createDiv("").addClass("chat").parent(wrapper);
      ppc = createButton("").addClass("op").parent(chat);
      createImg("img/Avatars/user.png", "profile").addClass("avt").parent(ppc);
      createP(fruit.name).addClass("name").parent(chat);
      // createP(fruit.about).addClass("lms").parent(chat).id("lams");
      jij = createA("#", key).parent(ppc).addClass("thanks");
      jij.mousePressed(openChat);
    }
  }
}

function draw() {
  name = input2.value();
  number = input1.value();
  //    console.log(name)
}

function errData(error) {
  if (error) {
    console.log("ooops");
  } else {
    console.log("Wow");
  }
}

function addSend() {
  i = Math.round(random(0, 25));
  i2 = Math.round(random(0, 25));
  bucket =
    alphabets[i] +
    Math.round(random(10, 90)) +
    alphabets[i2] +
    Math.round(random(0, 9));
  var data = {
    name: name,
    number: number,
    bucket: bucket,
    type: "chat",
  };
  database.ref(localStorage.number).push(data, finished);

  var bd = {
    type: "declaration",
  };

  database.ref(bucket).push(bd, finished);

  addFriendSend();
}
function addFriendSend() {
  var data = {
    name: localStorage.name,
    number: localStorage.number,
    // avatar: localStorage.avatar,
    bucket: bucket,
    type: "chat",
  };
  database.ref(number).push(data, finished);

  var ref = database.ref(localStorage.number);
  ref.on("value", gotData, errData);
}

function finished(error) {
  if (error) {
    console.log("ooops");
  } else {
    console.log("data saved!");
    puch.style("display", "none");

    // window.location.href = "./home.html"
  }
}

function newFriend() {
  puch.style("display", "block");
}

function backHome() {
  profilePage.style("display", "none");
}

function showProfile() {
  profilePage.style("display", "block");
}

function openChat() {
  msgTo = localStorage.number + "/" + this.html();
  chatPage.style("display", "block");
  var ref = database.ref(msgTo);
  ref.on("value", gotChat, errData);
}
function gotChat(data) {
  var credits = data.val();
  bucket = credits.bucket;
  console.log(bucket);
  document.getElementById("nam").innerHTML = credits.name;

  var ref = database.ref(bucket);
  ref.on("value", gotChatData, errData);
}

function gotChatData(data) {
  let objDiv = document.getElementById("chatparent");
  objDiv.scrollTop = objDiv.scrollHeight - objDiv.clientHeight;
  console.log("Chata");
  var listings = selectAll(".msg");
  for (var i = 0; i < listings.length; i++) {
    listings[i].remove();
  }
  var fruits = data.val();
  // Grab the keys to iterate over the object
  var keys = Object.keys(fruits);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    console.log(key);
    // Look at each fruit object!
    fruit = fruits[key];
    console.log("Console :" + fruit.type);
    if (fruit.type == "msg") {
      if (fruit.by == localStorage.name) {
        console.log(fruit.msg);
        createDiv(fruit.msg).addClass("ms1").parent(cont).addClass("msg");
      } else {
        createDiv(fruit.msg).addClass("ms2").parent(cont).addClass("msg");
      }
    }
  }
  console.log(fruit.msg);
  document.getElementById("lams").innerHTML = fruit.msg;
}

function addChatData() {
  var mssg = msgInput.value();
  console.log(mssg);
  document.getElementById("msi").value = "";
  var data = {
    msg: mssg,
    type: "msg",
    by: localStorage.name,
  };

  database.ref(bucket).push(data, finished);
}

function closeChat() {
  chatPage.style("display", "none");
}
