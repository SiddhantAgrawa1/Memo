let element = []
let color = ['#B7CFE9',' #CAF1DE','#E1F8DC','#FEF8DD','#FFE7C7']


for(let i=1;i<=25;i++){
    element.push(i)
}

Array.prototype.shuffle = function(){
    this.sort(function(){return Math.round(Math.random()) - .5;});
    return this;
};

element.shuffle()

const newArr = [];
while(element.length) newArr.push(element.splice(0,5));
    
let outer_container = document.getElementById('outer-container');
let container = document.getElementById('container-1');

let row = ""
for(let i=0; i<5; i++){
    row += `<div class="row-container">`
    color.shuffle()
    for(let j=0; j<5; j++){
        row += `<div class="row-1" style='background-color:${color[j]}'>${newArr[i][j]}</div>`
    }
    row += "</div>"
}
container.innerHTML = row;

var time = 0;
var running = 0;
 
function startPause() {
    if (running == 0) {
        running = 1;
        increment();
        document.getElementById("startPause").innerHTML = "PAUSE";
    } else {
        running = 0;
        document.getElementById("startPause").innerHTML = "RESUME";
    }
}
function reset(){
    running = 0;
    time = 0;
    document.getElementById("startPause").innerHTML = "START";
    document.getElementById("output").innerHTML = "00:00";
    window.location.reload();
}
 
function increment() {
    if (running == 1) {
        setTimeout(function() {
            time++;
            var mins = Math.floor(time/10/60);
            var secs = Math.floor(time/10 % 60);
            var tenths = time % 10;
            if (mins < 10) {
              mins = "0" + mins;
            }
            if (secs < 10) {
              secs = "0" + secs;
            }
            document.getElementById("output").innerHTML = mins + ":" + secs ;
            increment();
        },100);
    }
}