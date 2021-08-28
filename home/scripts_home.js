// Efects
const burger = document.getElementById("burger")
const navUl = document.getElementById("navUl")
const nav = document.getElementById("nav")
const dark = document.getElementById("dark")
const sectionMain = document.getElementById("section__main")
const logo = document.getElementById("logo")
const body = document.getElementsByTagName("body")[0]

const activeNav = ()=>{
    navUl.classList.toggle("nav__ul-active")
    dark.classList.toggle("dark")
    body.classList.toggle("body")
}
burger.addEventListener("click",()=>{
    activeNav()
});
dark.addEventListener("click",(e)=>{
    if(e.target.id != "navUl"){
        activeNav()
    }
})

window.addEventListener("load", ()=>{
    setTimeout(()=>{
        logo.classList.add("rotation")
    },1000)
})
