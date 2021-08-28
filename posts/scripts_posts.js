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
window.addEventListener("scroll", ()=>{
    const relNav = sectionMain.getBoundingClientRect(); 
    if(relNav.y < 0){
        logo.classList.add("rotate__scale")
        nav.classList.add("nav-active","nav__fixed")
    }
    else{
        logo.classList.remove("rotate__scale")
        nav.classList.remove("nav__fixed", "nav-active")
    }
})

// Check form

const inputs = document.querySelectorAll(".input")
const form = document.getElementById("form")

const fields = {
    name:false,
    email:false,
    phone:false
}

const checkForm = (e) =>{
    switch(e.target.name){
        case "name":
            validateField(expresions.name,e.target,"name");
            break;
        case "email":
            validateField(expresions.email,e.target,"email");
            break;
        case "phone":
            validateField(expresions.phone,e.target,"phone");
            break;
    }
}

const validateField = (expresion,input,field) =>{
    if(expresion.test(input.value)){
        document.getElementById("p__form-error").classList.remove("p__form-error")

        fields[field] = true
    }else {
        document.getElementById("p__form-error").classList.add("p__form-error");
        fields[field] = false
    }
}

inputs.forEach((input)=>{
    input.addEventListener("change",checkForm);
    input.addEventListener("keyup",checkForm);
})

const expresions = {
    name: /^[a-zA-ZÀ-ÿ\s]{3,16}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/ 
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const datos = new FormData(form);
    const formValues = Object.values(fields)
    console.log(formValues)
    const valid = formValues.findIndex(value => value == false)
    if(valid == -1){
        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("phone").value = ""

        document.getElementById("p__form-check").classList.add("p__form-check");
        
        setTimeout(()=>{
            document.getElementById("p__form-check").classList.remove("p__form-check");
        },2000)

    }
})