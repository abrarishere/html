var typed = new Typed(".typing", {
    strings: ["Web Designer", "Web Developer", "Student"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})
/*Aside */
const nav = document.querySelector(".nav"),
    navList = document.querySelector("li"),
    totalNavList = navList.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        for (let j = 0; j < totalNavList; j++) {
            navList[j].querySelector("a").classList.remove("active");
        }
        // for (let j = 0; j < totalNavList; j++) {
        //     if (navList[j].querySelector("a").classList.contains("active")) {
        //         navList[j].querySelector("a").classList.remove("active");
        //     }
        // }
        this.classList.add("active");
        showSection(this);

    })
}
function showSection(element) {
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("." + target).classList.add("active");
}