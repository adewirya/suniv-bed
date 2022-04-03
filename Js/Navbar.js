function responsive(){

    let dropdown = document.getElementById("hamburger-content");
    
    if(dropdown.style.display == "flex")
        dropdown.style.display = "none"
    else
        dropdown.style.display = "flex"
}