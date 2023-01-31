let data = [
    "lorem ip;lsakdjflkad f;lsakdjf  ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;aslkdjf ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs  lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;aslkdjf ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;aslkdjf ;aslkdjf ;laskjf ;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;aslkdjf ;aslkdjf  ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;aslkdjf  ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf f ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad ;aslkdjf ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsak;lsakdjf ;aslkdjf ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "loremakdjflkad f;lsakdjf ;aslkd ;asdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;af ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "loremp;lsakdjflkad f;lsakdjf skjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;alkdj;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdf ;slkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip f;lsakdjf ;aslkdjf ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem iflkad f;lsakdjf ;asldjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;asllkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsaadf ;aslkdjf ;akdjf ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
]


let container = document.querySelector("#container");
let currentMessage = 0;
let INTERVAL = 1000;
let addMessagetimer;
let MAX_MESSAGES = 25;
let MAX_RANGE = 50;
let timer;
let prevDiv;
let prevMessage;

const addMessage = (rootElement, message) => {
    let div = document.createElement("div");
    div.setAttribute("class", "message")
    let from = 0;
    let random = (Math.floor(Math.random() * (parseInt((document.querySelector("#speed").value)) / 2) + 3))
    let to = random <= message.length ? random : message.length;

    if (timer) {
        prevDiv.innerHTML = prevMessage;
        clearInterval(timer);
        timer = undefined;
    }

    timer = setInterval(() => {
        div.innerHTML += message.substring(from, to);
        from = to;
        if (from == message.length) {
            clearInterval(timer);
            timer = undefined;
        }
        random = (Math.floor(Math.random() * (parseInt((document.querySelector("#speed").value)) / 2) + 3))
        to = to + random <= message.length ? to + random : message.length;
    }, 0.01)

    if (rootElement.childNodes.length > MAX_MESSAGES) {
        rootElement.childNodes[0].remove()
    }
    rootElement.appendChild(div)
    prevDiv = div;
    prevMessage = message;

}

let shiftSpeed = () => {
    let speed = document.querySelector("#speed").value;

    clearInterval(addMessagetimer);
    currentMessage = 0;
    addMessagetimer = setInterval(() => {
        if (currentMessage < data.length) {
            addMessage(container, data[currentMessage])
        } else {
            currentMessage = -1;
        }
        currentMessage++;
    }, INTERVAL - Math.floor(speed * (INTERVAL / MAX_RANGE)))
}