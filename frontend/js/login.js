const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {

e.preventDefault();

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

const res = await fetch("https://online-voting-system-api.onrender.com/api/auth/login", {

method: "POST",

headers: {
"Content-Type": "application/json"
},

body: JSON.stringify({
email,
password
})

});

const data = await res.json();

if(res.ok){

localStorage.setItem("userId", data.user._id);

window.location.href = "vote.html";

}else{

alert(data.message);

}

});