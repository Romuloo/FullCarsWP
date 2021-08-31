
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

const validateField = (expression,input,field) =>{
    if(expression.test(input.value)){
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

//JSON stuff
const postData = [
    {
        postNum: 0,
        text: "In the current market we find different types of vehicles. Within the categories established by the automotive industry there is a segment unmistakable due to its size and appearance. We are talking about compact cars. This segment corresponds to the smallest cars on the market."
    },
    {
        postNum: 1,
        text: "The future is closer than we think and innovation in electric cars with it. The automotive industry has been developing over the years the next step in ecological and environmentally friendly mobility. And we tell you, Volkswagen is not far behind."
    },
    {
        postNum: 2,
        text: "For most people, buying a vehicle is a decision that cannot be taken lightly. For example, after buying a home, buying a car becomes the next most important financial operation of their lives and one that they will surely have to repeat."
    },
    {
        postNum: 3,
        text: "You may not have much experience in washing cars, so a guide will be very good for you. Especially since a proper cleaning for your vehicle has many advantages. For example, in monetary terms, do you know how much a fumigation costs?"

    },
    {
        postNum: 4,
        text: "Oil levels, brake condition, engine quality and operation, and even scratches. They are just some aspects that you should take care of your vehicle. But what to do when you can't go to the garage for many days? This due to force majeure reasons, such as a quarantine."

    },
    {
        postNum: 5,
        text: "An exhaust system involves a series of parts and pipes. These are responsible for directing the gases produced by the engine towards the back of your car. In addition, it removes harmful substances and reduces the noise level."
    },
    {
        postNum: 6,
        text: "We are an internet forum in English oriented initially to the automotive that allows the visualization of posts on cars."
    },
    {
        postNum: 7,
        text: "Read our posts and learn more about the exciting world of cars. If you want to receive the latest updates do not hesitate to subscribe!"
    }
]

for (let i=0; i<postData.length; i++){
    document.getElementById("post_"+ i).innerHTML = postData[i].text
}


