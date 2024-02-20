//Menu lateral
let menu_visible = false;
let menu = document.getElementById('nav')
console.log(menu)
function mostrarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "none";
        menu_visible = true;
    }
    else{
        menu.style.display = "block";
        menu_visible = false;
    }
}
console.log(mostrarMenu())