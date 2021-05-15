// // var shopItems = ["Pepsi", "Sanam", "Safina", "Aadab", "Pukaar"];

// // // lentgh ==? shopItems.length

// // shopItems.pop(); // last item remove
// // shopItems.push("Tara", "Supreem"); // add new names to last

// // alert(shopItems);

// // shopItems.shift(); // first item remove
// // shopItems.unshift("Rajput", "Tasty"); // add new names to fronside

// // alert(shopItems);

// // shopItems.splice(3, 2);

// // shopItems.splice(4, 0, "sdds", "sdas");
// // alert(shopItems);

// // shopItems = shopItems.slice(3, 5);
// // alert(shopItems);

// // var question = prompt("Enter City");
// // var cleanestCities = [
// //   "Cheyenne",
// //   "Santa Fe",
// //   "Tucson",
// //   "Great Falls",
// //   "Honolulu",
// // ];

// // for (let index = 0; index < cleanestCities.length; index++) {
// //   if (question === cleanestCities[index]) {
// //     alert("Welcome to " + question);
// //   }
// // }

// // var cleanestCities = [
// //   "Mithi",
// //   "Diplo",
// //   "Chelhar",
// //   "Karachi",
// //   "Hyderabad",
// //   "Mithi",
// //   "Diplo",
// //   "Chelhar",
// //   "Karachi",
// //   "Hyderabad",
// //   "3",

// //   "4",
// //   "Mithi",
// //   "Diplo",
// //   "Chelhar",
// //   "Karachi",
// //   "Hyderabad",
// //   "Mithi",
// //   "Diplo",
// //   "Chelhar",
// //   "Karachi",
// //   "Hyderabad",
// // ];

// // var question = prompt("Enter City Name?");

// // var found = "no";

// // for (var i = 0; i < cleanestCities.length; i++) {
// //   if (cleanestCities[i] === question) {
// //     alert("Welcome to " + question);
// //     found = "yes";

// //     break;
// //   }

// //   console.log(cleanestCities[i]);
// // }
// // if (found === "no") {
// //   alert("Sorry it is not in our list");
// // }

// // Nested Loop

// // var firstNames = ["Bluray", "Upchuck", "Gizmo", "LoJack", "Do-Rag"];
// // var lastNames = ["ZZZ", "Brup", "Dogbone", "Droop"];
// // var countries = ["pk", "in", "uk", "us"];

// // for (var i = 0; i < firstNames.length; i++) {
// //   console.log("loop first ====> ", firstNames[i]);
// //   // for (let k = 0; k < lastNames.length; k++) {
// //   //   console.log("loop second ====> ", lastNames[i]);

// //   //   console.log(firstNames[i] + " " + lastNames[k]);

// //   //   // for (let l = 0; l < countries.length; l++) {
// //   //   //   console.log(firstNames[i] + " " + lastNames[k] + " " + countries[l]);
// //   //   // }
// //   // }
// // }

// //

// // var cities = ["mithi", "Chachro", "Diplo", "Karachi", "Lahore", "Punjaab"];

// // var question = prompt("Enter your city").toLowerCase();

// // var found = "no";

// // for (var i = 0; i < cities.length; i++) {
// //   if (question === cities[i]) {
// //     alert("welcome to " + question);
// //     found = "yes";
// //     break;
// //   }
// // }
// // if (found === "no") {
// //   alert("Sorry");
// // }

// // var items = ["Banana", "Apple", "Orange", "Red Grapes"];
// // var itemTypes = ["Fruits", "Vegetable", "Salad"];

// // for (let i = 0; i < items.length; i++) {
// //   console.log(i);

// //   for (let j = 0; j < itemTypes.length; j++) {
// //     console.log("Nested Loop  ===>   " + items[i] + " " + itemTypes[j]);
// //   }
// // }

// // var cityName = prompt("Enter your first name");
// // var first = cityName.slice(0, 1).toUpperCase();
// // var other = cityName.slice(1).toLowerCase();

// // var fullCityName = first + other;

// // var cities = ["Mithi", "Chelhar", "Diplo"];

// // for (let i = 0; i < cities.length; i++) {
// //   if (fullCityName === cities[i]) {
// //     alert("welcome to " + fullCityName);
// //   }
// // }

// // var month = prompt("Enter Month");

// // var cInMonth = month.length;
// // if (cInMonth > 3) {
// //   alert("you ente more then 3 words");
// // }

