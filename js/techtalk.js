var impress = impress();
impress.init();
timing = setInterval(impress.next, 80000);
if (typeof timing !== 'undefined') clearInterval(timing);

var form = document.getElementById("ask-form");

localStorage.setItem('techtalk', "chrome devtools");

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
};

NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
};

form.querySelector("#send").onclick = function(event) {
    console.time("Tempo para responder");
    
    var ask = form.querySelector("#ask").value.toLowerCase(),
        answer = form.querySelector("#answer");

    if(document.getElementById("answer-media").querySelector("img") != null){
        document.getElementById("answer-media").querySelector("img").remove();
    }

    if(ask.indexOf("horas são") > -1){
        insertAnswer("Olá, agora são " + new Date().getHours() + ":" + new Date().getMinutes());
    } else if (ask.indexOf("sentido da vida") > -1) {
        insertAnswer("O sentido da vida é 42");
    } else if (ask.indexOf("flash ou html5") > -1) {
        insertAnswer("Claro que é o Flash");
        setTimeout(function(){
            insertAnswer("Estou brincando HTML5 rocks my body");
        }, 3000);
    } else if (ask.indexOf("surfista da elo7") > -1) {
        insertAnswer("Humm... acho que é o Rubens... ");
        setTimeout(function(){
            insertAnswer("Humm... acho que é o Rubens... Não espera deve ser o Mario...");
            setTimeout(function(){
                insertAnswer("Humm... acho que é o Rubens... Não espera deve ser o Mario... Ah não agora lembrei é o Adolfo... olha só a cara de surfista dele:");
                document.querySelector("#answer-media").innerHTML = '<img src="images/pp.jpg" class="blink">';
                setTimeout(function(){
                    insertAnswer("❤ Much beautiful, such hair... ❤");
                }, 3000);
            }, 3000);
        }, 3000);
    }
    answer.classList.remove("hide");
    console.timeEnd("Tempo para responder");
}

function insertAnswer(answer) {
    document.querySelector("#ask-form span").innetHTML = answer;
    form.querySelector("#ask").value = "";
}