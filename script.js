function changeTheme() {
    let body = document.body;
    body.classList.toggle("dark-mode");
<<<<<<< HEAD
    let footer = document.getElementById("footer");
    footer.classList.toggle("dark-mode");

    let nav = document.getElementById("nav");
    if (nav.classList.contains("bg-primary")) {
        console.log(nav.classList.contains("bg-primary"));
        nav.classList.replace("bg-primary", "bg-dark");
    } else {
        nav.classList.replace("bg-dark", "bg-primary");
    }

    if (document.getElementById("table")) {
        let table = document.getElementById("table");
        table.classList.toggle("table-dark");
    }
=======
>>>>>>> 1dbdc54e4500d8fd6b23307e3912edd1f6b212ca
}
