let data = [
    "Hi! I am Shafiul Muslebeen",
    "",
    "I have a bachelor's degree in Computer Science and Engineering from BRAC University",
    "",
    "I'm currently working as a Junior Software Engineer at Mediusware Ltd.",
    "",
    "I make all kinds of apps like this one you are seeing",
    "",
    "I'm a full stack developer focusing on MERN stack",
    "",
    "I also develop cross-platform mobile apps using React Native",
    "",
    "If you want to collaborate with me",
    "you can reach me via email at ayonshafiul@gmail.com",
    "or you can check out my github at <a href='https://github.com/ayonshafiul'>ayonshafiul</a>",
    "",
    "Thank You!."
]


let container = document.querySelector("#container");
let currentMessage = 0;
let INTERVAL = 1500;
let NAME = 'shafiul';
let AT = 'bio';
let CHARACTER_RANDOMNESS_LIMIT = 3;
let INTERVAL_BETWEEN_TYPED_CHARACTERS = 10; // in ms

let addMessagetimer;
let timer;
let prevDiv;
let prevMessage;

const addMessage = (rootElement, message) => {
    let div = document.createElement("div");
    div.setAttribute("class", "message")

    let from = 0;
    let random = Math.random() * CHARACTER_RANDOMNESS_LIMIT
    let to = random <= message.length ? random : message.length;

    if (timer) {
        prevDiv.innerHTML = `<span class='name'>${NAME}</span>@<span class='at'>${AT}>  </span>${prevMessage}`;;
        clearInterval(timer);
        timer = undefined;
    }

    timer = setInterval(() => {
        div.innerHTML = `<span class='name'>${NAME}</span>@<span class='at'>${AT}> </span>${message.substring(0, to)}`;
        from = to;
        if (from == message.length) {
            clearInterval(timer);
            timer = undefined;
        }
        random = Math.floor(Math.random() * CHARACTER_RANDOMNESS_LIMIT)
        to = to + random <= message.length ? to + random : message.length;
    }, INTERVAL_BETWEEN_TYPED_CHARACTERS)
    rootElement.appendChild(div)
    prevDiv = div;
    prevMessage = message;
}

let shiftSpeed = (multiplier = 1) => {
    clearInterval(addMessagetimer);
    currentMessage = 0;
    addMessagetimer = setInterval(() => {
        if (currentMessage < data.length) {
            addMessage(container, data[currentMessage])
        } else {
            clearInterval(addMessagetimer)
        }
        currentMessage++;
    }, INTERVAL * multiplier)
}


setTimeout(() => {
    shiftSpeed()
}, 1000)