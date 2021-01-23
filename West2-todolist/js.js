var events = new Array();
var eventsFinish = new Array();
let add = document.getElementById('add');
add.onclick = function (){
    events[events.length] = document.getElementById("newEvent-input").value;
    document.getElementById("newEvent-input").value = "";
    eventDisplay();
}
function eventDisplay(){
    cleanEvent();
    for (i in events){
        var newEvent = document.createElement('div');
        newEvent.className = "boxSon";
        newEvent.id = "box" + i;
        var eventContext = document.createElement('input');
        eventContext.type = "text";
        eventContext.placeholder = "New To-Do";
        eventContext.id = "eventContext" + i;
        eventContext.className = "eventContext";
        eventContext.value = events[i];
        eventContext.style = "color:white;";
        eventContext.onblur = function (){
            for (j in events) {
                events[j] = document.getElementById("eventContext" + j + "").value;
            }
        }
        var finishBtn = document.createElement('input');
        finishBtn.type = "button";
        finishBtn.value = "Finished"
        finishBtn.id = "finishBtn" + i;
        finishBtn.className = "button finishBtn";
        finishBtn.onclick = function (){
            var deleteId = this.id.match(/finishBtn(\S*)/)[1];
            eventsFinish[eventsFinish.length] = events[deleteId];
            events.splice(deleteId,1);
            eventDisplay();
        }
        var deleteBtn = document.createElement('input');
        deleteBtn.type = "button";
        deleteBtn.value = "Delete"
        deleteBtn.id = "deleteBtn" + i;
        deleteBtn.className = "button deleteBtn";
        deleteBtn.onclick = function (){
            var deleteId = this.id.match(/deleteBtn(\S*)/)[1];
            events.splice(deleteId,1);
            eventDisplay();
        }
        newEvent.appendChild(eventContext);
        newEvent.appendChild(finishBtn);
        newEvent.appendChild(deleteBtn);
        document.getElementById("to-do-list").appendChild(newEvent);
    }
    for (i in eventsFinish){
        var newEvent = document.createElement('div');
        newEvent.className = "boxSon";
        var eventContext = document.createElement('input');
        eventContext.type = "text";
        eventContext.placeholder = "New To-Do";
        eventContext.id = "eventContext" + i;
        eventContext.className = "eventContext";
        eventContext.value = eventsFinish[i];
        eventContext.style = "color:white;";
        eventContext.disabled = "disabled";

        var deleteBtn = document.createElement('input');
        deleteBtn.type = "button";
        deleteBtn.value = "Delete"
        deleteBtn.id = "delete" + i;
        deleteBtn.className = "button deleteBtn";
        deleteBtn.onclick = function (){
            var deleteId = this.id.match(/delete(\S*)/)[1];
            eventsFinish.splice(deleteId,1);
            eventDisplay();
        }
        newEvent.appendChild(eventContext);
        newEvent.appendChild(deleteBtn);
        document.getElementById("finished-list").appendChild(newEvent);
    }
}
// function eventDisplay(){
//     cleanEvent();
//     for (i in events){
//
//
//         if (events[i].finished){
//             finishBtn.disabled = "disabled"
//             eventContext.disabled = "disabled"
//         }
//         if (events[i].finished){
//             document.getElementById("finished-list").appendChild(newEvent);
//         }else{
//             newEvent.appendChild(finishBtn);
//             newEvent.appendChild(deleteBtn);
//             document.getElementById("to-do-list").appendChild(newEvent);
//         }
//     }
// }
function cleanEvent(){
    document.getElementById("to-do-list").innerHTML = "";
    document.getElementById("finished-list").innerHTML = "";
}