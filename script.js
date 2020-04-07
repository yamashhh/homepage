function changeTheme() {
    // Change theme of body
    let body = document.body;
    body.classList.toggle("dark-mode");
    // Change theme of navbar
    let nav = document.getElementById("nav");
    if (nav.classList.contains("bg-primary")) {
        console.log(nav.classList.contains("bg-primary"));
        nav.classList.replace("bg-primary", "bg-dark");
    } else {
        nav.classList.replace("bg-dark", "bg-primary");
    }
    // Change theme of footer
    let footer = document.getElementById("footer");
    footer.classList.toggle("dark-mode");
    // Change theme of table (about.html)
    if (document.getElementById("table")) {
        let table = document.getElementById("table");
        table.classList.toggle("table-dark");
    }
}
