const userId = localStorage.getItem("userId");

async function loadCandidates(){

const res = await fetch("https://online-voting-system-api.onrender.com");

const candidates = await res.json();

const list = document.getElementById("candidateList");

list.innerHTML="";

candidates.forEach(c => {

const div = document.createElement("div");

div.classList.add("card");

div.innerHTML = `
<h3>${c.name}</h3>
<p>${c.party}</p>
<button onclick="vote('${c._id}')">Vote</button>
<p id="msg-${c._id}" class="message" style="display:none;"></p>
`;

list.appendChild(div);

});

}

async function vote(candidateId){

const res = await fetch("https://online-voting-system-api.onrender.com", {

method: "POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({
userId,
candidateId
})

});

const data = await res.json();

const msg = document.getElementById(`msg-${candidateId}`);

msg.style.display="block";
msg.innerText = data.message;

}

loadCandidates();