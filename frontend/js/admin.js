function adminLogin(){

const username = document.getElementById("adminUser").value;
const password = document.getElementById("adminPass").value;

if(username === "anuj" && password === "anuj1234"){

document.getElementById("loginSection").style.display = "none";
document.getElementById("adminPanel").style.display = "block";

}else{

alert("Invalid admin credentials");

}

}

const form = document.getElementById("candidateForm");

form.addEventListener("submit", async (e) => {

e.preventDefault();

const name = document.getElementById("name").value;
const party = document.getElementById("party").value;

const res = await fetch("https://online-voting-system-api.onrender.com/api/candidates/add", {

method: "POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({
name,
party
})

});

const data = await res.json();

const msg = document.getElementById("message");

msg.classList.add("message");
msg.innerText = data.message;

});