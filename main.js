function adduser(){
    localStorage.setItem("p1",document.getElementById("user1").value);
    localStorage.setItem("p2",document.getElementById("user2").value);
    window.location = "game.html";
}