// // var str = prompt("Enter some text");
// // var numChars = str.length;

// // for (let i = 0; i < numChars; i++) {
// //   if (str.slice(i, i + 2) === " ") {
// //     alert("No Double Spaces");
// //     break;
// //   }
// // }

// // var text = "It is due to Sagar World War II";

// // var firstChar = text.indexOf("Sagar");
// // alert(firstChar);

// // if (firstChar !== -1) {
// //   text =
// //     text.slice(0, firstChar) +
// //     "Varooon asdusudsiidsisiodyio" +
// //     text.slice(firstChar + 5);

// //   alert(text);
// // }

// // for (let i = 0; i < text.length; i++) {
// //   if (text.slice(i, i + 12) === "World War II") {
// //     text = text.slice(0, i) + "The Second World War" + text.slice(i + 12);
// //     // console.log(text);
// //     // break;
// //   }
// // }

// // var text = "To be or not to be.";

// // var segIndex = text.lastIndexOf("not");

// // alert(segIndex);

// // var firstName = prompt("Enter user name?");

// // var firstChar = firstName.charAt(10);

// // alert(firstChar);

// // var text =
// //   "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia!";

// // for (let i = 0; i < text.length; i++) {
// //   if (text.charAt(i) === "p") {
// //     alert(text[i]);
// //   }
// // }

// // var text =
// //   "Sagar World War II dhaskhsdihkasdh  dashdjsah  World War II fhashjkhhaskh  World War II";
// // var changeText = text.replace("World War II", "The Second World War");

// // alert(changeText);

// // 5.5

// // 1.1;

// // var scoreAvg = 56.0;

// // var numberOfStars = Math.ceil(scoreAvg);

// // alert(numberOfStars);

// // var ludoNumber = Math.random();

// // var improveNumber = ludoNumber * 8 + 1;

// // var numberOfStars = Math.round(improveNumber);

// // alert(numberOfStars);

// // data types

// // string "344354"
// // bolean true and false
// // number 1234
// // null
// // undefined

// // var name = "value";
// // alert(name);

// // name = "dshdhk";
// // alert(name);

// // var message = "Thanks for contacting";
// // var name = "Sagar";

// // alert(message + " " + name);

// // var name = prompt("Enter  name?");
// // var country = prompt("Enter city name?");
// // var age = prompt("Enter age?");

// // if (name === "Sagar" && country === "Pakistan") {
// //   alert("Job done");
// //   if (age == 20) {
// //     alert(age);
// //   }
// // } else {
// //   alert("search job");
// // }

// // var first = question.slice(0, 1).toUpperCase();
// // var last = question.slice(1).toLowerCase();
// // var fullName = first + last;

// // if (fullName == "Mithi") {
// //   alert("Welcome");
// // } else if (fullName == "Chelhar") {
// //   alert("hdasjjs");
// // } else {
// //   alert("sorry");
// // }

// // var students = ["Sagar", "Varoon", "Nahchal", "Hinu"];

// // var w2students = students.slice(2, 4);
// // alert(w2students);

// // var currentAge = prompt("Enter your age.");
// // var vote = currentAge - 18;
// // alert(vote);

// // var age = prompt("Enter age....");

// // var total = parseInt(age) + 1;

// // alert(total);

// // var plus = 1.5 + 1.5;
// // alert(plus);

// // var myFractional = parseFloat("1.999");

// // alert(myFractional + 0.1);

// // var age = Number(prompt("Enter age"));

// // var num1 = 120;
// // var num2 = 120;

// // num1 = num2.toString();
// // alert(num1 + num2);

// // var questions = [
// //   "Select Your Name?",
// //   "Select Your Father Name?",
// //   "Select Your Class?",
// //   "Select Your Cast?",
// //   "Select Your Phone Number?",
// // ];

// // 10
// // *
// //10

// // var num1 = Number(prompt("Enter number 1"));
// // var symbol = prompt("Enter sign");
// // var num2 = Number(prompt("Enter number 2"));

// // if (symbol === "+") {
// //   alert(num1 + num2);
// // } else if (symbol === "/") {
// //   alert(num1 / num2);
// // } else if (symbol === "*") {
// //   alert(num1 * num2);
// // } else if (symbol === "-") {
// //   alert(num1 - num2);
// // } else {
// //   alert("Can not Calculate");
// // }

