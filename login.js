function setup() {
  mailInput = select("#input-1");
  passInput = select("#input-2");
  webInput = select("#input-3");
  nteInput = select(".bara");
  container = select(".passwords");

  var firebaseConfig = {
    apiKey: "AIzaSyCezJghBt-WB4ecAdNiCBUQ_kf1eoCIuLE",
    authDomain: "appd-3e5ca.firebaseapp.com",
    projectId: "appd-3e5ca",
    storageBucket: "appd-3e5ca.firebasestorage.app",
    messagingSenderId: "788800251390",
    appId: "1:788800251390:web:5c4ae9e3acf413db7d8caf"
  };
  firebase.initializeApp(firebaseConfig);
  console.log(firebase);
  database = firebase.database();

  var ref = database.ref("Pratyush");
  ref.on("value", gotData, errData);
}

function addAccount() {
  console.log("lbjk");
  uno = mailInput.value();
  pip = passInput.value();
  website = webInput.value();
  icn = "https://api.faviconkit.com/" + website + "/144";
  note = nteInput.value();

  var userData = {
    username: uno,
    password: pip,
    website: website,
    icon: icn,
    note: note,
  };

  database.ref("Pratyush").push(userData, finished);
}

function finished(error) {
  if (error) {
    console.log(error);
  } else {
    document.querySelector(".new-password").style = "display : none";
    document.querySelector(".new-passwor").style = "display : none";
    if (window.innerWidth < 600) {
      console.log("Ss");
      qq = document.querySelector(".part-two").style = "display : none";
      document.querySelector(".new-password").style = "display : none";
      document.querySelector(".new-passwor").style = "display : none";
    }
  }
}

function gotData(data) {
  var listings = selectAll(".password");
  for (var i = 0; i < listings.length; i++) {
    listings[i].remove();
  }
  var fruits = data.val();
  // Grab the keys to iterate over the object
  var keys = Object.keys(fruits);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    fruit = fruits[key];

    wxpt = str(fruit.icon);
    aha = fruit.website[0].toUpperCase();
    aha2 = fruit.website.substr(1).toLowerCase();
    jadoo = aha + aha2;
    gajab = jadoo.split(".");
    main = createDiv("").addClass("password").parent(container);
    ssixxer = createDiv(key).addClass("thanks").parent(main);
    second = createDiv("").addClass("favicon").parent(main);
    ssixxer.mousePressed(showFull);
    third = createImg(wxpt).parent(second);
    fourth = createDiv("").addClass("content").parent(main);
    fifth = createP(gajab[0]).addClass("title").parent(fourth);
    sixth = createP(fruit.username).addClass("user-mail").parent(fourth);
  }
}

function errData(error) {
  if (error) {
    //console.log("ooops");
  } else {
    if (window.innerWidth < 600) {
      console.log("Ss");
      qq = document.querySelector(".part-two").style = "display : none";
      document.querySelector(".new-password").style = "display : none";
    }
    //console.log("Wow");
  }
}

function openNew() {
  document.querySelector(".new-password").style = "display : block";
  console.log("ss");
  if (window.innerWidth < 600) {
    console.log("www");
    qq = document.querySelector(".part-two").style = "display : block";
    qq = document.querySelector(".new-password").style = "display : block";
    console.log(qq);
  }
}

function showFull() {
  document.querySelector(".new-passwor").style = "display : block";
  if (window.innerWidth < 600) {
    document.querySelector(".new-passwor").style = "display : block";
    document.querySelector(".part-two").style = "display : block";
  }
  var listings = selectAll(".aapa");
  for (var i = 0; i < listings.length; i++) {
    listings[i].remove();
    console.log("ww");
  }
  msgTo = "Pratyush/" + this.html();
  var ref = database.ref(msgTo);
  ref.on("value", gotTotal, errData);
  console.log("ldf");
}

gotTotal = function (data) {
  var listings = selectAll(".aapa");
  for (var i = 0; i < listings.length; i++) {
    listings[i].remove();
    console.log("ww");
  }

  extract = data.val();
  // console.log(extract.password);
  aha = extract.website[0].toUpperCase();
  aha2 = extract.website.substr(1).toLowerCase();
  jadoo = aha + aha2;
  gajab = jadoo.split(".");

  pixp = str(extract.icon);
  paren = document.querySelector(".favs");

  createImg(pixp).parent(paren).addClass("aapa");

  document.getElementById("cname").innerHTML = gajab[0];

  document.getElementById("uname").value = extract.username;
  document.getElementById("upsd").value = extract.password;
  document.getElementById("input-30").value = extract.website;
  document.getElementById("input-40").innerHTML = extract.note;
};

function removeit() {
  database.ref(msgTo).remove(finished);
}

function backit() {
  document.querySelector(".new-password").style = "display : none";
  document.querySelector(".new-passwor").style = "display : none";
  if (window.innerWidth < 600) {
    console.log("Ss");
    qq = document.querySelector(".part-two").style = "display : none";
    document.querySelector(".new-password").style = "display : none";
    document.querySelector(".new-passwor").style = "display : none";
  }
}

function draw() {
  if (window.innerWidth < 600) {
    qq = document.querySelector(".deck").style = "display : block";
  } else {
    qq = document.querySelector(".deck").style = "display : none";
  }
}

function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("upsd");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}
