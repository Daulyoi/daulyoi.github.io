let foto = document.getElementById("targetFoto");
let nama = document.getElementById("targetNama");

if (nama) {
    nama.addEventListener("mouseover", changeImage);
    nama.addEventListener("mouseout", revertImage);
}else {
    console.log("nama nya null jir");
}


function changeImage() {
    foto.src = "./images/foto-bulet-2.png";
    console.log("changeImage called");
}

function revertImage() { 
    foto.src = "./images/foto-bulet-1.png";
    console.log("revertImage called");
}