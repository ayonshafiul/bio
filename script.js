let data = [
    "lorem ip;lsakdjflkad f;lsakdjf ;aslkdjf ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;aslkdjf ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;aslkdjf ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;aslkdjf ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;aslkdjf ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;aslkdjf ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;aslkdjf ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;aslkdjf ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;aslkdjf ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;aslkdjf ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;aslkdjf ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;aslkdjf ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;aslkdjf ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;aslkdjf ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;aslkdjf ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;aslkdjf ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;aslkdjf ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;aslkdjf ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;aslkdjf ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;aslkdjf ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;aslkdjf ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;aslkdjf ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;aslkdjf ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;aslkdjf ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
    "lorem ip;lsakdjflkad f;lsakdjf ;aslkdjf ;aslkdjf ;laskjf ;laskjf;alskdjfksjdfkjs dfkjs lfkjsdf",
]


let container = document.querySelector("#container");
let currentMessage = 0;
let INTERVAL = 1000;
let addMessagetimer;
let MAX_MESSAGES = 20;

const addMessage = (rootElement, message) => {
    let div = document.createElement("div");
    div.setAttribute("class", "message")
    let from = 0;
    let random = (Math.floor(Math.random() * 3) + 3)
    let to = random <= message.length ? random : message.length;


    let timer = setInterval(() => {
        div.innerHTML += message.substring(from, to);
        from = to;
        if (from == message.length) {
            clearInterval(timer);
        }
        random = (Math.floor(Math.random() * parseInt(document.querySelector("#speed").value + 2)))
        to = to + random <= message.length ? to + random : message.length;
    }, 1)

    if (rootElement.childNodes.length > MAX_MESSAGES) {
        rootElement.childNodes[0].remove()
    }
    rootElement.appendChild(div)

}

let shiftSpeed = () => {
    let speed = document.querySelector("#speed").value;

    clearInterval(addMessagetimer);
    currentMessage = 0;
    addMessagetimer = setInterval(() => {
        if (currentMessage < data.length) {
            addMessage(container, data[currentMessage])
        } else {
            currentMessage = 0;
        }
        currentMessage++;
    }, INTERVAL - speed * 20)
}