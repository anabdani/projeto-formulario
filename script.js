
const form = document.getElementById("form");

const username = document.getElementById("username");

const email = document.getElementById("email");

const password= document.getElementById("password");

const pssworconfirmation= document.getElementBId("password-confirmation");

form.addEventListener("submit",(event) =>{
     event.preventDefault();

      checkInputUsername();
})

function checkInputUsername(){
    const usernameValue  = username.Value;

if(usernameValue === ""){
        errorInput(username, "preencha um username!")
     }

}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage  = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}