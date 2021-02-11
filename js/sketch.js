localStorage.name;
localStorage.number;
localStorage.avatar;
localStorage.harami;
var pro = false;
var initiated = false;
var url;

function setup() {
  loginPage = select(".container");
  numPage = select(".p1");
  detPage = select(".p2");
  profile = select(".pic");
  numInput = select(".phoneInput");
  nameInput = select(".ipp");
  profileInput = createFileInput(handlePress);
  profileInput.position(0, 0).id("myPP");

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
}

function openLogin() {
  loginPage.style("display", "block");
}

function lassan() {
  numPage.style("display", "none");
  detPage.style("display", "block");
  document.body.style = "background  : red";
  localStorage.number = numInput.value();
  console.log(localStorage.number);
}

function finalSend() {
  if (initiated == true && pro == true) {
    localStorage.name = nameInput.value();
    console.log(
      "Name :" +
        localStorage.name +
        " Avatar: " +
        localStorage.avatar +
        " Number : " +
        localStorage.number
    );
    var data = {
      name: localStorage.name,
      number: localStorage.number,
      avatar: url,
      type: "first",
    };
    database.ref(localStorage.number).push(data, finished);
  } else if (initiated == true && pro == false) {
    alert("Wait The Profile Pic is Uploading");
  } else {
    alert("Please Chose a profile Image");
  }
}

function finished(error) {
  if (error) {
    console.log("ooops");
  } else {
    console.log("data saved!");
    window.location.href = "./home.html";
    localStorage.harami = 1;
  }
}

function draw() {
  // console.log(localStorage.harami)
  if (localStorage.harami == null) {
    // console.log("op")
  }
  if (localStorage.harami == 1) {
    window.location.href = "./home.html";
    console.log("jj");
  }
}

function handlePress(file) {
  document.querySelector(".im").src = file.data;
  console.log("file-uploaded");
  addProfile();
  initiated = true;
}

function addProfile() {
  const ref = firebase.storage().ref();
  const file = document.querySelector("#myPP").files[0];
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
        pro = true;
      });
    }
  );
}