// // var price = 9.956767;
// // var tax = 6.7565655;
// // var total = price + price * tax;

// // var lastTotal = total.toFixed(1);

// // alert(lastTotal + " PKR");

// // var showDate = new Date();
// // alert(showDate);

// // var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// // var monthOfYears = [
// //   "Jan",
// //   "Feb",
// //   "Mar",
// //   "Apr",
// //   "May",
// //   "Jun",
// //   "Jul",
// //   "Aug",
// //   "Sep",
// //   "Oct",
// //   "Nov",
// //   "Dec",
// // ];
// // var now = new Date();

// // var theDay = now.getDay();
// // var theMonth = now.getMonth();
// // var theDate = now.getDate();
// // var fullYear = now.getFullYear();

// // var day = dayNames[theDay];
// // var month = monthOfYears[theMonth];
// // var date = theDate;

// // alert(day + " " + month + " " + date + " " + fullYear);

// // day - month - date - year

// // time = \

// // var getHour = now.getHours();
// // var getMinutes = now.getMinutes();
// // var getSeconds = now.getSeconds();

// // console.log(getHour + " : " + getMinutes + " : " + getSeconds);

// // var millsSince = now.getTime();

// // alert(millsSince);

// // var today = new Date();

// // var future = new Date("April 2, 2035");

// // // we have to get the diffrence between mili seconds

// // var msToday = today.getTime();
// // var msFuture = future.getTime();

// // var getDiff = msFuture - msToday;

// // // alert("diff is here , ==> " + getDiff);

// // var dDiff = getDiff / (1000 * 60 * 60 * 24);

// // dDiff = Math.floor(dDiff);

// // alert(dDiff + " Days");

// // var getDiff =
// //   new Date("Jul 10, 2040 13:25:30").getTime() - new Date().getTime();

// // var daysTillNow = Math.floor(getDiff / (1000 * 60 * 60 * 24));
// // alert(daysTillNow);

// // var d = new Date();

// // d.setFullYear("2022");

// // d.setDate(20);
// // d.setMonth(5);
// // alert(d);

// // function currentTime() {
// //   var date = new Date();
// //   var hours = date.getHours();
// //   var minutes = date.getMinutes();
// //   var seconds = date.getSeconds();
// // }

// // var now = new Date();
// // var theHr = now.getHours();
// // var theMin = now.getMinutes();
// // alert("time: " + theHr + ":" + theMin);

// // function name(){  statement}
// // ()==> parenthesis  it means it is function

// // normal Function

// // function login() {
// //   var current = new Date();
// //   var hour = current.getHours();
// //   var min = current.getMinutes();
// //   var sec = current.getSeconds();
// //   alert("time: " + hour + ":" + min + ":" + sec);
// // }

// // showTime();

// //  callName("argument")

// //  argument will remains same while the parameters can be change

// // var fname = "Darpan";
// // var lname = "Bawoo";

// // function greetUser(fname, ss, dd = "sagar") {
// //   // (recieve)==> params
// //   alert("Welcome, " + fname + " " + ss + " " + dd);
// // }

// // greetUser(null, fname); // argument  (send)

// // var fullName = "Sagar Vasu";
// // function showFullName(userName, age) {
// //   alert(userName + " " + age);
// // }

// // showFullName(fullName, 20);

// // var num1 = Number(prompt("Enter num1"));
// // var num2 = Number(prompt("Enter Num 2"));

// // function addNumbers(first, second) {
// //   var total = first + second;
// //   console.log("Your total is " + total);
// //   return total;
// // }

// // var saveData = addNumbers(num1, num2);

// // alert(saveData);

// // function doSum(num1) {
// //   return num1 + 20;
// // }

// // var total = doSum(10); //30

// // alert(total);

// // var name = prompt("Enter your name?");
// // var address = prompt("Enter your address..");

// // var item1 = Number(prompt("Enter your item 1 name?"));
// // var item2 = Number(prompt("Enter your item 2 name?"));

// // var deliveryCharges = 30;

// // function calculateOrder(name, address, itemOnePrice, itemTwoPrice) {
// //   if (name.length >= 3 && address.length >= 4) {
// //     let total = itemOnePrice + itemTwoPrice;

