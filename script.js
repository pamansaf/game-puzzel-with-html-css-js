// script gambar acak/reset 
onload = function() {
    let parent = document.getElementById('drag');
    let frag = document.createDocumentFragment();
    while (parent.children.length) {
        frag.appendChild(parent.children[Math.floor(Math.random() * parent.children.length)]);
    }
    parent.appendChild(frag);
}


// script untuk tarik gambar/game
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}
function allowDrop(event) {
    event.preventDefault();
}
function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}


