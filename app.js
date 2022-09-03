let numbers = [1, 2, 3, 6, 9, 8, 7, 4];
const ids = [1, 2, 3, 6, 9, 8, 7, 4];

let button5 = document.getElementById("btn5");
let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");
let button4 = document.getElementById("btn4");
let button6 = document.getElementById("btn6");
let button7 = document.getElementById("btn7");
let button8 = document.getElementById("btn8");
let button9 = document.getElementById("btn9");

//clockwise direction using the button 5
button5.addEventListener("click", function() {
    numbers.unshift(numbers.pop());
    for (i = 0; i <= 7; i++) {
        document.getElementById("btn" + ids[i]).innerHTML = numbers[i];
    }
})

//anti clockwise direction

let antiClock = [button1, button2, button3, button4, button6, button7, button8, button9]
if (antiClock) {
    antiClock.map(btns => {
        btns.addEventListener("click", function() {
            numbers.push(numbers.shift())
            for (i = 0; i < numbers.length; i++) {
                document.getElementById("btn" + ids[i]).innerHTML = numbers[i]

            }

        })
    })
}