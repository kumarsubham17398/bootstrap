var number1 = 34;
var number2 = 56;
var num1 = 455;
var num2 = 56.76;
var str1 = "This is a string";
var str2 = 'This is also a string';
var marks = {
    ravi: 34,
    shubham: 78,
    aman: 99.977
}
var a = true;
var b = false;
var und;
var n = null;
var arr = [1, 2, "bablu", 4, 5]
var a = 100;
var b = 10;
g("The value of a / b is ", a / b);
var c = b;
var x = 34;
var y = 56;
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
c1 = avg(4, 6);
c2 = avg(14, 16);
var arr = [1, 2, 3, 4, 5, 6, 7];
let myArr = ["Fan", "Camera", 34, null, true];
let myLovelyString = "Harry is a good boy good good Harry";
d = myLovelyString.replace("Harry", "Rohan");
let myDate = new Date();
let elem = document.getElementById('click');
let elemClass = document.getElementsByClassName("container")
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
tn = document.getElementsByTagName('div')
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);
summ = (a, b) => {
    return a + b;
}

logKaro = () => {
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
    console.log("I am your log")
}
a = 34;
console.log(`this is my ${a}`)