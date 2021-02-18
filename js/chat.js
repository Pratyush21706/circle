var url;
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
var bucket,
  p = 0;

function setup() {
  // Taking up some stupid html emements
  wrapper = select(".wrapper");
  input1 = select(".ip1");
  input2 = select(".ip2");
  puch = select(".bg");
  profilePage = select(".profile");
  chatPage = select(".chatPage");
  msgInput = select(".msgIp");
  cont = select(".container");
  sendButton = select("#bhejo");
  shit = select(".msgP");
  ppc = select("#lenge");

  // Creatingm the lame input buttons
  imageInput = createFileInput(handle).attribute("accept", "image/*");
  imageInput.id("img").addClass("imageInput").parent(shit);

  // Fucking Firebase
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

// Handeling the data recived from the server
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
  if (msgInput.value().length == 0) {
    sendButton.style("color", "#9c9b9b");
  } else {
    sendButton.style("color", "#000");
  }
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
    if (fruit.type == "img") {
      source = str(fruit.src);
      console.log(source);
      if (fruit.by == localStorage.name) {
        jhatu = createDiv("").addClass("ms1").parent(cont).addClass("msg");
        createImg(source, "image").parent(jhatu).addClass("msImg");
      } else {
        jhatu = createDiv("").addClass("ms1").parent(cont).addClass("msg");
        createImg(source, "image").parent(jhatu).addClass("msImg");
      }
    }
  }
  console.log(fruit.msg);
  // document.getElementById("lams").innerHTML = fruit.msg;
}

function addChatData() {
  var mssg = msgInput.value();
  console.log(bucket);
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
  ``;
}

function showOptions() {
  document.querySelector(".options").style = "display : block";
}
function hideOptions() {
  console.log("ojl");
  document.querySelector(".options").style = "display : none";
}

function handle(file) {
  console.log(file);
  document.querySelector(".preview").style = "display  : block";
  document.querySelector(".preI").src = file.data;
}

function uploadFile() {
  const ref = firebase.storage().ref();
  const file = document.querySelector("#img").files[0];
  const name = file.name;
  console.log(file.type);
  const metadata = {
    contentType: file.type,
  };
  const task = ref.child(name).put(file, metadata);
  task.on(
    "state_changed",
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(
        "Upload is " + progress + "% done" + " " + snapshot.bytesTransferred
      );
      kitna = str(Math.round(progress) + "%");
    },
    (error) => {
      // Handle unsuccessful uploads
    },
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      task.snapshot.ref.getDownloadURL().then((link) => {
        console.log("File available at", link);
        url = link;
        console.log(url);
        addChatMedia();
        document.querySelector(".preview").style = "display  : none";
        // pro = true;
      });
    }
  );
}

function addChatMedia() {
  console.log(bucket);
  document.getElementById("msi").value = "";
  var data = {
    src: url,
    type: "img",
    by: localStorage.name,
  };

  database.ref(bucket).push(data, done);
}

function done() {
  if (error) {
    console.log("ooops");
  } else {
    console.log("data saved!");
  }
}