// //     if (total >= 500) {
// //       alert(
// //         "Mr " +
// //           name +
// //           " Your order has been picked on your address " +
// //           address +
// //           "with total of " +
// //           total +
// //           " with free home delivery "
// //       );
// //     } else {
// //       alert(
// //         "Mr " +
// //           name +
// //           " Your order has been picked on your address " +
// //           address +
// //           "with total of " +
// //           total +
// //           " with 30 PKR home delivery charges "
// //       );
// //     }
// //   } else {
// //     alert("Please Enter correct name and address");
// //   }
// // }

// // calculateOrder(name, address, item1, item2);

// // Repeat All Chapters Start //

// // var email = prompt("enter your email");
// // var password = prompt("Enter password");

// // ==  valuee
// //  === value

// // && ||  ==

// // if (!email) {
// //   alert("Please enter correct email address");
// // } else if (!password) {
// //   alert("Please enter correct password");
// // } else if (email === "sagar@gmail.com" && password === "12345") {
// //   alert("Welcome to Gmail");
// //   var age = prompt("Enter age");

// //   if (age >= "19" && age <= 100) {
// //     alert("you are valid");
// //   } else {
// //     alert("sorry you are not vaid");
// //   }
// // } else {
// //   alert("Account not found");
// // }

// // Array ===> set of same collection
// // var name = "SAGAR";

// // var data = ["laptop", name, "TV", "Charger"];

// // var students = [];
// // alert(students);

// // var i = 0;

// // students.push(data[0]);
// // students.push(name);
// // students.pop();
// // students.unshift(name);
// // students.shift();

// // alert(students);

// // var names = ["sagar", "Varoon", "Hinu", "Nahchal"];

// // alert(names);

// // names.splice(1, 0, "Kamal");
// // alert(names);

// // var names = ["sagar", "Varoon", "Hinu", "Nahchal"];

// // var newCopy = names.slice(0, 3);
// // alert(newCopy);

// // var names = ["sagar", "Varoon", "Hinu", "Nahchal"];
// // var lastName = ["vasu", "Maheshwari"];

// // for (var i = 0; i <= names.length; i++) {
// //   alert(names[i]);
// //   for (let j = 0; j < lastName.length; j++) {

// //     alert(names[i] + " " + lastName[j]);
// //   }
// // }

// // var question = prompt("Enter City Name?");
// // var firstChar = question.slice(0, 1).toUpperCase();
// // var lastChar = question.slice(1).toLowerCase();
// // var fullName = firstChar + lastChar;

// // if (fullName === "Mithi") {
// //   alert("Welcome");
// // }

// // var text =
// //   "Hello World ufislj sajkjsd ashdjdks hadskshd Sagar Vasu Hello World ufislj sajkjsd ashdjdks hadskshd";

// // var check = text.indexOf("Sagar Vasu");

// // if (check !== -1) {
// //   text = text.slice(0, check) + "Varoon Vasu" + text.slice(check + 10);
// //   alert(text);
// // }

// // var name = "SagarVasu";

// // for (var i = 0; i < name.length; i++) {
// //   if (name.charAt(9) === "u") {
// //     alert("We found");
// //   }
// // }

// // var text =
// //   "Hello World ufislj sajkjsd ashdjdks hadskshd Sagar Vasu Hello World ufislj sajkjsd ashdjdks Sagar Vasu hadskshd";

// // var newText = text.replace(/Sagar Vasu/g, "Varoon Vasuu -000");
// // alert(newText);

// // var number = Math.round(100.499);

// // alert(number);

// // var number = Math.ceil(100.0);

// // alert(number);
// // var number = Math.floor(100.99);

// // alert(number);

// // var randomNumber = Math.random();
// // var genr = randomNumber * 20 + 1;

// // var getNum = Math.round(genr);
// // alert(getNum);

// // alert(randomNumber);

// // function sayAlert() {
// //   // statement
// //   alert("Hello World");
// // }

// // sayAlert(); // call a function

// // function sayName(name) {
// //   alert(name);
// //   var ds = 7;
// //   var jdsj = 7897;

// //   return  jdsj;
// // }
// // var fullName = prompt("wnew");

// // var saveValues = sayName(fullName);
// // alert(saveValues);

// // Repeat All Chapters End //

// // var theSum; // global var scope

// // alert(theSum);

// // function total() {
// //   // local

// //   theSum = 5 + 5;
// //   alert(theSum);
// // }
// // alert(theSum);

// // alert(total());
// // alert(theSum);

