
function bgtowhite() {
    document.getElementById("skills").style.backgroundImage = 'none';
    document.getElementById("text1").style.color = "black";
    document.body.style.backgroundColor = "white";
}

function bgtoblack() {
    document.getElementById("skills").style.backgroundImage = 'none';
    document.getElementById("text1").style.color = "white";
    document.body.style.backgroundColor = "black";
}

function bgtoblue() {
    document.getElementById("skills").style.backgroundImage = 'none';
    document.getElementById("text1").style.color = "pink";
    document.body.style.backgroundColor = "blue";
}

function bgtogreen() {
    document.getElementById("skills").style.backgroundImage = 'none';
    document.getElementById("text1").style.color = "orange";
    document.body.style.backgroundColor = "green";
}

function bgtored() {
    document.getElementById("skills").style.backgroundImage = 'none';
    document.getElementById("text1").style.color = "blue";
    document.body.style.backgroundColor = "red";
    document.body.ol.style.color = "white";
}


function fontto15() {
    document.getElementById("text1").style.fontSize = "15px";
}

function fontto25() {
    document.getElementById("text1").style.fontSize = "25px";
}

function fontto10() {
    document.getElementById("text1").style.fontSize = "10px";
}

function show() {
    var i = 0;
    while (localStorage.getItem(i)) {
        var point = document.createElement('li');
        var input = localStorage.getItem(i);
        var text = document.createTextNode(input);
        point.appendChild(text);
        document.getElementById('output').appendChild(point);
        i++;
    }
}

function update() {
    var i = 0;
    while (localStorage.getItem(i)) {
      i++;
    }
  
    localStorage.setItem(i, document.getElementById("input").value);
  
    var point = document.createElement('li');
    var input = localStorage.getItem(i);
    var text = document.createTextNode(input);
    point.appendChild(text);
    document.getElementById('output').appendChild(point);
    document.getElementById("input").value = "";
}

function clear() {
    localStorage.clear();
}

function page() {
    window.location.href = "image.html";
}