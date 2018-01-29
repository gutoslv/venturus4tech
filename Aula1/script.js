function sendMessage() {
    let msgEl = document.getElementById('message');
    let msg = msgEl.value;
    console.log(msg);
    if (!msg) {
        alert('Coloque uma mensagem');
        return;
    }

    let li = document.createElement('li');
    li.innerHTML = msg;

    let divTime = document.createElement('div');
    divTime.className = "time";
    time = new Date();

    divTime.innerHTML = formatTime(time);
    
    li.appendChild(divTime);

    let list = document.getElementById('messageList')
    list.appendChild(li);

    let divScr = document.getElementById ("scrl");
    divScr.scrollTop = divScr.scrollHeight;

    msgEl.focus();
    msgEl.value = '';
}

function keyup(event) {
    updateCounter();
    if(event.keyCode == 13 && event.shiftKey == false) {
        sendMessage();
        console.log(event);
    }
}

function formatTime(data) {
    let hours = data.getHours();
    let mins = data.getMinutes();
    let ext;

    if (hours >11){
        ext = 'P.M.'
    } else if(hours <= 11){
        ext = 'A.M.'
    }

    return hours + ':' + mins + ' ' + ext;
}

function updateCounter(){
    let len = document.getElementById('message').value.length;
    document.getElementById('counter').innerHTML = len  + '/500'
}