// // function sayHello() {
// //   var num = 10; // local
// //   alert(num);
// // }
// // sayHello();

// //  global = > main code // use/ dekhe
// // local ==> function // use// dekhe

// // var name = "global ";

// // function sayHello() {
// //   var name = "Local";
// //   return name;
// // }

// // alert(sayHello());

// // alert(name);

// // var name = "Global";
// // alert(name);

// // function sayHello() {
// //   var name = "unknown";
// //   alert(name);
// // }

// // alert(sayHello());

// // alert(name);

// // var name = "sagar";
// // alert(name);
// // function sayName() {
// //   var name = "Kamal";
// //   return name;
// // }

// // alert(sayName());

// // alert(name);
// // var theSum = "global";
// // function addNumbers(){
// //   theSum = "local";
// //   // return theSum;
// // }
// // alert(theSum);
// // alert(addNumbers());
// // alert(theSum);

// // var dayOfWk = prompt("Enter Day");

// // if (dayOfWk === "Sat" || dayOfWk === "Sun") {
// //   alert("Whoopee!");
// // } else if (dayOfWk === "Fri") {
// //   alert("TGIF!");
// // } else if (dayOfWk === "Fri") {
// //   alert("TGIF!");
// // } else {
// //   alert("Shoot me now!");
// // }

// // var dayOfWk = prompt("Enter Day");

// // switch (dayOfWk) {
// //   case "Sun":
// //     alert("Whoopi");
// //     break;
// //   case "Fri":
// //     alert("TGIF");
// //     break;

// //   default:
// //     alert("Shoot me now");
// // }

// // switch (new Date().getDay()) {
// //   case 0:
// //     day = "Sunday";
// //     alert(day);
// //     break;
// //   case 1:
// //     day = "Monday";
// //     alert(day);

// //     break;
// //   case 2:
// //     day = "Tuesday";
// //     alert(day);

// //     break;
// //   case 3:
// //     day = "Wednesday";
// //     alert(day);

// //     break;
// //   case 4:
// //     day = "Thursday";
// //     alert(day);

// //     break;
// //   case 5:
// //     day = "Friday";
// //     alert(day);
// //     break;
// //   case 6:
// //     day = "Saturday";
// //     alert(day);
// //     break;
// // }

// // var loginEmail = "sagarvasu98@gmail.com";
// // var loginPassword = "hero@123";

// // var email = prompt("Enter Email....");
// // var pass = prompt("Enter Password....");

// // switch (email.toLowerCase()) {
// //   case loginEmail:
// //     switch (pass) {
// //       case loginPassword:
// //         alert("You are Welcome");
// //         break;
// //       default:
// //         alert("Password is not correct");
// //     }
// //     break;
// //   default:
// //     alert("Email is not correct");
// // }

// // var userNames = ["Sagar", "Darpan", "Beerbal", "Kamal", "Suneel", "Amar"];

// // for (var i = 0; i <= userNames.length; i++) {
// //   document.write(
// //     i + "&nbsp; &nbsp; &nbsp; &nbsp;" + userNames[i] + "<br  /> <br  /> <br  />"
// //   );
// // }

// // var userNames = ["Sagar", "Darpan", "Beerbal", "Kamal", "Suneel", "Amar"];

// // var i = 0;
// // while (i < 0) {
// //   document.write(
// //     i + "&nbsp; &nbsp; &nbsp; &nbsp;" + userNames[i] + "<br  /> <br  /> <br  />"
// //   );

// //   i++;
// // }

// // var i = 0;
// // do {
// //   document.write(
// //     i + "&nbsp; &nbsp; &nbsp; &nbsp;" + userNames[i] + "<br  /> <br  /> <br  />"
// //   );

// //   i++;
// // } while (i < 0);

// // events

// // onClick = "alert('heelo')"

// // function sayName(first, sec) {
// //   alert(first + " " + sec);
// // }

// // function sendEmail(email) {
// //   alert(email);
// // }

// // var name;

// // function formSubmit() {
// //   var saveEmail = document.getElementById("email").value;

// //   if (!saveEmail) {
// //     alert("Please type something.....");
// //   } else {
// //     document.getElementById("showEmail").innerHTML = saveEmail;
// //   }
// // }

// // var getElements = document.getElementsByTagName("p");

