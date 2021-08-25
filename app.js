function activeMenu() {
    let hamburguer = document.getElementById("hamburguer")
    let element = document.getElementById("menu")
    if (hamburguer.className === "fas fa-bars") {
        hamburguer.className = "fas fa-times"
        element.className += " active"
    } else {
        hamburguer.className = "fas fa-bars"
        element.className = "menu-container"
        
    }

}