// // for (let i = 0; i < getElements.length; i++) {
// //   if (i === 1) {
// //     getElements[i].style.color = "green";
// //   } else {
// //     getElements[i].style.fontSize = "18px";
// //     getElements[i].style.color = "red";
// //   }
// // }

// // var getMain = document.getElementById("main");
// // var innerElements = getMain.getElementsByTagName("span").length;
// // alert(innerElements);

// // var table = document.getElementById("table");
// // table.style.display = "none";

// // function showTable() {
// //   table.style.display = "block";
// //   var cells = table.getElementsByTagName("td");
// //   for (var i = 0; i < cells.length; i++) {
// //     cells[i].style.backgroundColor = "pink";
// //   }
// // }

// // var createP = document.createElement("p");

// // var show = document.getElementById("cal").no

// // var getMainDiv = document.getElementById("div2").parentNode.nodeName;

// // alert(getMainDiv);

// // var getMainDiv = document.getElementById("div1").previousSibling.nodeName;

// // alert(getMainDiv);

// // var target = document.getElementById("div2");
// // var check = target.hasAttribute("name");
// // alert(check);

// // var target = document.getElementById("div2");
// // var check = target.getAttribute("id");

// // alert(check);

// // var target = document.getElementById("div2").attributes;
// // var numOfItems = target.length;

// // alert(numOfItems);

// // var main = document.getElementById("main");

// // var createP = document.createElement("p");
// // createP.setAttribute("class", "newClass");
// // createP.setAttribute("id", "p");

// // var data = "Hello Sagar Vasu.....";
// // var newText = document.createTextNode(data);

// // createP.appendChild(newText);

// // main.appendChild(createP);

// function showTable() {
//   var mainDiv = document.getElementById("data");
//   var pElement = document.createElement("p");
//   var newText = document.createTextNode("Hello");
//   pElement.appendChild(newText);
//   var bElement = document.createElement("b");
//   var bTextNode = document.createTextNode("Sagar Vasu");
//   bElement.setAttribute("id", "name");
//   bElement.appendChild(bTextNode);
//   pElement.appendChild(bElement);
//   mainDiv.appendChild(pElement);
// }

// function showImage() {
//   var mainDiv = document.getElementById("data");
//   var pElement = document.createElement("p");
//   var newText = document.createTextNode("Hello");
//   pElement.appendChild(newText);
//   var bElement = document.createElement("b");
//   var bTextNode = document.createTextNode("Sagar Vasu");
//   bElement.setAttribute("id", "name");
//   bElement.appendChild(bTextNode);
//   pElement.appendChild(bElement);
//   mainDiv.appendChild(pElement);
// }

// function showProfile() {
//   var mainDiv = document.getElementById("data");
//   var pElement = document.createElement("p");
//   var newText = document.createTextNode("Hello");
//   pElement.appendChild(newText);
//   var bElement = document.createElement("b");
//   var bTextNode = document.createTextNode("Sagar Vasu");
//   bElement.setAttribute("id", "name");
//   bElement.appendChild(bTextNode);
//   pElement.appendChild(bElement);
//   mainDiv.appendChild(pElement);
// }

// function showList() {
//   var mainDiv = document.getElementById("data");
//   var pElement = document.createElement("p");
//   var newText = document.createTextNode("Hello");
//   pElement.appendChild(newText);
//   var bElement = document.createElement("b");
//   var bTextNode = document.createTextNode("Sagar Vasu");
//   bElement.setAttribute("id", "name");
//   bElement.appendChild(bTextNode);
//   pElement.appendChild(bElement);
//   mainDiv.appendChild(pElement);
// }

// object === >

// var plan1 = {
//   name: "Basic",
//   price: 3.99,
//   space: 100,
//   transfer: 1000,
//   pages: 10,
// };

// plan1.discountMonths = [5, 7, 11];

// var mo = plan1.discountMonths[0];

// var plan1 = {
//   name: "Basic",
//   price: 3.99,
//   space: 100,
//   transfer: 1000,
//   pages: 10,
//   discountMonths: [6, 7],
//   calculateDiscount: calculate,
// };

// function calculate(discount) {
// var bestPrice = plan1.price;
// var currentDate = new Date();
// var thisMonth = currentDate.getMonth();
// for (let i = 0; i < plan1.discountMonths.length; i++) {
//   if (plan1.discountMonths[i] === thisMonth) {
//     var check = (bestPrice = plan1.price * discount);
//     return check * 12;
//   }

//   return bestPrice * 12;
// }
// }

// alert(plan1.calculateDiscount(0.3));

// function Plan(name, price, space, transfer, pages, discountMonths) {
//   (this.name = name),
//     (this.price = price),
//     (this.space = space),
//     (this.transfer = transfer),
//     (this.pages = pages);
//   this.discountMonths = discountMonths;
// }

// Plan.prototype.calculateDiscount = function calculate(discount) {
//   var bestPrice = this.price;
//   var currentDate = new Date();
//   var thisMonth = currentDate.getMonth();
//   for (let i = 0; i < this.discountMonths.length; i++) {
//     if (this.discountMonths[i] === thisMonth) {
//       var check = (bestPrice = this.price * discount);
//       return check * 12;
//     }

//     return bestPrice * 12;
//   }
// };

// Plan.prototype.newName = true;

// var plan1 = new Plan("Basic", 3.99, 100, 1000, 10, [4, 7]);
// var plan2 = new Plan("Professional", 5.99, 500, 5000, 50, [6, 9]);
// var plan3 = new Plan("Ultimate", 9.99, 2000, 20000, 500, [10, 11]);

// var allData = [];

// for (var key in plan1) {
//   if (plan1.hasOwnProperty(key)) {
//     allData.push(key);
//   }
// }

// var isOwnedProperty = plan1.hasOwnProperty("addNew");

// console.log(isOwnedProperty);

// var x = prompt("Where does the Pope live?");
// var y = prompt("Where does the Pope live?");
// if (x === "Vatican" && y === "yz") {
//   alert("Correct!");
// } else if (x === "Mithi") {
//   alert("Welcome");
// } else {
//   alert("sorry");
// }

// var check = false;

// for (var i = 0; i < 5; i++) {
//   if (x == i) {
//     alert("Thanks");
//     check = true;
//   }
// }

// if (check === false) {
//   alert("soryy");
// }

// var path = "http://www.mybeautifulsite.com/products/page33.html#humidifier";

// var name = "Sagar";
// function gotoPage(params) {
//   document.write(name);
// }

// Hek time

// setTimeout(() => {
//   name = "Kamal";
//   document.write(name);
// }, 3000);
// setTimeout(function () {
//   window.location.reload();
//   var dsjs = "Hsdjshdkhk";
//   document.write(dsjs);
// }, 3000);

// setInterval(function () {
//   var dsjs = "Hsdjshdkhk";
//   document.write(dsjs);
// }, 3000);

// function goForword() {
//   window.history.forward(1);
// }

// function checkForPopBlocker() {
//   var testPop = window.open("", "", "width=100,height=100");
//   if (testPop === null) {
//     alert("Please disable your popup blocker.");
//   }
//   //   testPop.close();
// }

// function checkForLastName() {
//   var lastName = document.getElementById("lastNameField");

//   if (!lastName.value || lastName.value.length < 4) {
//     alert("Please enter last name...");
//     lastName.focus();
//     lastName.style.border = "2px solid red";
//     lastName.style.outline = "none ";
//     lastName.style.background = "yellow";
//     return false;
//   }
// }

// function checkForSelection(id) {
//   var states = document.getElementById(id);
//   if (states.selectedIndex === 0) {
//     alert("Please Select a state");
//     return false;
//   } else {
//     var name = states.options[states.selectedIndex].text;
//     alert(name);
//   }
// }

// function validateRadios() {
//   var radios = document.getElementsByName("r1");

//   for (var i = 0; i < radios.length; i++) {
//     if (radios[i].checked) {
//       return true;
//     }

//   }

//     alert("Please check this");
//     return false;
// }

// function verifyZipCode(name) {
//   var code = document.getElementById(name).value;

//   var check = true;

//   if (code.length <= 4 || code.length > 5) {
//     alert("Please enter a 5-digit code.");
//     check = false;
//   }
//   for (var i = 0; i < 4; i++) {
//     var changeType = parseInt(code[i]);
//     if (isNaN(changeType)) {
//       alert("Please enter only numbers.");
//       check = false;
//       return false;
//     }
//   }

//   if (check === true) {
//     alert(code);
//   }
// }

function verifyEmail() {
  var myEmail = document.getElementById("email").value;
  var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;

  if (!myEmail.match(regex)) {
    alert("Please enter your correct email");
  }
}
